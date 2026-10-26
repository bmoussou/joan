import { renderHeader, renderFooter } from "../layout";

export const html = `
  ${renderHeader("sobre")}

  <main>

    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="container page-hero-inner reveal">
        <div class="page-hero-avatar">
          <img src="/joan-avatar.jpg" alt="Joan Agudo Ramon, psicólogo para opositores" width="330" height="330" />
        </div>
        <p class="eyebrow">Sobre mí</p>
        <h1>Joan Agudo Ramon</h1>
        <p class="page-hero-sub">Psicólogo &middot; Opositor PIR &middot; Posición 591</p>
      </div>
    </section>

    <!-- MI HISTORIA -->
    <section class="section section-dark" id="historia">
      <div class="container prose-section reveal">
        <p class="eyebrow" style="color: var(--brand-light)">Mi historia</p>
        <h2 class="prose-h2">Hola, soy Joan.</h2>
        <div class="prose">
          <p class="prose-lead">Psicólogo y opositor PIR.</p>
          <p>Este enero me presenté al PIR, un examen en el que más de 4.000 personas compiten por poco más de 270 plazas. Y sí… fue duro.</p>
          <p>Duro decir muchos "no" a planes que me apetecían.<br>
          Duro estudiar seis o siete días a la semana durante infinitas horas.<br>
          Duro hacer simulacros malos y dudar de todo.<br>
          Duro sentir frustración, rabia y, muchas veces, soledad.</p>
          <p>Pero hubo algo que acabé entendiendo: no todo consiste en estudiar más.</p>
          <p>Había días en los que, por mucho que me sentara delante de los apuntes, no rendía. Días en los que las horas no sumaban, sino que solo aumentaban la ansiedad, el bloqueo y la sensación de no llegar.</p>
          <p>Y ahí es donde todo cambia.</p>
          <p>Porque opositar no es solo una cuestión de conocimiento. También es una cuestión de cómo estás.</p>
          <p>De esa idea nace Relleu: un espacio dentro del caos que supone una oposición. Un lugar donde parar, entender qué te pasa y volver a avanzar. Un espacio para cuidar tu mente, sostener la presión y hacer que el proceso sea un poco más llevadero.</p>
        </div>
      </div>
    </section>

    <!-- FORMACIÓN + EXPERIENCIA -->
    <section class="section" id="formacion" style="padding: 0;">
      <div class="two-col-section" style="gap: 0; align-items: stretch;">

        <div class="info-block reveal" style="background: var(--surface); padding: 4rem 3rem;">
          <p class="eyebrow">Mi formación</p>
          <h2 class="info-h2">Preparado para acompañarte.</h2>
          <div class="prose">
            <p>Soy psicólogo graduado por la Universidad de Barcelona, donde recibí una beca por excelencia académica. También preparé el PIR y obtuve la posición 591 en la convocatoria de 2026, entre más de 4.000 personas.</p>
            <p>Para mí, seguir aprendiendo es una parte importante de ser buen profesional. Actualmente continúo formándome cursando dos másters; en Terapias Contextuales y en Terapia Breve Estratégica, ampliando así mi forma de entender y acompañar las dificultades de cada persona.</p>
            <p>Pero, más allá de la formación, hay algo que define mi manera de entender la terapia: no creo que exista una única forma de hacer las cosas. Cada persona tiene su propia historia, sus circunstancias y su manera de afrontar lo que le ocurre. Por eso, creo que la terapia también debe adaptarse a cada persona.</p>
            <p>Me gusta trabajar desde la cercanía y sin juicios, creando un espacio en el que puedas sentirte cómodo para hablar de lo que te preocupa. Utilizo herramientas basadas en la evidencia científica, sin perder de vista algo fundamental: detrás de cada dificultad hay una persona.</p>
          </div>
        </div>

        <div class="info-block reveal" style="background: var(--brand); color: #fff; padding: 4rem 3rem; --delay:100ms;">
          <p class="eyebrow" style="color: rgba(255,255,255,0.7)">Mi experiencia</p>
          <h2 class="info-h2" style="color: #fff">Lo que me ha dado forma.</h2>
          <div class="prose prose-on-brand">
            <p>Escribiendo esto me he dado cuenta de que mi experiencia tiene algo en común: trabajar con personas que, como tú, están intentando sostenerse en contextos exigentes.</p>
            <p>He trabajado en el CSMIJ de Horta y Guinardó (Centro de Salud Mental Infantil y Juvenil). Allí aprendí a intervenir en situaciones de alta complejidad, a gestionar bloqueos, ansiedad y desregulación emocional.</p>
            <p>Actualmente formo parte del proyecto PsicoJove, un servicio municipal de atención psicológica para jóvenes de 12 a 30 años, acompañando a personas que atraviesan momentos de ansiedad, desmotivación o presión, desde un enfoque práctico y adaptado a cada caso.</p>
            <p>Todo esto ha dado forma a mi manera de trabajar: ayudarte a manejar la presión, comprender qué hay detrás de tus bloqueos y encontrar una forma más sostenible de afrontar el proceso.</p>
          </div>
          <a href="https://www.linkedin.com/in/joan-agudo-ramon-626a98256/" class="btn btn-linkedin btn-linkedin-light" target="_blank" rel="noopener noreferrer" style="align-self: flex-start"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg> Sígueme en LinkedIn</a>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="section section-dark">
      <div class="container section-cta reveal">
        <a class="btn" href="/como-funciona">Ver cómo funciona el acompañamiento</a>
        <a class="btn btn-ghost" href="/#contacto">Reservar primera sesión al 50%</a>
      </div>
    </section>

  </main>

  ${renderFooter}
`;
