import "./styles.css";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("No se encontro el contenedor #app");

app.innerHTML = `
  <div class="bg-orb bg-orb-1" aria-hidden="true"></div>
  <div class="bg-orb bg-orb-2" aria-hidden="true"></div>
  <div class="bg-orb bg-orb-3" aria-hidden="true"></div>

  <header class="site-header" id="site-header">
    <a class="brand" href="#inicio">Joan Agudo</a>
    <nav id="main-nav" aria-label="Navegacion principal">
      <a href="#inicio">Inicio</a>
      <a href="#terapia">Terapia</a>
      <a href="#quien-soy">Quien soy</a>
      <a href="#contacto">Contacto</a>
    </nav>
    <div class="header-actions">
      <a class="btn btn-small" href="#contacto">Cita gratuita</a>
    </div>
    <button class="menu-toggle" id="menu-toggle" aria-label="Abrir menu">
      <span></span><span></span><span></span>
    </button>
  </header>

  <main>

    <!-- INICIO -->
    <section id="inicio" class="hero">
      <div class="container hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">Acompanamiento emocional para opositores</p>
          <h1 class="hero-h1">
            <span class="hero-h1-line1">DE UN OPOSITOR PARA OPOSITORES</span>
            <span class="hero-h1-line2">Un espacio para ti.</span>
          </h1>
          <div class="hero-lead">
            <p class="hero-lead-intro">Opositar no es solo estudiar.</p>
            <p>Es convivir con la exigencia, la duda y la sensacion de que nunca es suficiente.</p>
            <p>Hay dias en los que estas delante de los apuntes... pero no avanzas. Dias de bloqueo, de compararte, de no saber como seguir.</p>
            <p>Soy Joan, psicologo y opositor PIR, y he vivido este proceso en primera persona.</p>
            <p>Por eso nace Relleu: un espacio de acompanamiento emocional para opositores, donde entender lo que te pasa, recuperar el equilibrio y sostener el camino sin dejarte a ti de lado.</p>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-num">#591</span>
              <span class="stat-label">PIR Espana</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-num">40€</span>
              <span class="stat-label">por sesion</span>
            </div>
          </div>
          <div class="hero-actions">
            <a class="btn" href="#contacto">Primera consulta gratis</a>
            <a class="btn btn-ghost" href="https://wa.me/34619781400" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-quote-card">
            <blockquote>
              &ldquo;Estar bien con uno mismo no es suficiente para aprobar una oposicion, pero si es una condicion necesaria para poder intentarlo.&rdquo;
            </blockquote>
            <div class="quote-author">
              <div class="quote-avatar"><img src="/joan.jpg" alt="Joan Agudo Ramon" /></div>
              <div>
                <strong>Joan Agudo Ramon</strong>
                <span>Psicologo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TERAPIA -->
    <section id="terapia" class="section">
      <div class="container">
        <div class="section-header reveal">
          <p class="eyebrow">Terapia</p>
          <h2>Hecho por un opositor,<br>para opositores.</h2>
          <p class="section-lead">
            Se de primera mano lo que implica preparar una oposicion: la presion constante,
            los altibajos, la soledad del proceso. Por eso puedo acompanarte de verdad.
          </p>
        </div>

        <div class="areas-grid">
          <div class="area-card reveal" style="--delay:0ms">
            <div class="area-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
              </svg>
            </div>
            <h3>Gestion de la ansiedad</h3>
            <p>Tecnicas concretas para manejar los nervios antes y durante el examen sin que te bloqueen.</p>
          </div>
          <div class="area-card reveal" style="--delay:80ms">
            <div class="area-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
              </svg>
            </div>
            <h3>Autoestima y confianza</h3>
            <p>Construimos una base solida para que te enfrentes al proceso creyendo en ti mismo.</p>
          </div>
          <div class="area-card reveal" style="--delay:160ms">
            <div class="area-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3>Manejo de la incertidumbre</h3>
            <p>Aprendes a convivir con el no saber que acompana todo el proceso sin que te paralice.</p>
          </div>
          <div class="area-card reveal" style="--delay:240ms">
            <div class="area-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/>
              </svg>
            </div>
            <h3>Bienestar emocional</h3>
            <p>Que la oposicion no te cueste la salud mental. El equilibrio es parte del exito.</p>
          </div>
        </div>

        <div class="process-section reveal">
          <h3 class="process-title">Como funciona</h3>
          <div class="steps">
            <div class="step">
              <div class="step-num">1</div>
              <div class="step-content">
                <h4>Primera consulta gratuita</h4>
                <p>20-30 minutos sin compromiso para conocernos y ver si encajamos.</p>
              </div>
            </div>
            <div class="step-connector"></div>
            <div class="step">
              <div class="step-num">2</div>
              <div class="step-content">
                <h4>Sesiones semanales de 1 hora</h4>
                <p>Online, desde donde estes. A tu ritmo, adaptado a tu proceso.</p>
              </div>
            </div>
            <div class="step-connector"></div>
            <div class="step">
              <div class="step-num">3</div>
              <div class="step-content">
                <h4>Herramientas reales</h4>
                <p>Modelo ACT basado en evidencia cientifica. No solo hablar, aprender a actuar.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="pricing-row reveal">
          <div class="pricing-card">
            <div class="pricing-badge">Primera vez</div>
            <div class="pricing-price">Gratis</div>
            <div class="pricing-desc">Consulta de 20-30 minutos</div>
            <ul class="pricing-list">
              <li>Nos conocemos sin compromiso</li>
              <li>Evaluo tu situacion</li>
              <li>Resuelvo tus dudas</li>
            </ul>
            <a class="btn btn-ghost" href="#contacto">Reservar</a>
          </div>
          <div class="pricing-card pricing-card-main">
            <div class="pricing-badge">Sesion regular</div>
            <div class="pricing-price">40&euro;</div>
            <div class="pricing-desc">por sesion de 1 hora</div>
            <ul class="pricing-list">
              <li>Online, desde cualquier lugar</li>
              <li>Frecuencia semanal</li>
              <li>Individual (tambien pareja o grupo)</li>
              <li>Seguimiento entre sesiones</li>
            </ul>
            <a class="btn" href="#contacto">Empezar ahora</a>
          </div>
        </div>
      </div>
    </section>

    <!-- QUIEN SOY -->
    <section id="quien-soy" class="section section-dark">
      <div class="container about-inner">
        <div class="about-visual reveal">
          <div class="about-avatar"><img src="/joan.jpg" alt="Joan Agudo Ramon" /></div>
          <div class="about-credential">
            <div class="credential-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
              </svg>
            </div>
            <div>
              <strong>PIR #591 en Espana</strong>
              <span>Grado en Psicologia</span>
            </div>
          </div>
        </div>
        <div class="about-copy reveal">
          <p class="eyebrow">Quien soy</p>
          <h2>Joan Agudo Ramon</h2>
          <p class="about-lead">
            Psicologo. Opositor. Alguien que entiende de verdad lo que es preparar una oposicion.
          </p>
          <p>
            Obtuve la posicion 591 del PIR en Espana. Actualmente trabajo en un servicio publico
            haciendo acompanamiento emocional a jovenes de 12 a 30 anos. Esa experiencia, sumada
            a haber vivido el proceso opositor desde dentro, es lo que me permite ofrecerte algo
            que va mas alla de la teoria.
          </p>
          <p>
            Trabajo desde el modelo ACT (Terapia de Aceptacion y Compromiso) de Hayes,
            integrando tecnicas con respaldo cientifico. El objetivo no es eliminar el malestar,
            es aprender a moverse con el hacia lo que importa.
          </p>
          <div class="about-tags">
            <span>Modelo ACT</span>
            <span>Evidencia cientifica</span>
            <span>Servicio publico</span>
            <span>12-30 anos</span>
            <span>Solo online</span>
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
            La primera consulta es gratis y sin compromiso.
            Escribe tu mensaje y te respondo personalmente.
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
            Primera consulta gratuita &mdash; 20-30 minutos sin compromiso
          </div>
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="tu@email.com" required />
          </div>
          <div class="form-group">
            <label for="telefono">Telefono <span class="field-optional">(opcional)</span></label>
            <input id="telefono" name="telefono" type="tel" placeholder="+34 600 000 000" />
          </div>
          <div class="form-group">
            <label for="mensaje">Cuentame brevemente</label>
            <textarea id="mensaje" name="mensaje" rows="4" placeholder="Que te trae por aqui, en que momento estas de tu proceso..." required></textarea>
          </div>
          <button class="btn btn-full" type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>

  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <a class="brand footer-brand-link" href="#inicio">Joan Agudo Ramon</a>
        <p class="footer-sub">Psicologia online para opositores</p>
      </div>
      <nav class="footer-nav" aria-label="Navegacion pie">
        <a href="#inicio">Inicio</a>
        <a href="#terapia">Terapia</a>
        <a href="#quien-soy">Quien soy</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <div class="footer-contact">
        <a href="https://wa.me/34619781400" target="_blank" rel="noreferrer">WhatsApp</a>
        <a href="mailto:contacto@joanpsicologia.com">Email</a>
      </div>
    </div>
    <div class="footer-copy">
      <div class="container">
        <p>&copy; 2025 Joan Agudo Ramon &middot; Psicologia online</p>
      </div>
    </div>
  </footer>
`;

