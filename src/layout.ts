type Page = "main" | "sobre" | "como" | "precios";

export function renderHeader(page: Page) {
  return `
  <div class="bg-orb bg-orb-1" aria-hidden="true"></div>
  <div class="bg-orb bg-orb-2" aria-hidden="true"></div>
  <div class="bg-orb bg-orb-3" aria-hidden="true"></div>

  <header class="site-header" id="site-header">
    <a class="brand brand-logo" href="/">
      <img src="/logo-relleu.png" alt="Relleu" class="brand-img" />
    </a>
    <nav id="main-nav" aria-label="Navegación principal">
      <a href="/"${page === "main" ? ' class="active"' : ""}>Inicio</a>
      <a href="${page === "main" ? "#sobre-mi" : "/#sobre-mi"}"${page === "sobre" ? ' class="active"' : ""}>Sobre mí</a>
      <a href="${page === "main" ? "#como-funciona" : "/#como-funciona"}"${page === "como" ? ' class="active"' : ""}>Cómo funciona</a>
      <a href="/precios.html"${page === "precios" ? ' class="active"' : ""}>Precios</a>
      <a href="${page === "main" ? "#contacto" : "/#contacto"}">Contacto</a>
    </nav>
    <div class="header-actions">
      <a class="btn btn-small" href="${page === "main" ? "#contacto" : "/#contacto"}">Primera sesión al 50%</a>
    </div>
    <button class="menu-toggle" id="menu-toggle" aria-label="Abrir menú">
      <span></span><span></span><span></span>
    </button>
  </header>
  `;
}

export const renderFooter = `
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <a class="brand footer-brand-link" href="/">
          <img src="/logo-relleu.png" alt="Relleu" class="brand-img brand-img-footer" />
        </a>
        <p class="footer-sub">Psicología online para opositores</p>
      </div>
      <nav class="footer-nav" aria-label="Navegación pie">
        <a href="/">Inicio</a>
        <a href="/#sobre-mi">Sobre mí</a>
        <a href="/#como-funciona">Cómo funciona</a>
        <a href="/precios.html">Precios</a>
        <a href="/#contacto">Contacto</a>
      </nav>
      <div class="footer-contact">
        <a href="https://wa.me/34619781400" target="_blank" rel="noreferrer">WhatsApp</a>
        <a href="mailto:relleupsicologia@gmail.com">Email</a>
      </div>
    </div>
    <div class="footer-copy">
      <div class="container">
        <p>&copy; 2025 Joan Agudo Ramon &middot; Relleu</p>
      </div>
    </div>
  </footer>
`;

export function initSharedJS() {
  const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  const siteHeader = document.querySelector<HTMLElement>("#site-header");
  window.addEventListener(
    "scroll",
    () => siteHeader?.classList.toggle("scrolled", window.scrollY > 60),
    { passive: true }
  );

  const menuToggle = document.querySelector<HTMLButtonElement>("#menu-toggle");
  const mainNav = document.querySelector<HTMLElement>("#main-nav");

  function openMenu() {
    // Mover el nav fuera del header para que no quede atrapado por su backdrop-filter
    document.body.appendChild(mainNav!);
    mainNav?.classList.add("nav-open");
    menuToggle?.classList.add("open");
    menuToggle?.setAttribute("aria-label", "Cerrar menú");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mainNav?.classList.remove("nav-open");
    menuToggle?.classList.remove("open");
    menuToggle?.setAttribute("aria-label", "Abrir menú");
    document.body.style.overflow = "";
    // Devolver el nav al header
    siteHeader?.appendChild(mainNav!);
  }

  menuToggle?.addEventListener("click", () => {
    if (mainNav?.classList.contains("nav-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mainNav?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
}
