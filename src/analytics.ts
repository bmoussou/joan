// Etiqueta de Google (Google Ads) con aviso de cookies.
// No se carga nada de Google hasta que la persona acepta (RGPD / guía de la AEPD).

/** ID de la etiqueta de Google Ads ("AW-XXXXXXXXXX"). Vacío = sin medición. */
const GOOGLE_TAG_ID = "";

/** Etiquetas de conversión de Google Ads ("AW-XXXXXXXXXX/abcDEF123"). */
const CONVERSIONS = {
  lead: "",
  whatsapp: "",
  email: "",
};

type Conversion = keyof typeof CONVERSIONS;

const CONSENT_KEY = "relleu-cookies-v1";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function getConsent(): "granted" | "denied" | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function setConsent(v: "granted" | "denied") {
  try {
    localStorage.setItem(CONSENT_KEY, v);
  } catch { /* sin almacenamiento disponible */ }
}

let loaded = false;

function loadGoogleTag() {
  if (loaded || !GOOGLE_TAG_ID) return;
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js necesita el objeto arguments tal cual
    window.dataLayer!.push(arguments);
  };
  window.gtag("consent", "default", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "denied",
    analytics_storage: "granted",
  });
  window.gtag("js", new Date());
  window.gtag("config", GOOGLE_TAG_ID);

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
  document.head.appendChild(s);
}

export function trackConversion(kind: Conversion) {
  if (!loaded || !window.gtag) return;
  const sendTo = CONVERSIONS[kind];
  if (sendTo) window.gtag("event", "conversion", { send_to: sendTo });
  window.gtag("event", kind === "lead" ? "generate_lead" : `contact_${kind}`);
}

function showBanner() {
  const banner = document.createElement("div");
  banner.className = "cookie-banner";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-label", "Aviso de cookies");
  banner.innerHTML = `
    <p>Uso cookies de Google solo para saber si los anuncios funcionan. Nada más. ¿Me dejas?</p>
    <div class="cookie-banner-actions">
      <button type="button" class="btn btn-ghost btn-small" data-consent="denied">Rechazar</button>
      <button type="button" class="btn btn-small" data-consent="granted">Aceptar</button>
    </div>`;
  banner.querySelectorAll<HTMLButtonElement>("[data-consent]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const v = btn.dataset.consent as "granted" | "denied";
      setConsent(v);
      if (v === "granted") loadGoogleTag();
      banner.remove();
    })
  );
  document.body.appendChild(banner);
}

export function initAnalytics() {
  if (!GOOGLE_TAG_ID) return;

  const consent = getConsent();
  if (consent === "granted") loadGoogleTag();
  else if (consent === null) showBanner();

  document.addEventListener("click", (e) => {
    const a = (e.target as Element | null)?.closest?.("a");
    if (!a) return;
    if (a.href.includes("wa.me/")) trackConversion("whatsapp");
    else if (a.href.startsWith("mailto:")) trackConversion("email");
  });
}
