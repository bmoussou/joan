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

## Bloqueos de LaLiga (IPs de Cloudflare)

Durante los partidos, LaLiga hace que las operadoras españolas bloqueen IPs compartidas
de Cloudflare, y con ellas caen webs que no tienen nada que ver (esta incluida). Contra eso
no sirve nada dentro de Cloudflare: hay que servir la web desde **otras IPs**.

Por eso existe un **espejo en GitHub Pages** (`.github/workflows/espejo-github-pages.yml`):
en cada subida a `main` (y cada 6 h, para refrescar reseñas) se compila la misma web y se
publica en GitHub Pages. Las reseñas se guardan como archivo estático (`dist/api/reviews`),
así que la web es idéntica y no depende de Cloudflare para nada. EmailJS va dentro del
bundle (antes venía de jsDelivr, que también usa Cloudflare).

### Activarlo (una sola vez)

1. GitHub → repo → *Settings → Pages* → *Source: GitHub Actions*.
   (En repos privados GitHub Pages necesita un plan de pago; si no, hacer el repo público:
   no hay secretos en el código.)
2. *Settings → Secrets and variables → Actions*: añadir `GOOGLE_PLACES_API_KEY`
   (y `GOOGLE_PLACE_ID` si se usa).
3. *Actions → Espejo en GitHub Pages → Run workflow*. Queda en
   `https://<usuario>.github.io/<repo>/`… pero las rutas son absolutas (`/assets/…`), así que
   se usa **con el dominio propio**: *Settings → Pages → Custom domain* → `tudominio.com`.

### Qué apunta el dominio (DNS)

- **Recomendado: dejar la web siempre en GitHub Pages.** En el DNS del dominio:
  `A` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  (y `CNAME www` → `<usuario>.github.io`). Si el DNS está en Cloudflare, poner esos
  registros con la **nube gris (DNS only)**: así Cloudflare solo resuelve el nombre y el
  tráfico no pasa por sus IPs, que es lo que se bloquea.
- **Alternativa: seguir en Cloudflare y cambiar solo cuando haya bloqueo**, pasando esos
  registros a nube gris durante los partidos. Funciona, pero es manual y hay unos minutos
  de propagación.

> Una web en `*.workers.dev` no se puede proteger: es siempre IP de Cloudflare.
> Hace falta dominio propio.
