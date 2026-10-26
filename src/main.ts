import "./styles.css";
import emailjs from "@emailjs/browser";
import { setupRecaptcha } from "./recaptcha";
import { trackConversion } from "./analytics";
import { initSharedJS } from "./layout";
import { initReviews } from "./reviews";

initSharedJS();
initReviews();

// Proceso interactivo
(function () {
  const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>(".proceso-tab"));
  const descs = Array.from(document.querySelectorAll<HTMLElement>(".proceso-desc"));
  const dots = Array.from(document.querySelectorAll<HTMLElement>(".proceso-dot"));
  const prevBtn = document.querySelector<HTMLButtonElement>("#proceso-prev");
  const nextBtn = document.querySelector<HTMLButtonElement>("#proceso-next");
  if (!tabs.length) return;
  let current = 0;

  function goTo(i: number) {
    tabs[current].classList.remove("active");
    descs[current].classList.remove("active");
    dots[current]?.classList.remove("active");
    current = i;
    tabs[current].classList.add("active");
    descs[current].classList.add("active");
    dots[current]?.classList.add("active");
    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current === tabs.length - 1;
  }

  tabs.forEach((tab, i) => tab.addEventListener("click", () => goTo(i)));
  prevBtn?.addEventListener("click", () => goTo(current - 1));
  nextBtn?.addEventListener("click", () => goTo(current + 1));
})();

// Nav activo según sección visible
(function () {
  const sectionToNav: Record<string, string> = {
    inicio:        "/",
    "sobre-mi":    "#sobre-mi",
    formacion:     "#sobre-mi",
    "como-funciona": "#como-funciona",
    "para-mi":     "#como-funciona",
    proceso:       "#como-funciona",
    resenas:       "#como-funciona",
    sesiones:      "#como-funciona",
    preguntas:     "#contacto",
    contacto:      "#contacto",
  };

  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("#main-nav a"));

  function setActive(navHref: string) {
    navLinks.forEach(link =>
      link.classList.toggle("active", link.getAttribute("href") === navHref)
    );
  }

  function update() {
    const scrollY = window.scrollY + 140;
    let current = "/";
    for (const [id, href] of Object.entries(sectionToNav)) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) current = href;
    }
    setActive(current);
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
})();

// Formulario de contacto
const EMAILJS_PUBLIC_KEY  = "D6aaLs4Nq8GnkoaXR";
const EMAILJS_SERVICE_ID  = "service_gxwhxar";
const EMAILJS_TEMPLATE_ID = "template_4f9gdkm";

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

const form = document.querySelector<HTMLFormElement>("#contact-form");
if (form) {
  const getCaptchaToken = setupRecaptcha(form);
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector<HTMLButtonElement>("button[type='submit']");
    if (!btn || btn.disabled) return;
    try {
      // Si Google duda, muestra un reto; si se cierra sin resolver, no se envía nada
      await getCaptchaToken();
    } catch {
      btn.textContent = "No se pudo verificar. Inténtalo de nuevo.";
      return;
    }
    btn.textContent = "Enviando…";
    btn.disabled = true;
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
      btn.textContent = "Enviado. Te respondo pronto.";
      btn.classList.add("btn-success");
      trackConversion("lead");
      form.reset();
    } catch {
      btn.textContent = "Error al enviar. Inténtalo de nuevo.";
      btn.disabled = false;
    }
  });
}
