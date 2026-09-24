import "./styles.css";
import { renderHeader, renderFooter, initSharedJS } from "./layout";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("No se encontró el contenedor #app");

app.innerHTML = `
  ${renderHeader("como")}

  <main>

    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="container page-hero-inner reveal">
        <p class="eyebrow">El acompañamiento</p>
        <h1>Sin juicios.<br><em>Sin presiones.</em></h1>
        <p class="page-hero-sub">Un espacio terapéutico cercano, práctico y basado en la evidencia.</p>
      </div>
    </section>

    <!-- LAS BASES -->
    <section class="section" id="bases">
      <div class="container">
        <div class="section-header reveal">
          <p class="eyebrow">El acompañamiento</p>
          <h2>¿En qué consiste el acompañamiento?</h2>
        </div>

        <div class="reveal" style="max-width: 680px; margin: 0 auto; text-align: center; display: grid; gap: 1.6rem;">
          <p style="font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: clamp(1.25rem, 2.2vw, 1.6rem); color: var(--brand); line-height: 1.55; font-weight: 600;">Un espacio seguro donde puedes ser tú mismo, entenderte mejor y construir una forma de vivir (y opositar) más sostenible.</p>
          <p style="font-size: 0.97rem; color: var(--muted); line-height: 1.8;">La forma de acompañar se basará en escucharte, adaptarme a ti y ayudarte a construir herramientas que realmente te sirvan. Partiendo de una idea clave, tú eres quien mejor se conoce.</p>
          <p style="font-size: 0.97rem; color: var(--muted); line-height: 1.8;">En Relleu trabajamos desde un enfoque cercano, práctico y basado en la evidencia. Pero, sobre todo, humano.</p>
          <div class="hero-tags" style="justify-content: center;">
            <span>Sin juicios</span>
            <span>Sin presiones</span>
            <span>A tu ritmo</span>
          </div>
        </div>
      </div>
    </section>

    <!-- EL PROCESO -->
    <section class="section section-dark" id="proceso">
      <div class="container">
        <div class="section-header reveal">
          <p class="eyebrow" style="color: var(--brand-light)">El proceso</p>
          <h2 style="color: var(--dark-text)">¿Cómo será tu proceso?</h2>
          <p class="section-lead" style="color: var(--dark-muted)">
            Cada proceso es único, pero generalmente seguimos estos pasos:
          </p>
        </div>

        <div class="proceso-interactive reveal">
          <div class="proceso-tabs">
            <button class="proceso-tab active" data-step="0">
              <span class="proceso-tab-num">01</span>
              <span class="proceso-tab-label">Primera sesión</span>
            </button>
            <button class="proceso-tab" data-step="1">
              <span class="proceso-tab-num">02</span>
              <span class="proceso-tab-label">Definir objetivos</span>
            </button>
            <button class="proceso-tab" data-step="2">
              <span class="proceso-tab-num">03</span>
              <span class="proceso-tab-label">Acompañamiento en el proceso</span>
            </button>
            <button class="proceso-tab" data-step="3">
              <span class="proceso-tab-num">04</span>
              <span class="proceso-tab-label">Seguimiento y cierre</span>
            </button>
          </div>
          <div class="proceso-desc-wrap">
            <p class="proceso-desc active">Recogemos información para comprender tus necesidades y valorar si este acompañamiento encaja contigo.</p>
            <p class="proceso-desc">Exploramos qué hay detrás de lo que sientes y construimos juntos una dirección clara hacia donde quieres avanzar.</p>
            <p class="proceso-desc">Trabajamos dentro y fuera de sesión para acercarte a tus objetivos, acompañando también los imprevistos, bloqueos y retos del día a día.</p>
            <p class="proceso-desc">El objetivo no es que dependas de la terapia, sino que puedas sostener tus avances por ti mismo. Que Relleu sea un apoyo en el camino, no un ancla.</p>
          </div>
          <div class="proceso-nav">
            <button class="proceso-nav-btn" id="proceso-prev" disabled aria-label="Anterior">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <div class="proceso-dots">
              <span class="proceso-dot active"></span>
              <span class="proceso-dot"></span>
              <span class="proceso-dot"></span>
              <span class="proceso-dot"></span>
            </div>
            <button class="proceso-nav-btn" id="proceso-next" aria-label="Siguiente">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- DURACIÓN Y PRECIO -->
    <section class="section" id="precio">
      <div class="container">
        <div class="pricing-pair reveal">
          <div class="pricing-info-card">
            <p class="eyebrow">Duración</p>
            <h3>¿Cuánto tiempo durará?</h3>
            <p>Cada proceso es único y decirte que durará <em>x</em> sesiones sería mentirte. Durará lo que tú necesites.</p>
            <p>En Relleu vemos la psicología como un punto de apoyo para empoderarte, no como un acompañamiento eterno e innecesario.</p>
          </div>
          <div class="pricing-info-card pricing-info-card-dark">
            <p class="eyebrow" style="color: var(--brand-light)">Precio</p>
            <p style="color: var(--dark-muted); font-size: 0.9rem; line-height: 1.75;">¿Cuánto cuesta? En la página de precios encontrarás toda la información sobre tarifas y modalidades.</p>
            <a class="btn" href="/precios" style="margin-top: 0.5rem">Ver precios</a>
          </div>
        </div>
      </div>
    </section>

  </main>

  ${renderFooter}
`;

initSharedJS();

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
