// Reseñas de Google en vivo: se piden a /api/reviews (Worker de Cloudflare) y se pintan
// en los elementos de la página marcados con los atributos data-* de abajo.

import type { Review, ReviewsPayload } from "../worker/reviews";

const GOOGLE_REVIEWS_FALLBACK_URL = "https://share.google/V3RqGurFqtw2aQGBa";
const SESSION_KEY = "relleu-reviews-v1";
const SESSION_TTL = 10 * 60 * 1000;

const G_LOGO = `<svg class="g-logo" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>`;

function formatRating(n: number) {
  return n.toLocaleString("es-ES", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

function stars(rating = 5, extra = "") {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  return `<span class="stars ${extra}" role="img" aria-label="${formatRating(rating)} de 5 estrellas"><span class="stars-base" aria-hidden="true">★★★★★</span><span class="stars-fill" aria-hidden="true" style="width:${pct}%">★★★★★</span></span>`;
}

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );
}

function initial(name: string) {
  return esc(name.trim().charAt(0).toUpperCase() || "G");
}

function avatar(r: Review, cls: string) {
  if (!r.photo) return `<span class="${cls}" aria-hidden="true">${initial(r.author)}</span>`;
  return `<img class="${cls}" src="${esc(r.photo)}" alt="" width="40" height="40" loading="lazy" referrerpolicy="no-referrer" data-initial="${initial(r.author)}" />`;
}

/** Si la foto de Google no carga, se sustituye por la inicial. */
function fallbackAvatars(root: ParentNode) {
  root.querySelectorAll<HTMLImageElement>("img[data-initial]").forEach((img) => {
    const swap = () => {
      const span = document.createElement("span");
      span.className = img.className;
      span.textContent = img.dataset.initial ?? "";
      img.replaceWith(span);
    };
    if (img.complete && img.naturalWidth === 0) swap();
    else img.addEventListener("error", swap, { once: true });
  });
}

// ── Marcado (estático, se rellena al cargar) ──

/** Insignia de valoración para el hero. En móvil se pinta junto a la reseña que rota. */
export function renderRatingBadge(placement: "desktop" | "mobile" = "desktop") {
  return `
    <a class="rating-badge rating-badge-${placement}" href="#resenas" data-reviews-only>
      <span class="rating-badge-avatars" data-reviews-avatars aria-hidden="true"></span>
      <span class="rating-badge-body">
        <span class="rating-badge-top"><span class="rating-badge-score" data-rating-value></span><span data-rating-stars></span></span>
        <span class="rating-badge-text">${G_LOGO}<span data-rating-count>Reseñas en Google</span></span>
      </span>
    </a>`;
}

/** Tarjeta con una reseña que va rotando (columna derecha del hero). */
export function renderHeroReview() {
  return `<figure class="hero-review-card" data-hero-review data-reviews-only aria-live="polite"></figure>`;
}

/** Sección completa de reseñas. */
export function renderReviewsSection() {
  return `
    <section class="section section-reviews" id="resenas">
      <div class="container">
        <div class="section-header reveal">
          <p class="eyebrow">Opiniones</p>
          <h2>Lo que dicen quienes<br>ya han pasado por aquí</h2>
        </div>

        <div class="reviews-summary reveal" data-reviews-only>
          <div class="reviews-summary-score">
            <span class="reviews-summary-num" data-rating-value></span>
            <div>
              <span data-rating-stars data-stars-size="lg"></span>
              <span class="reviews-summary-label">${G_LOGO} <span data-rating-count>Reseñas en Google</span></span>
            </div>
          </div>
          <a class="btn btn-ghost btn-small" data-reviews-link href="${GOOGLE_REVIEWS_FALLBACK_URL}" target="_blank" rel="noopener noreferrer">Ver todas en Google</a>
        </div>

        <div class="reviews-grid" data-reviews-grid></div>

        <div class="reviews-fallback">
          <p>Lee las opiniones de quienes ya han pasado por Relleu.</p>
          <a class="btn btn-ghost" href="${GOOGLE_REVIEWS_FALLBACK_URL}" target="_blank" rel="noopener noreferrer">${G_LOGO} Ver reseñas en Google</a>
        </div>

        <div class="reviews-cta reveal">
          <p>¿Quieres que tu proceso empiece también así?</p>
          <a class="btn" href="#contacto">Primera sesión al 50%</a>
        </div>
      </div>
    </section>`;
}

