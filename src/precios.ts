import "./styles.css";
import { renderHeader, renderFooter, initSharedJS } from "./layout";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("No se encontró el contenedor #app");

app.innerHTML = `
  ${renderHeader("precios")}

  <main>

    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="container page-hero-inner reveal">
        <p class="eyebrow">Tarifas</p>
        <h1>Precios</h1>
        <p class="page-hero-sub">Sin letra pequeña. Sin sorpresas.</p>
      </div>
    </section>

    <!-- TARIFAS -->
    <section class="section" id="tarifas">
      <div class="container">

        <div class="precios-grid reveal">

          <div class="precio-card">
            <p class="eyebrow">Para empezar</p>
            <div class="precio-card-price">
              <span class="precio-big">Gratis</span>
            </div>
            <h3>Primera sesión</h3>
            <p>Un primer espacio para conocernos, entender tu momento y que puedas valorar con calma, y sin compromiso, si este acompañamiento es para ti.</p>
            <a class="btn btn-ghost" href="/#contacto" style="margin-top: auto">Reservar ahora</a>
          </div>

          <div class="precio-card">
            <p class="eyebrow">Sesión individual</p>
            <div class="precio-card-price">
              <span class="precio-big">50€</span>
              <span class="precio-per">/ sesión</span>
            </div>
            <h3>Sesión individual</h3>
            <p>Un espacio centrado en ti, en lo que necesitas ahora y en cómo acompañarte en este momento.</p>
            <a class="btn btn-ghost" href="/#contacto" style="margin-top: auto">Reservar ahora</a>
          </div>

          <div class="precio-card precio-card-featured">
            <div class="precio-card-badge">Más popular</div>
            <p class="eyebrow" style="color: var(--brand-light)">Pack</p>
            <div class="precio-card-price">
              <span class="precio-big">160€</span>
              <span class="precio-per">/ 4 sesiones</span>
            </div>
            <span class="precio-save">Te ahorras 40€</span>
            <h3>Pack de 4 sesiones</h3>
            <p>4 sesiones para dar continuidad al proceso, profundizar en lo importante y avanzar con mayor estabilidad.</p>
            <a class="btn" href="/#contacto" style="margin-top: auto">Reservar ahora</a>
          </div>

        </div>

        <div class="precio-referral reveal">
          <div class="precio-referral-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
            </svg>
          </div>
          <div>
            <h3>¡Pásale el Relleu a alguien!</h3>
            <p>Si traes a alguien nuevo a Relleu, la siguiente sesión será con un <strong>50% de descuento para ambos</strong>.</p>
          </div>
        </div>

      </div>
    </section>

  </main>

  ${renderFooter}
`;

initSharedJS();
