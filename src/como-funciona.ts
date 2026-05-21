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
          <p style="font-size: 0.97rem; color: var(--muted); line-height: 1.8;">La terapia es un espacio seguro donde puedes ser tú mismo, entenderte mejor y construir una forma de vivir (y opositar) más sostenible.</p>
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

        <div class="proceso-grid reveal">
          <div class="proceso-card">
            <div class="proceso-num">01</div>
            <div class="proceso-content">
              <h3>Primera sesión</h3>
              <p>Un espacio para conocernos y entender qué te preocupa. Gratis y sin compromiso. Valoramos juntos si este acompañamiento es lo que necesitas.</p>
            </div>
          </div>
          <div class="proceso-card">
            <div class="proceso-num">02</div>
            <div class="proceso-content">
              <h3>Análisis y objetivos</h3>
              <p>Definimos juntos hacia dónde quieres ir y qué necesitas trabajar.</p>
            </div>
          </div>
          <div class="proceso-card">
            <div class="proceso-num">03</div>
            <div class="proceso-content">
              <h3>Acompañamiento terapéutico</h3>
              <p>Sesión a sesión iremos avanzando, integrando herramientas y generando cambios reales.</p>
            </div>
          </div>
          <div class="proceso-card">
            <div class="proceso-num">04</div>
            <div class="proceso-content">
              <h3>Consolidación</h3>
              <p>El objetivo no es depender de la terapia, sino que puedas sostener tus avances por ti mismo.</p>
            </div>
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
