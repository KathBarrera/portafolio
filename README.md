# Portafolio · Katherin Barrera López

Sitio personal de una sola página: estudiante de Ciencia de Datos (Universidad del Norte), con proyectos en riesgo crediticio, salud y MLOps.

Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · Lenis. Se exporta como HTML estático (`out/`).
Estructura y animaciones inspiradas en [DATACONALEWEBSITE](https://github.com/programaconale/DATACONALEWEBSITE).

## Paleta

| Color | Hex | Uso |
| --- | --- | --- |
| Burgundy | `#4B1D3F` | títulos, botones, estados activos |
| Nude | `#E8D9C1` | fondos suaves (la página usa una versión más clara, `#F4ECDF`) |
| Rose Smoke | `#D8A7B1` | detalles, brillos, puntos |
| Off Black | `#1B1B1B` | texto de lectura |

Los tokens viven en `src/app/globals.css` (`:root`).

## Ejecutar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # genera el sitio estático en ./out
```

## Editar el contenido

Todo el texto está en **`src/lib/data.ts`**: perfil, herramientas, proyectos (con sus enlaces), experiencia, formación,
certificaciones y cifras. Los componentes solo leen de ese archivo. El CV descargable es `public/Katherin-Barrera-Lopez-CV.pdf`.

## Publicar en GitHub Pages

El workflow `.github/workflows/deploy.yml` publica el sitio cada vez que hay cambios en `main`.
Una sola vez: en GitHub, **Settings → Pages → Source: GitHub Actions**. El sitio queda en
`https://kathbarrera.github.io/portafolio/`.

## Secciones

| # | Sección | Componente |
| --- | --- | --- |
| — | Inicio | `hero/Hero.tsx`: arco con monograma, datos flotantes con parallax |
| 01 | Sobre mí | `sections/About.tsx`: credencial colgante que se balancea y se voltea |
| 02 | Herramientas | `sections/Skills.tsx`: tabla periódica con filtro por familia e inspector |
| 03 | Proyectos | `sections/Work.tsx` + `ui/MiniUI.tsx`: acordeón con bocetos ilustrativos |
| 04 | Trayectoria | `sections/Experience.tsx`: línea de tiempo que se dibuja al desplazarse |
| 05 | Certificaciones | `sections/Certifications.tsx` |
| 06 | En cifras | `sections/Achievements.tsx`: galería horizontal con contadores |
| 07 | Contacto | `sections/Contact.tsx` |

## Créditos

- Logos: [Devicon](https://devicon.dev) (MIT, `public/logos/LICENSE-devicon.txt`) y [Simple Icons](https://simpleicons.org)
  (CC0, tidyverse). Dash, Power BI y bookdown no tienen logo con licencia libre: se muestran con un icono de línea propio.
- Fuentes (SIL OFL 1.1): Inter Tight, Instrument Serif, JetBrains Mono.
