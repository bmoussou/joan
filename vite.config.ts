import { defineConfig, loadEnv, type Plugin } from "vite";
import { fetchGoogleReviews, type ReviewsPayload } from "./worker/reviews";
import { html as inicio } from "./src/pages/inicio";
import { html as quienSoy } from "./src/pages/quien-soy";
import { html as comoFunciona } from "./src/pages/como-funciona";
import { html as precios } from "./src/pages/precios";

// Pre-renderiza el contenido de cada página dentro del HTML, para que Google
// (y cualquier buscador o red social) lo lea sin ejecutar JavaScript.
const PAGES: Record<string, string> = {
  "index.html": inicio,
  "quien-soy.html": quienSoy,
  "como-funciona.html": comoFunciona,
  "precios.html": precios,
};

function prerender(): Plugin {
  return {
    name: "prerender-pages",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        const file = ctx.filename.replace(/\\/g, "/").split("/").pop()!;
        const content = PAGES[file];
        if (content === undefined) return html;
        return html.replace("<!--app-->", content);
      },
    },
  };
}

// En desarrollo, sirve /api/reviews igual que el Worker de producción
function reviewsDevApi(env: Record<string, string>): Plugin {
  let cache: { at: number; data: ReviewsPayload } | null = null;
  return {
    name: "reviews-dev-api",
    configureServer(server) {
      server.middlewares.use("/api/reviews", async (_req, res) => {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        try {
          if (!cache || Date.now() - cache.at > 10 * 60 * 1000) {
            cache = { at: Date.now(), data: await fetchGoogleReviews(env) };
          }
          res.end(JSON.stringify(cache.data));
        } catch (err) {
          server.config.logger.warn(`[reviews] ${(err as Error).message}`);
          res.statusCode = 503;
          res.end(JSON.stringify({ error: "reviews_unavailable" }));
        }
      });
    },
  };
}

// Para el espejo sin Worker (GitHub Pages): guarda las reseñas como archivo
// estático en dist/api/reviews. Solo con STATIC_REVIEWS=1; en Cloudflare
// ese archivo taparía al Worker.
function staticReviews(env: Record<string, string>): Plugin {
  return {
    name: "static-reviews",
    apply: "build",
    async generateBundle() {
      if (process.env.STATIC_REVIEWS !== "1") return;
      try {
        const data = await fetchGoogleReviews(env);
        this.emitFile({ type: "asset", fileName: "api/reviews", source: JSON.stringify(data) });
      } catch (err) {
        this.warn(`[reviews] sin reseñas en el espejo: ${(err as Error).message}`);
      }
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [
    prerender(),
    reviewsDevApi(loadEnv(mode, process.cwd(), "GOOGLE_")),
    staticReviews(loadEnv(mode, process.cwd(), "GOOGLE_")),
  ],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        quienSoy: "quien-soy.html",
        comoFunciona: "como-funciona.html",
        precios: "precios.html",
      },
    },
  },
}));
