# Págalo — PWA (React + Vite)

Recordatorios de pagos/deudas con notificaciones locales (cuando el navegador lo permite), repetición, backup JSON, compartir lista y modo instalable (PWA).

## 🛠️ Cómo ejecutar
```bash
npm install
npm run dev
```

## 🏗️ Build de producción
```bash
npm run build
```
Sirve el contenido de `dist/` en cualquier hosting estático (Vercel, Netlify, GitHub Pages).

## 📱 Instalación como App (PWA)
- Abre la URL en tu móvil y el navegador mostrará “Agregar a la pantalla principal”.
- En desktop (Chrome/Edge), verás el icono de instalar en la barra de direcciones.

## ⚠️ Nota sobre notificaciones
Las notificaciones programadas con `setTimeout` se disparan mientras la app está abierta. Para notificaciones push en segundo plano, agrega un servicio de push y amplía el `sw.js`.
