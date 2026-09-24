// Worker de Cloudflare: sirve la web estática (dist) y expone /api/reviews.

import { fetchGoogleReviews, type ReviewsEnv, type ReviewsPayload } from "./reviews";

interface Env extends ReviewsEnv {
  /** Puede faltar si el deploy pasa --assets por CLI sin binding. */
  ASSETS?: { fetch(request: Request): Promise<Response> };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
}

/** Cada cuánto se vuelve a consultar Google. */
const REFRESH_MS = 6 * 60 * 60 * 1000;
/** Cuánto se conserva la última copia buena si Google falla. */
const KEEP_SECONDS = 30 * 24 * 60 * 60;
const CACHE_KEY = "https://relleu.internal/api/reviews/v1";

function json(body: unknown, status = 200, maxAge = 3600): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": status === 200 ? `public, max-age=${maxAge}` : "no-store",
    },
  });
}

async function handleReviews(env: Env, ctx: ExecutionContext): Promise<Response> {
  const cache = (caches as unknown as { default: Cache }).default;
  const cached = await cache.match(CACHE_KEY);
  const stale = cached ? ((await cached.json()) as ReviewsPayload) : null;

  if (stale && Date.now() - Date.parse(stale.fetchedAt) < REFRESH_MS) {
    return json(stale);
  }

  try {
    const fresh = await fetchGoogleReviews(env);
    ctx.waitUntil(
      cache.put(
        CACHE_KEY,
        new Response(JSON.stringify(fresh), {
          headers: { "Cache-Control": `public, max-age=${KEEP_SECONDS}` },
        })
      )
    );
    return json(fresh);
  } catch (err) {
    console.error("[reviews]", err);
    // Si Google falla, se sirve la última copia disponible
    if (stale) return json(stale, 200, 300);
    return json({ error: "reviews_unavailable" }, 503);
  }
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/reviews") {
      if (request.method !== "GET") return new Response(null, { status: 405 });
      return handleReviews(env, ctx);
    }
    // Los archivos estáticos los sirve Cloudflare antes de llegar aquí;
    // esto solo recibe rutas que no existen.
    return env.ASSETS ? env.ASSETS.fetch(request) : new Response("Not found", { status: 404 });
  },
};
