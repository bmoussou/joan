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
          <p class="eyebrow">La forma de trabajar</p>
          <h2>Construimos juntos las herramientas<br>que realmente te sirvan.</h2>
          <p class="section-lead">
            Tú eres quien mejor se conoce. Mi trabajo es escucharte, adaptarme a ti
            y acompañarte a encontrar una forma más sostenible de vivir el proceso.
          </p>
        </div>

        <div class="bases-grid reveal">
          <div class="base-card">
            <div class="base-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253"/>
              </svg>
            </div>
            <h3>Sin juicios</h3>
            <p>Un espacio seguro donde puedes ser tú mismo. Lo que sientes tiene sentido, aunque a veces no lo parezca.</p>
          </div>
          <div class="base-card">
            <div class="base-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
              </svg>
            </div>
            <h3>Sin presiones</h3>
            <p>La terapia se adapta a tu ritmo, no al revés. No hay una velocidad correcta para mejorar.</p>
          </div>
          <div class="base-card">
            <div class="base-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/>
              </svg>
            </div>
            <h3>A tu ritmo</h3>
            <p>Cada proceso es único. Definimos juntos el camino y lo ajustamos según cómo vayas avanzando.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- EL PROCESO -->
    <section class="section section-dark" id="proceso">
      <div class="container">
        <div class="section-header reveal">
          <p class="eyebrow" style="color: var(--brand-light)">El proceso</p>
          <h2 style="color: var(--dark-text)">Cómo será tu acompañamiento.</h2>
          <p class="section-lead" style="color: var(--dark-muted)">
            Cada proceso es distinto, pero generalmente seguimos estos pasos.
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
              <p>Entendemos qué hay detrás de lo que sientes y definimos juntos hacia dónde quieres ir. Sin prisas, con claridad.</p>
            </div>
          </div>
          <div class="proceso-card">
            <div class="proceso-num">03</div>
            <div class="proceso-content">
              <h3>Acompañamiento terapéutico</h3>
              <p>Sesión a sesión, trabajamos con herramientas concretas y adaptadas a ti. No solo hablar: aprender a moverse desde lo que importa.</p>
            </div>
          </div>
          <div class="proceso-card">
            <div class="proceso-num">04</div>
            <div class="proceso-content">
              <h3>Consolidación</h3>
              <p>El objetivo final no es depender de la terapia, sino que puedas sostener tus avances por ti mismo. Que Relleu sea un punto de apoyo, no un ancla.</p>
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
            <div class="precio-display">
              <span class="precio-gratis">Gratis</span>
              <span class="precio-sep">/</span>
              <span class="precio-euro">40€</span>
            </div>
            <p style="color: var(--dark-muted)">Primera sesión sin coste · Sesiones regulares de 1 hora · Solo online</p>
            <a class="btn" href="/#contacto" style="margin-top: 0.5rem">Reservar primera sesión</a>
          </div>
        </div>
      </div>
    </section>

  </main>

  ${renderFooter}
`;

initSharedJS();
