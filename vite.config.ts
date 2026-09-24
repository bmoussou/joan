import { defineConfig, loadEnv, type Plugin } from "vite";
import { fetchGoogleReviews, type ReviewsPayload } from "./worker/reviews";

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

export default defineConfig(({ mode }) => ({
  plugins: [reviewsDevApi(loadEnv(mode, process.cwd(), "GOOGLE_"))],
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
