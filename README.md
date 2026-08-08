# Sitio web — AYB Technology & Services SAC

Sitio estático construido con [Jekyll](https://jekyllrb.com/) para AYB
Technology & Services SAC: cableado estructurado, fibra óptica,
instalaciones eléctricas, pozos a tierra, cámaras CCTV, control de acceso y
radioenlaces en Perú.

## Estructura

- `_config.yml` — datos de la empresa (NAP), navegación, SEO.
- `_layouts/` — plantillas base (`default`, `servicio`, `post`).
- `_includes/` — header, footer, botón de WhatsApp, schema.org (JSON-LD).
- `_servicios/` — una página por servicio (colección de Jekyll).
- `_posts/` — artículos del blog.
- `_data/marcas.yml` — marcas/equipos con los que trabaja la empresa.
- `assets/` — CSS, JS e imágenes (logo, favicons, imagen para redes sociales).
- `index.html`, `nosotros.html`, `servicios.html`, `contacto.html`, `blog.html` — páginas principales.

## Desarrollo local

Requiere Ruby 3.x.

```bash
bundle install
bundle exec jekyll serve
```

Abrir `http://localhost:4000`.

## Publicación (GitHub Pages)

El repositorio incluye `.github/workflows/pages.yml`, que compila el sitio
con Jekyll y lo publica en GitHub Pages en cada push a `main`.

Para activarlo la primera vez:

1. Ir a **Settings → Pages** del repositorio.
2. En "Build and deployment", elegir **Source: GitHub Actions**.
3. Hacer push a `main` (o mergear el PR) y esperar a que corra el workflow.

## Pendientes conocidos

- **Dominio:** el sitio está configurado con `https://aybts.com` en
  `_config.yml` (`url:`). Si el dominio final es otro, actualizar ese valor
  y el archivo `CNAME` si se usa un dominio propio con GitHub Pages.
- **Redes sociales:** aún no hay cuentas de Facebook/Instagram/Twitter/LinkedIn.
  Cuando existan, agregarlas en `_config.yml` bajo `company.social` (ver el
  comentario de ejemplo en ese archivo) y los íconos aparecerán
  automáticamente en el footer.
- **Formulario de contacto:** por ahora arma un mensaje y abre WhatsApp
  directamente (no requiere backend). Si más adelante quieres que además
  llegue un correo, se puede conectar a un servicio como Formspree o
  Web3Forms con una cuenta propia.
- **Mapa de contacto:** usa el embed público de Google Maps (sin API key)
  basado en la dirección configurada en `_config.yml`.

## SEO técnico incluido

- `jekyll-seo-tag` (title, meta description, Open Graph, Twitter Card).
- `jekyll-sitemap` (sitemap.xml automático).
- Datos estructurados JSON-LD: `LocalBusiness`, `Service`, `FAQPage` y
  `BreadcrumbList` en cada página relevante.
- `robots.txt` con referencia al sitemap.
- Imagen de vista previa para redes sociales (`assets/img/og-cover.png`).
- Blog (`_posts/`) para estrategia de contenido a largo plazo.

Lograr el primer lugar en Google para las búsquedas del rubro requiere,
además de este trabajo on-page, continuar publicando contenido en el blog,
completar y verificar el perfil de **Google Business Profile** con la misma
dirección/teléfono, y conseguir enlaces/menciones desde otros sitios
peruanos del sector.
