# Los Muchachos de Punto y Banca — Sitio Web

Pizzería porteña en Palermo, CABA. Sitio estático (HTML + Tailwind CSS compilado localmente).

## Desarrollo local

```bash
npm install
npm run build     # compila src/input.css -> dist/styles.css
python3 -m http.server 8080   # o: npx serve .
```

Abrí http://localhost:8080

## Deploy

Este repo está listo para Vercel: `vercel.json` define el build command
(`npm run build`) y sirve todo desde la raíz del proyecto.

## Pendientes
- Reemplazar el número de WhatsApp de ejemplo (+54 9 11 1234-5678, "5491112345678"
  en el código) por el real.
- Las imágenes están alojadas en un dominio temporal de Google (la herramienta de
  diseño original). Para producción, reemplazarlas por fotos propias.
