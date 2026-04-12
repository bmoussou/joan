import "./styles.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("No se encontro el contenedor #app");
}

app.innerHTML = `
  <div class="bg-orb bg-orb-1" aria-hidden="true"></div>
  <div class="bg-orb bg-orb-2" aria-hidden="true"></div>

  <header class="site-header">
    <a class="brand" href="#inicio">Joan Psicologia</a>
    <nav aria-label="Navegacion principal">
      <a href="#inicio">Inicio</a>
      <a href="#terapia">Nuestra terapia</a>
      <a href="#equipo">Quienes somos</a>
      <a href="#centro">Centro</a>
      <a href="#contacto">Contacto</a>
    </nav>
    <a class="btn btn-small" href="#contacto">Pedir cita</a>
  </header>

  <main>
    <section id="inicio" class="hero container">
      <div class="hero-copy">
        <p class="eyebrow">Desde Cervello para toda Espana</p>
        <h1>Recupera calma, foco y confianza.</h1>
        <p>
          Sesiones realizadas de manera telematica, con un enfoque cercano y basado en evidencia
          para ayudarte a recuperar equilibrio emocional.
        </p>
        <div class="hero-actions">
          <a class="btn" href="#contacto">Reserva una cita</a>
          <a class="btn btn-ghost" href="#equipo">Conocer al equipo</a>
        </div>
      </div>
      <aside class="hero-card">
        <h2>Primera llamada de orientacion</h2>
        <p>15 minutos para entender tu situacion y explicarte como funciona la terapia online.</p>
        <ul>
          <li>Respuesta en menos de 24h</li>
          <li>Modalidad 100% telematica</li>
          <li>Horarios flexibles de lunes a sabado</li>
        </ul>
      </aside>
    </section>

    <section id="terapia" class="container section-grid">
      <article class="panel">
        <h2>Terapia individual</h2>
        <p>Ansiedad, autoestima, duelo, gestion emocional y crisis vitales.</p>
      </article>
      <article class="panel">
        <h2>Terapia de pareja</h2>
        <p>Comunicacion, conflictos recurrentes, confianza y reconexion.</p>
      </article>
      <article class="panel">
        <h2>Terapia familiar</h2>
        <p>Herramientas para mejorar dinamicas, limites y cuidado mutuo.</p>
      </article>
    </section>

    <section id="equipo" class="container split">
      <div>
        <p class="eyebrow">Quienes somos</p>
        <h2>Un equipo humano, cercano y especializado.</h2>
        <p>
          Trabajamos con enfoque integrador para adaptar cada proceso a la historia de cada
          persona.
        </p>
      </div>
      <div class="team-cards">
        <article class="team">
          <h3>Laura Martin</h3>
          <p>Psicologa sanitaria | Trauma y ansiedad</p>
        </article>
        <article class="team">
          <h3>Elena Ruiz</h3>
          <p>Psicoterapeuta | Terapia de pareja</p>
        </article>
        <article class="team">
          <h3>David Perez</h3>
          <p>Psicologo clinico | Adolescencia y familia</p>
        </article>
      </div>
    </section>

    <section id="centro" class="container center-block">
      <p class="eyebrow">Sobre Joan</p>
      <h2>Psicologo en Cervello con sesiones online.</h2>
      <p>
        Atencion telematica para adultos y parejas, con procesos personalizados y seguimiento
        continuo desde la primera sesion.
      </p>
    </section>

    <section id="contacto" class="container contact">
      <div>
        <p class="eyebrow">Contacto</p>
        <h2>Te llamamos lo antes posible.</h2>
        <p>Escribenos y te contactamos para proponerte el mejor primer paso.</p>
      </div>
      <form class="contact-form" id="contact-form" action="#" method="post">
        <label for="nombre">Nombre</label>
        <input id="nombre" name="nombre" type="text" required />

        <label for="email">Email</label>
        <input id="email" name="email" type="email" required />

        <label for="mensaje">Como te podemos ayudar</label>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

        <button class="btn" type="submit">Enviar</button>
      </form>
    </section>
  </main>

  <footer class="site-footer">
    <p>Joan Psicologia · Cervello · Sesiones telematicas</p>
    <a href="https://wa.me/34600000000" target="_blank" rel="noreferrer">WhatsApp</a>
  </footer>
`;

const form = document.querySelector<HTMLFormElement>("#contact-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitButton = form.querySelector<HTMLButtonElement>("button[type='submit']");

    if (submitButton) {
      submitButton.textContent = "Gracias, te contactaremos pronto";
      submitButton.disabled = true;
    }
  });
}
