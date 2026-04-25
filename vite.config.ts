import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        quienSoy: "quien-soy.html",
        comoFunciona: "como-funciona.html",
      },
    },
  },
});