// ── Scroll reveal ──────────────────────────────────────────────
const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        el.classList.add("visible");
        revealObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.1 }
);
revealEls.forEach((el) => revealObserver.observe(el));

// ── Active nav link on scroll ──────────────────────────────────
const sections = document.querySelectorAll<HTMLElement>("section[id]");
const navLinks = document.querySelectorAll<HTMLAnchorElement>("#main-nav a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove("active"));
        const active = document.querySelector<HTMLAnchorElement>(
          `#main-nav a[href="#${entry.target.id}"]`
        );
        active?.classList.add("active");
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
sections.forEach((s) => sectionObserver.observe(s));

// ── Header compact on scroll ───────────────────────────────────
const header = document.querySelector<HTMLElement>("#site-header");
window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("scrolled", window.scrollY > 60);
  },
  { passive: true }
);

// ── Mobile menu ────────────────────────────────────────────────
const menuToggle = document.querySelector<HTMLButtonElement>("#menu-toggle");
const mainNav = document.querySelector<HTMLElement>("#main-nav");

function closeMenu() {
  mainNav?.classList.remove("nav-open");
  menuToggle?.classList.remove("open");
  menuToggle?.setAttribute("aria-label", "Abrir menu");
  document.body.style.overflow = "";
}

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav?.classList.toggle("nav-open");
  menuToggle.classList.toggle("open", !!isOpen);
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menu" : "Abrir menu");
  document.body.style.overflow = isOpen ? "hidden" : "";
});

mainNav?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", closeMenu);
});

// ── Contact form ───────────────────────────────────────────────
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
