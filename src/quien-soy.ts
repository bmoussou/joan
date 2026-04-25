import "./styles.css";
import { renderHeader, renderFooter, initSharedJS } from "./layout";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("No se encontró el contenedor #app");

app.innerHTML = `
  ${renderHeader("sobre")}

  <main>

    <!-- PAGE HERO -->
    <section class="page-hero">
      <div class="container page-hero-inner reveal">
        <div class="page-hero-avatar">
          <img src="/joan.jpg" alt="Joan Agudo Ramon" />
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
          <p>Duro de decir muchos «no» a cosas que me apetecían.<br>
          Duro de estudiar seis o siete días a la semana, durante infinitas horas.<br>
          Duro de hacer simulacros malos y dudar de todo.<br>
          Duro de sentir frustración, rabia… y, muchas veces, soledad.</p>
          <p>Pero hay algo que al final acabé entendiendo: no todo es estudiar más. Había días en los que, por mucho que me pusiera, no rendía. Días en los que las horas no sumaban… sino que solo aumentaban la ansiedad y el bloqueo.</p>
          <p>Y aquí es donde todo cambia.</p>
          <p>Porque opositar no es solo una cuestión de conocimiento. Es una cuestión de cómo estás.</p>
          <p>De ahí nace Relleu. Un espacio dentro del caos que supone una oposición, un espacio donde poder parar, entender qué te pasa y volver a avanzar. Un espacio para cuidar tu mente, sostener la presión y hacer que el proceso sea más llevadero.</p>
        </div>
      </div>
    </section>

    <!-- FORMACIÓN + EXPERIENCIA -->
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
            <div class="info-tags">
              <span>Grado en Psicología (UB)</span>
              <span>Beca excelencia académica</span>
              <span>PIR #591</span>
              <span>Modelo ACT</span>
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
            <div class="info-tags">
              <span>CSMIJ Horta-Guinardó</span>
              <span>PsicoJove</span>
              <span>Jóvenes 12-30 años</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section-dark">
      <div class="container section-cta reveal">
        <a class="btn" href="/como-funciona.html">Ver cómo funciona el acompañamiento</a>
        <a class="btn btn-ghost" href="/#contacto">Reservar primera sesión gratis</a>
      </div>
    </section>

  </main>

  ${renderFooter}
`;

initSharedJS();
