# Web tipo centro de psicologia con TypeScript (gratis con Cloudflare Pages)

Este proyecto usa TypeScript + Vite y encaja en el plan gratuito de Cloudflare Pages.

## 1) Curl para analizar estructura de la web de referencia

Comando base usado:

```bash
curl -I -L https://dependepsicologia.es/
```

Resultado clave detectado:
- HTTP 200
- `X-Powered-By: PHP/8.1.34`
- `Link: .../wp-json/` (WordPress)
- Navegacion principal observada: Inicio, Nuestra terapia, Quienes somos, Centro, Contacto
- Estructura general: `header/nav + varias section + footer`

## 2) Probar local

```bash
npm install
npm run dev
```

## 3) Subir gratis a Cloudflare Pages

1. Sube esta carpeta a un repo en GitHub.
2. En Cloudflare: `Workers & Pages` -> `Create` -> `Pages` -> `Connect to Git`.
3. Selecciona el repo.
4. Build settings:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy.

Con eso queda online gratis.

## 4) Estructura

- `index.html`: entrada base
- `src/main.ts`: render de la landing y logica tipada
- `src/styles.css`: estilos
- `tsconfig.json`: configuracion TypeScript
