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
              <div class="quote-avatar"><img src="/fotoJoan2.jpg" alt="Joan Agudo Ramon" /></div>
              <div>
                <strong>Joan Agudo Ramon</strong>
                <span>Psicólogo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SOBRE MÍ — MI HISTORIA -->
    <section class="section section-dark" id="sobre-mi">
      <div class="container prose-section reveal">
        <p class="eyebrow" style="color: var(--brand-light)">Mi historia</p>
        <h2 class="prose-h2">Hola, soy Joan.</h2>
        <div class="prose">
          <p class="prose-lead">Hola!! Soy Joan, psicólogo…</p>
          <p>Y bueno, se podría decir que sé lo que significa estar dentro de una oposición… Es un camino que te exige mucho más de lo que se ve; constancia en los días buenos, resistencia en los días malos y, sobre todo, convivir con la incertidumbre…</p>
          <p>Esa experiencia te hace vivir de otra manera; la presión, las dudas, el cansancio mental y esa sensación de que nunca es suficiente.</p>
          <p>Y por eso nace Relleu: un espacio para poder parar, ordenar lo que estás viviendo y poder darte el espacio que te está quitando la oposición.</p>
        </div>
      </div>
    </section>

    <!-- SOBRE MÍ — FORMACIÓN + EXPERIENCIA -->
    <section class="section" id="formacion">
      <div class="container">
        <div class="two-col-section">

          <div class="info-block reveal">
            <p class="eyebrow">Mi formación</p>
            <h2 class="info-h2">Preparado para acompañarte.</h2>
            <div class="prose">
              <p>Soy psicólogo graduado por la Universidad de Barcelona, donde fui becado por excelencia académica. También he preparado el PIR, obteniendo la posición 591 en la convocatoria de 2026, entre más de 4.000 personas.</p>
              <p>Sigo formándome de manera continua para ofrecer una atención actualizada y de calidad. Próximamente me especializaré en terapias contextuales como la Terapia de Aceptación y Compromiso (ACT).</p>
              <p>Pero más allá de la formación, hay algo que guía mi forma de trabajar: la flexibilidad. Me apoyo en la evidencia científica, pero no creo en enfoques rígidos. Cada persona es distinta, y la terapia también debe serlo.</p>
            </div>
          </div>

          <div class="info-block reveal" style="--delay:100ms">
            <p class="eyebrow">Mi experiencia</p>
            <h2 class="info-h2">Lo que me ha dado forma.</h2>
            <div class="prose">
              <p>Escribiendo esto me he dado cuenta de que mi experiencia tiene algo en común: trabajar con personas que, como tú, están intentando sostenerse en contextos exigentes.</p>
              <p>He trabajado en el CSMIJ de Horta y Guinardó (Centro de Salud Mental Infantil y Juvenil). Allí aprendí a intervenir en situaciones de alta complejidad, a gestionar bloqueos, ansiedad y desregulación emocional.</p>
              <p>Actualmente formo parte del proyecto PsicoJove, un servicio municipal de atención psicológica para jóvenes de 12 a 30 años, acompañando a personas que atraviesan momentos de ansiedad, desmotivación o presión, desde un enfoque práctico y adaptado a cada caso.</p>
              <p>Todo esto ha dado forma a mi manera de trabajar: ayudarte a manejar la presión, comprender qué hay detrás de tus bloqueos y encontrar una forma más sostenible de afrontar el proceso.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CÓMO FUNCIONA — ¿EN QUÉ CONSISTE? -->
    <section class="section" id="como-funciona">
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

    <!-- ¿CÓMO SÉ SI ESTE ESPACIO ES PARA MÍ? -->
    <section class="section" id="para-mi">
      <div class="container">
        <div class="section-header reveal">
          <p class="eyebrow">Para ti si…</p>
          <h2>¿Cómo sé si este espacio<br>es para mí?</h2>
        </div>

        <div class="para-mi-grid reveal">
          <div class="para-mi-item">
            <div class="para-mi-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.09 6.26L19 5l-3.74 5.13L22 12l-6.74 1.13L19 19l-5.91-3.26L12 22l-1.09-6.26L5 19l3.74-5.13L2 12l6.74-1.13L5 5z"/></svg>
            </div>
            <p>Si todo se hace cuesta arriba</p>
          </div>
          <div class="para-mi-item">
            <div class="para-mi-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.09 6.26L19 5l-3.74 5.13L22 12l-6.74 1.13L19 19l-5.91-3.26L12 22l-1.09-6.26L5 19l3.74-5.13L2 12l6.74-1.13L5 5z"/></svg>
            </div>
            <p>Si te sientes perdido con la oposición o contigo mismo</p>
          </div>
          <div class="para-mi-item">
            <div class="para-mi-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.09 6.26L19 5l-3.74 5.13L22 12l-6.74 1.13L19 19l-5.91-3.26L12 22l-1.09-6.26L5 19l3.74-5.13L2 12l6.74-1.13L5 5z"/></svg>
            </div>
            <p>Si te agobia cómo conllevar el verano y la oposición</p>
          </div>
          <div class="para-mi-item">
            <div class="para-mi-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.09 6.26L19 5l-3.74 5.13L22 12l-6.74 1.13L19 19l-5.91-3.26L12 22l-1.09-6.26L5 19l3.74-5.13L2 12l6.74-1.13L5 5z"/></svg>
            </div>
            <p>Si dudas constantemente de si vas a ser capaz</p>
          </div>
          <div class="para-mi-item">
            <div class="para-mi-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.09 6.26L19 5l-3.74 5.13L22 12l-6.74 1.13L19 19l-5.91-3.26L12 22l-1.09-6.26L5 19l3.74-5.13L2 12l6.74-1.13L5 5z"/></svg>
            </div>
            <p>Si notas que necesitas parar, pero no te permites hacerlo</p>
          </div>
          <div class="para-mi-item">
            <div class="para-mi-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.09 6.26L19 5l-3.74 5.13L22 12l-6.74 1.13L19 19l-5.91-3.26L12 22l-1.09-6.26L5 19l3.74-5.13L2 12l6.74-1.13L5 5z"/></svg>
            </div>
            <p>Si no sabes si seguir, cambiar o dejarlo</p>
          </div>
        </div>

        <div class="para-mi-closing reveal">
          <p>Y necesitas un espacio para hablar, escucharte y reconectar. Porque detrás de cada oposición no solo hay un resultado, hay una persona atravesando un proceso.</p>
          <a class="btn" href="#contacto">Hablamos</a>
        </div>
      </div>
    </section>

    <!-- CÓMO FUNCIONA — EL PROCESO -->
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

    <!-- ¿CÓMO REALIZAREMOS LAS SESIONES? -->
    <section class="section" id="sesiones">
      <div class="container">
        <div class="section-header reveal">
          <p class="eyebrow">Las sesiones</p>
          <h2>¿Cómo realizaremos las sesiones?</h2>
        </div>
        <div class="reveal" style="max-width: 680px; margin: 0 auto 3rem; text-align: center; display: grid; gap: 1rem;">
          <p style="font-size: 0.97rem; color: var(--muted); line-height: 1.8;">Como opositor que he sido, sé el valor que tiene el tiempo durante una oposición. Por eso, para ponértelo más fácil, las sesiones serán online, para que puedas cuidarte sin añadir más desplazamientos ni complicaciones.</p>
          <p style="font-size: 0.97rem; color: var(--muted); line-height: 1.8;">Valoraremos juntos si necesitas un acompañamiento semanal o quincenal, adaptándolo siempre a tu ritmo, tu momento y tus necesidades.</p>
        </div>
        <div class="pricing-pair reveal">
          <div class="pricing-info-card">
            <p class="eyebrow">Primera sesión</p>
            <div class="precio-display">
              <span style="font-family: 'Cormorant Garamond', serif; font-size: 2.4rem; font-weight: 700; color: var(--brand); line-height: 1;">Gratis</span>
            </div>
            <p>Un primer espacio para conocernos, entender tu momento y que puedas valorar con calma, y sin compromiso, si este acompañamiento es para ti.</p>
          </div>
          <div class="pricing-info-card pricing-info-card-dark">
            <p class="eyebrow" style="color: var(--brand-light)">Sesiones</p>
            <div style="padding: 0.5rem 0 0.75rem; border-bottom: 1px solid var(--dark-border);">
              <span style="display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--dark-muted); margin-bottom: 0.4rem;">A partir de</span>
              <div style="display: flex; align-items: baseline; gap: 0.45rem;">
                <span style="font-family: 'Cormorant Garamond', serif; font-size: 3.2rem; font-weight: 700; color: var(--dark-text); line-height: 1;">40€</span>
                <span style="color: var(--dark-muted); font-size: 0.85rem;">/ sesión</span>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.35rem;">
              <span style="color: var(--dark-muted); font-size: 0.88rem;">Primera sesión gratuita</span>
              <span style="color: var(--dark-muted); font-size: 0.88rem;">Pack de 4 sesiones con descuento</span>
            </div>
            <a class="btn" href="/precios.html">Consultar tarifas</a>
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
            <input id="oposicion" name="oposicion" type="text" placeholder="Mossos d'Esquadra, Educación, Sanidad, Administración…" required />
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
