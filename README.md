# Incamdi

Landing bilingüe de Incamdi construida con Astro. El sitio se genera como HTML estático, usa JavaScript nativo para las interacciones y no necesita servidor en producción.

## Requisitos

- Node.js 22 o superior
- pnpm 10.22 o superior

## Desarrollo

```bash
pnpm install
pnpm dev
```

La web estará disponible en `http://localhost:4321`.

## Validación y build

```bash
pnpm build
pnpm preview
```

El resultado estático se genera en `dist/`. `pnpm build` ejecuta primero `astro check`, por lo que cualquier error de Astro o TypeScript bloquea el build.

## Configuración

Copia `.env.example` como `.env` y ajusta:

- `PUBLIC_SITE_URL`: dominio canonical. El valor provisional es `https://incamdi.com`.
- `PUBLIC_CONTACT_EMAIL`: buzón de negocio opcional para los datos estructurados. No se publica ninguno por defecto.

Los CTA de reserva abren WhatsApp en el número comercial configurado en `src/config/site.ts`.

No se ha instalado analítica. Cuando exista un dominio definitivo se puede conectar Plausible o Umami sin cambiar los CTA: estos ya emiten eventos genéricos mediante `data-track`.

## Arquitectura

El proyecto es un monolito Astro deliberadamente sencillo, con dependencias dirigidas hacia configuración y contenido:

```text
src/
├── config/       # URLs, SEO y contacto
├── domain/       # Contenido y tipos de negocio
├── components/   # Presentación por secciones y UI compartida
├── layouts/      # Documento, metadatos y datos estructurados
├── pages/        # Composición y rutas estáticas ES/EN
├── scripts/      # Bilingüismo, menú, motion y eventos
└── styles/       # Sistema visual global
```

`PRODUCT.md` conserva las decisiones de producto y `DESIGN.md` documenta el sistema visual implementado.

## Despliegue

Netlify, Vercel y GitHub Pages pueden servir el contenido de `dist/`:

- Comando de build: `pnpm build`
- Directorio de salida: `dist`
- Versión de Node recomendada: `22`

No se requieren funciones serverless ni variables secretas.