function reviewCard(r: Review, i: number) {
  const name = r.authorUrl
    ? `<a href="${esc(r.authorUrl)}" target="_blank" rel="noopener noreferrer">${esc(r.author)}</a>`
    : esc(r.author);
  return `
    <figure class="review-card" style="--i:${i}">
      <div class="review-card-top">${stars(r.rating)}${G_LOGO}</div>
      <blockquote>&ldquo;${esc(r.text)}&rdquo;</blockquote>
      <button class="review-more" type="button" hidden>Leer más</button>
      <figcaption class="review-author">
        ${avatar(r, "review-avatar")}
        <span>
          <strong>${name}</strong>
          <span>Reseña en Google${r.relativeTime ? ` · ${esc(r.relativeTime)}` : ""}</span>
        </span>
      </figcaption>
    </figure>`;
}

// ── Carga y pintado ──

async function loadReviews(): Promise<ReviewsPayload> {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (raw) {
      const { at, data } = JSON.parse(raw);
      if (Date.now() - at < SESSION_TTL) return data;
    }
  } catch { /* sin almacenamiento disponible */ }

  const res = await fetch("/api/reviews", { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = (await res.json()) as ReviewsPayload;
  if (!data.total) throw new Error("Sin reseñas");

  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ at: Date.now(), data }));
  } catch { /* ignorar */ }
  return data;
}

function setupReadMore(root: ParentNode) {
  root.querySelectorAll<HTMLElement>(".review-card").forEach((card) => {
    const text = card.querySelector<HTMLElement>("blockquote");
    const btn = card.querySelector<HTMLButtonElement>(".review-more");
    if (!text || !btn || text.scrollHeight <= text.clientHeight + 4) return;
    btn.hidden = false;
    btn.addEventListener("click", () => {
      const open = card.classList.toggle("expanded");
      btn.textContent = open ? "Leer menos" : "Leer más";
    });
  });
}

function startHeroReview(el: HTMLElement, reviews: Review[]) {
  const list = reviews.filter((r) => r.text && r.rating >= 4);
  if (!list.length) return el.remove();

  const render = (r: Review) => {
    const snippet =
      r.text.length > 150
        ? r.text.slice(0, 150).replace(/\s+\S*$/, "").replace(/[\s,;:.]+$/, "") + "…"
        : r.text;
    el.innerHTML = `
      <div class="hero-review-inner">
        <div class="review-card-top">${stars(r.rating)}${G_LOGO}</div>
        <blockquote>&ldquo;${esc(snippet)}&rdquo;</blockquote>
        <div class="quote-author">
          ${avatar(r, "review-avatar")}
          <div><strong>${esc(r.author)}</strong><span>Reseña en Google</span></div>
        </div>
      </div>`;
    fallbackAvatars(el);
  };

  let i = 0;
  render(list[0]);
  if (list.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let paused = false;
  el.addEventListener("mouseenter", () => (paused = true));
  el.addEventListener("mouseleave", () => (paused = false));
  setInterval(() => {
    if (paused || document.hidden) return;
    el.classList.add("is-switching");
    setTimeout(() => {
      i = (i + 1) % list.length;
      render(list[i]);
      el.classList.remove("is-switching");
    }, 350);
  }, 7000);
}

export async function initReviews() {
  let data: ReviewsPayload;
  try {
    data = await loadReviews();
  } catch (err) {
    console.warn("[reviews] no disponibles:", err);
    document.body.classList.add("reviews-error");
    return;
  }

  const count = `${data.total} ${data.total === 1 ? "reseña" : "reseñas"} en Google`;
  document.querySelectorAll("[data-rating-value]").forEach((el) => (el.textContent = formatRating(data.rating)));
  document.querySelectorAll("[data-rating-count]").forEach((el) => (el.textContent = count));
  document.querySelectorAll<HTMLElement>("[data-rating-stars]").forEach((el) => {
    el.innerHTML = stars(data.rating, el.dataset.starsSize === "lg" ? "stars-lg" : "");
  });
  if (data.url) {
    document.querySelectorAll<HTMLAnchorElement>("[data-reviews-link]").forEach((a) => (a.href = data.url!));
  }
  document.querySelectorAll("[data-reviews-avatars]").forEach((el) => {
    el.innerHTML = data.reviews.slice(0, 4).map((r) => avatar(r, "rating-badge-avatar")).join("");
  });

  const withText = data.reviews.filter((r) => r.text);
  document.querySelectorAll<HTMLElement>("[data-reviews-grid]").forEach((grid) => {
    grid.innerHTML = withText.map(reviewCard).join("");
    grid.classList.toggle("reviews-grid-few", withText.length < 3);
    setupReadMore(grid);
  });

  const hero = document.querySelector<HTMLElement>("[data-hero-review]");
  if (hero) startHeroReview(hero, data.reviews);

  fallbackAvatars(document);
  document.body.classList.add("reviews-ready");
}
