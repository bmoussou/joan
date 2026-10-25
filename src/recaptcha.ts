// reCAPTCHA invisible de Google. EmailJS comprueba el token en su servidor y
// rechaza los envíos sin captcha, así nadie puede agotar la cuota con un script.
// (No se usa Turnstile porque es de Cloudflare y cae con los bloqueos de LaLiga.)

const SITE_KEY = "6Ld2qQAuAAAAAIJJowvelj-b5cp5TzVPYMxU3GPm";

interface Grecaptcha {
  ready(cb: () => void): void;
  render(
    el: HTMLElement,
    opts: {
      sitekey: string;
      size: "invisible";
      callback: (token: string) => void;
      "error-callback": () => void;
    }
  ): number;
  execute(id: number): void;
  reset(id: number): void;
}

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

let loading: Promise<Grecaptcha> | null = null;

function loadScript(): Promise<Grecaptcha> {
  loading ??= new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "https://www.google.com/recaptcha/api.js?render=explicit&hl=es";
    s.async = true;
    s.onload = () => window.grecaptcha!.ready(() => resolve(window.grecaptcha!));
    s.onerror = () => {
      loading = null;
      reject(new Error("No se pudo cargar reCAPTCHA"));
    };
    document.head.appendChild(s);
  });
  return loading;
}

/**
 * Prepara el captcha dentro del formulario (sendForm envía el token como un campo más)
 * y devuelve una función que pide un token nuevo antes de cada envío.
 */
export function setupRecaptcha(form: HTMLFormElement): () => Promise<string> {
  const box = document.createElement("div");
  form.appendChild(box);
  form.insertAdjacentHTML(
    "beforeend",
    `<p class="form-legal">Protegido por reCAPTCHA. Se aplican la
      <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">política de privacidad</a> y las
      <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">condiciones</a> de Google.</p>`
  );

  let widget: number | null = null;
  let pending: { resolve: (t: string) => void; reject: (e: Error) => void } | null = null;

  const init = () =>
    loadScript().then((g) => {
      widget ??= g.render(box, {
        sitekey: SITE_KEY,
        size: "invisible",
        callback: (token) => {
          pending?.resolve(token);
          pending = null;
        },
        "error-callback": () => {
          pending?.reject(new Error("reCAPTCHA falló"));
          pending = null;
        },
      });
      return g;
    });

  // Se carga al empezar a rellenar el formulario, no al abrir la página
  form.addEventListener("focusin", () => void init().catch(() => {}), { once: true });

  return async () => {
    const g = await init();
    g.reset(widget!);
    return new Promise<string>((resolve, reject) => {
      pending = { resolve, reject };
      g.execute(widget!);
    });
  };
}
