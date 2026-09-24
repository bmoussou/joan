# Relleu · Psicología online para opositores

Web de Relleu hecha con TypeScript + Vite y desplegada como Worker de Cloudflare
(archivos estáticos de `dist/` + un endpoint `/api/reviews`).

## Estructura

- `index.html`, `quien-soy.html`, `como-funciona.html`, `precios.html`: páginas
- `src/main.ts`, `src/quien-soy.ts`, …: contenido de cada página
- `src/layout.ts`: cabecera, pie y JS compartido
- `src/reviews.ts`: reseñas de Google en vivo (insignia y reseña del hero, sección de opiniones)
- `src/styles.css`: estilos
- `worker/index.ts`: Worker de Cloudflare (sirve la web y `/api/reviews` con caché)
- `worker/reviews.ts`: llamada a Google Places API (compartida con el servidor de desarrollo)

## Reseñas de Google automáticas

Las reseñas **no están escritas en el código**: el Worker las pide a Google Places API
y las guarda en caché 6 horas. Si Google falla, se sirve la última copia buena; si no
hay ninguna, la web oculta las valoraciones y muestra un enlace a Google.

Google Places API solo devuelve **hasta 5 reseñas** (las más relevantes); la nota media
y el número total sí son siempre los reales.

### Configurar la clave (una sola vez)

1. En [Google Cloud Console](https://console.cloud.google.com/) crea un proyecto y activa
   la facturación (el uso de esta web entra de sobra en el nivel gratuito).
2. Activa **Places API (New)**.
3. En *APIs y servicios → Credenciales* crea una **clave de API** y restríngela a
   *Places API (New)*.
4. En Cloudflare: *Workers & Pages → joan-web → Settings → Variables and Secrets* añade
   el secreto `GOOGLE_PLACES_API_KEY` con la clave.
5. (Opcional) Añade `GOOGLE_PLACE_ID` con el ID de la ficha. Si no, se busca por nombre
   ("Relleu – Psicología Online para Opositores").

## Desarrollo local

```bash
npm install
cp .env.example .env   # y pega la clave para ver reseñas reales
npm run dev
```

Sin clave, la web funciona igual pero sin reseñas (así es como se ve si Google fallara).

## Despliegue

Build: `npm run build` · Deploy: `npx wrangler deploy` (lo hace Cloudflare automáticamente
al subir a GitHub si el repo está conectado).
