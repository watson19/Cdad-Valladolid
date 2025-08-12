# Comunidad Bahá’í de Valladolid – Sitio en React (Vite) + Vercel

Sitio de una sola página inspirado en bahai.es / bahai.org, con Tailwind, SEO y despliegue en Vercel.

## 🚀 Puesta en marcha

```bash
npm i
npm run dev
```

Abre http://localhost:5173

## 🧱 Build y deploy

```bash
npm run build
npm run preview
```

Conecta el repo en Vercel → **New Project** → Importa desde GitHub → Framework: **Vite** → Build command: `npm run build` → Output: `dist`.

## 🔧 Configuración
- **Dominio**: actualiza `siteUrl` en `src/App.jsx`, y en `robots.txt` + `sitemap.xml`.
- **Imagen social**: `public/og-image.svg` (puedes exportar a PNG 1200×630).
- **Apple touch icon**: coloca un PNG 512×512 en `public/apple-touch-icon.png`.
- **Privacidad**: el formulario abre el correo del usuario con un `mailto:` a `valladolid@bahai.es`.

## 📞 Contacto / WhatsApp
- Teléfono visible: `657683224`. Enlace internacional para WhatsApp: `34657683224`.

## 🗺️ Mapa
- Google Maps embed a: Calle Juan García Hortelano 43, Valladolid.