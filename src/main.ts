import "./styles.css";
import { renderHeader, renderFooter, initSharedJS } from "./layout";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("No se encontró el contenedor #app");

app.innerHTML = `
  ${renderHeader("main")}

  <main>

    <!-- INICIO -->
    <section id="inicio" class="hero">
      <div class="container hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">Acompañamiento emocional para opositores</p>
          <h1 class="hero-h1">
            <span class="hero-h1-line1">DE UN OPOSITOR PARA OPOSITORES</span>
            <span class="hero-h1-line2">Un espacio para ti.</span>
          </h1>
          <div class="hero-lead">
            <p class="hero-lead-intro">Opositar no es solo estudiar.</p>
            <p>Es convivir con la exigencia, la duda y la sensación de que nunca es suficiente.</p>
            <p>Hay días en los que estás delante de los apuntes… pero no avanzas. Días de bloqueo, de compararte, de no saber cómo seguir.</p>
            <p>Soy Joan, psicólogo y opositor PIR, y he vivido este proceso en primera persona.</p>
            <p>Por eso nace Relleu: un espacio de acompañamiento emocional para opositores, donde entender lo que te pasa, recuperar el equilibrio y sostener el camino sin dejarte a ti de lado.</p>
          </div>
          <div class="hero-actions">
            <a class="btn" href="#contacto">Primera consulta gratis</a>
            <a class="btn btn-ghost" href="https://wa.me/34619781400" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-quote-card">
            <blockquote>
              &ldquo;Estar bien con uno mismo no es suficiente para aprobar una oposición, pero sí es una condición necesaria para poder intentarlo.&rdquo;
            </blockquote>
            <div class="quote-author">
              <div class="quote-avatar"><img src="/joan.jpg" alt="Joan Agudo Ramon" /></div>
              <div>
                <strong>Joan Agudo Ramon</strong>
                <span>Psicólogo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SOBRE MÍ — preview -->
    <section id="sobre-mi" class="section">
      <div class="container">
        <div class="preview-card reveal">
          <div class="preview-avatar">
            <img src="/joan.jpg" alt="Joan Agudo Ramon" />
          </div>
          <div class="preview-copy">
            <p class="eyebrow">Sobre mí</p>
            <h2 class="preview-h2">Hola, soy Joan.</h2>
            <p class="preview-lead">
              Psicólogo graduado por la UB y opositor PIR (posición 591). He vivido el proceso desde dentro
              y eso cambia la forma de acompañar. Actualmente trabajo en PsicoJove, un servicio de atención
              a jóvenes donde acompaño a personas en contextos de presión y exigencia.
            </p>
            <a class="btn btn-ghost" href="/quien-soy.html">Conocerme mejor &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <!-- CÓMO FUNCIONA — preview -->
    <section class="section section-dark" id="como-funciona-preview">
      <div class="container">
        <div class="cf-preview reveal">
          <div class="cf-preview-copy">
            <p class="eyebrow" style="color: var(--brand-light)">Cómo funciona</p>
            <h2 style="color: var(--dark-text)">Un acompañamiento a tu medida.</h2>
            <p style="color: var(--dark-muted); line-height: 1.75; margin-bottom: 1.4rem">
              Escucharte, adaptarme y construir contigo las herramientas que te sirvan.
              Un proceso en cuatro pasos, sin juicios y sin presiones.
            </p>
            <a class="btn btn-ghost" href="/como-funciona.html">Ver el proceso completo &rarr;</a>
          </div>
          <div class="cf-preview-steps">
            <div class="cf-step"><span class="cf-num">01</span><span class="cf-label">Primera sesión gratuita</span></div>
            <div class="cf-step"><span class="cf-num">02</span><span class="cf-label">Análisis y objetivos</span></div>
            <div class="cf-step"><span class="cf-num">03</span><span class="cf-label">Acompañamiento terapéutico</span></div>
            <div class="cf-step"><span class="cf-num">04</span><span class="cf-label">Consolidación</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACTO -->
    <section id="contacto" class="section">
      <div class="container contact-inner">
        <div class="contact-copy reveal">
          <p class="eyebrow">Contacto</p>
          <h2>Hablemos.</h2>
          <p>
            Este formulario no te compromete a nada. Simplemente servirá para que podamos ponernos en contacto
            y que juntos podamos valorar si este acompañamiento es lo que necesitas.
          </p>
          <div class="contact-direct">
            <a href="https://wa.me/34619781400" class="contact-link" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              +34 619 78 14 00
            </a>
            <a href="mailto:contacto@joanpsicologia.com" class="contact-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
              </svg>
              contacto@joanpsicologia.com
            </a>
          </div>
        </div>
        <form class="contact-form reveal" id="contact-form" action="#" method="post">
          <div class="form-top-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Primera consulta gratuita &mdash; sin compromiso
          </div>
          <div class="form-group">
            <label for="nombre">Nombre y apellidos</label>
            <input id="nombre" name="nombre" type="text" placeholder="Tu nombre completo" required />
          </div>
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input id="email" name="email" type="email" placeholder="tu@email.com" required />
          </div>
          <div class="form-group">
            <label for="telefono">Número de teléfono <span class="field-optional">(opcional)</span></label>
            <input id="telefono" name="telefono" type="tel" placeholder="+34 600 000 000" />
          </div>
          <div class="form-group">
            <label for="oposicion">¿Qué oposición estás realizando?</label>
            <input id="oposicion" name="oposicion" type="text" placeholder="PIR, MIR, EIR..." required />
          </div>
          <div class="form-group">
            <label for="mensaje">¿Qué buscas en este acompañamiento?</label>
            <textarea id="mensaje" name="mensaje" rows="4" placeholder="Cuéntame brevemente cómo estás y qué te ha traído hasta aquí..." required></textarea>
          </div>
          <button class="btn btn-full" type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>

  </main>

  ${renderFooter}
`;

initSharedJS();

// Tarjeta "Cómo funciona" — toda clickable
const cfPreview = document.querySelector<HTMLElement>(".cf-preview");
if (cfPreview) {
  cfPreview.addEventListener("click", (e) => {
    if (!(e.target as HTMLElement).closest("a")) {
      window.location.href = "/como-funciona.html";
    }
  });
}

// Formulario de contacto
const form = document.querySelector<HTMLFormElement>("#contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector<HTMLButtonElement>("button[type='submit']");
    if (btn) {
      btn.textContent = "Enviado. Te respondo pronto.";
      btn.disabled = true;
      btn.classList.add("btn-success");
    }
  });
}
