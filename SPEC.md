# Incamdi — especificación viva y hoja de ruta

> Estado: activo  
> Última actualización: 1 de septiembre de 2026  
> Sitio público: https://incamdi.com/  
> Repositorio: https://github.com/marcosAlvarezCalabria/incamdi

## 1. Propósito de este documento

Este archivo es la referencia operativa del proyecto Incamdi. Resume lo que ya está construido, las decisiones vigentes, las comprobaciones realizadas y el trabajo previsto.

Debe actualizarse cuando cambien el alcance, la arquitectura, el contenido, el despliegue o las prioridades. Si una afirmación de `README.md`, `PRODUCT.md` o `DESIGN.md` contradice el estado descrito aquí, se debe revisar y corregir la documentación antigua.

## 2. Objetivo del producto

Incamdi es la web comercial bilingüe de la agencia de Marcos Álvarez. Su objetivo principal es convertir visitas cualificadas de Irlanda y España en conversaciones directas por WhatsApp.

La propuesta combina:

- desarrollo web a medida;
- SEO técnico y de contenido;
- software y SaaS a medida;
- automatizaciones y agentes con IA;
- trato directo con la persona que diseña y desarrolla el producto.

La web debe transmitir experiencia real sin inventar métricas, clientes, testimonios, precios ni resultados.

## 3. Estado actual

La landing está publicada y lista para producción en `https://incamdi.com/`. El código vive en la rama `main` y el despliegue automático actual se realiza mediante Cloudflare.

### 3.1 Base técnica terminada

- [x] Proyecto reconstruido con Astro como sitio estático.
- [x] Monolito sencillo con separación interna de configuración, dominio, componentes, páginas, scripts y estilos.
- [x] `pnpm` como gestor de paquetes.
- [x] Build sin servidor ni funciones obligatorias.
- [x] JavaScript nativo para menú, animaciones, vídeo y comportamiento interactivo.
- [x] Fuentes locales Space Grotesk e Inter.
- [x] Despliegue conectado al repositorio de GitHub.
- [x] Dominio definitivo `incamdi.com` activo sobre Cloudflare.

### 3.2 Marca y diseño terminados

- [x] Cambio completo de nombre de Incandi a Incamdi.
- [x] Sustitución del logotipo y del vídeo antiguo por las versiones corregidas de Incamdi.
- [x] Puntos de las dos letras “i” representados mediante pequeñas llamas en las apariciones visuales de la marca.
- [x] Llamas animadas en las “i” del H1 durante el scroll, respetando `prefers-reduced-motion`.
- [x] Corrección de mayúsculas, ortografía y posición de las llamas para que no pisen las letras.
- [x] Fondo claro con rejilla técnica y acento naranja ember.
- [x] Un único bloque oscuro reservado para Inkendar.
- [x] Movimiento coordinado de la ventana y el interior de Inkendar para producir profundidad.
- [x] Diseño responsive para móvil y escritorio.

### 3.3 Hero y conversión terminados

- [x] Vídeo protagonista en el hero.
- [x] En móvil, el vídeo aparece antes del texto y no detrás del título.
- [x] En escritorio, vídeo y propuesta comercial comparten el hero sin cortar el contenido importante.
- [x] Eliminados los controles propios de pausa y reproducción.
- [x] Al llegar al fotograma final, la zona de llamada a la acción integrada en el vídeo se vuelve clicable.
- [x] Los CTA de reserva abren WhatsApp en `+34 687 414 574`.
- [x] El menú móvil usa un fondo opaco para no mezclarse con el contenido de la página.

### 3.4 Casos y producto terminados

- [x] Epoxiron presentado mediante vídeo y captura de su software de albaranes.
- [x] Epoxi presentado como agente propio construido sobre Hermes y adaptado a la información, procesos y permisos del cliente.
- [x] Peru Inkas Travel presentado con imagen, enlace público y vídeo.
- [x] Inkendar presentado como producto de Incamdi dentro de una ventana visual integrada en la rejilla.
- [x] Enlace público a la landing de Inkendar: `https://inkendar.netlify.app/`.
- [x] Los casos secundarios Koko Atelier, CineHub y ConoXchange se mencionan sin inventar pruebas o métricas.

### 3.5 Idiomas y accesibilidad terminados

- [x] Español en `/` e inglés en `/en/`.
- [x] Cada idioma se genera como HTML estático independiente.
- [x] El selector ES/EN usa enlaces rastreables y no depende de JavaScript ni `localStorage`.
- [x] Atributos `lang`, textos, títulos, descripciones y etiquetas accesibles localizados por ruta.
- [x] Navegación por teclado, foco visible, enlace para saltar al contenido y menú accesible.
- [x] Movimiento reducido respetado cuando el sistema del usuario lo solicita.
- [x] Lighthouse de accesibilidad: 100 en la medición de producción del 1 de septiembre de 2026.

### 3.6 SEO técnico y rendimiento terminados

- [x] Títulos y descripciones específicos para español e inglés.
- [x] Canonical correcto en `/` y `/en/`.
- [x] `hreflang` para `es-ES`, `en-IE` y `x-default`.
- [x] Open Graph y Twitter Cards con imagen y texto alternativo.
- [x] Datos estructurados para `WebSite`, `WebPage`, `Organization`, `Person`, servicios e Inkendar.
- [x] `robots.txt` público y enlazado al sitemap.
- [x] Sitemap con las rutas `/` y `/en/`.
- [x] Imágenes de proyecto responsive y optimizadas en WebP.
- [x] Logotipos optimizados para su tamaño real de presentación.
- [x] Vídeo del hero reducido de aproximadamente 7,6 MB a 3,63 MB.
- [x] CSS crítico integrado para eliminar el bloqueo inicial de renderizado.
- [x] Carga del vídeo pospuesta para priorizar el contenido visible.
- [x] Auditoría SEO y rendimiento publicada en el commit `775f5db`.

Resultados Lighthouse móvil en producción después de la auditoría:

| Métrica | Antes | Después |
| --- | ---: | ---: |
| Rendimiento | 85 | 99 |
| Accesibilidad | 100 | 100 |
| Buenas prácticas | 100 | 100 |
| SEO | 100 | 100 |
| First Contentful Paint | 2,3 s | 1,3 s |
| Largest Contentful Paint | 3,0 s | 1,9 s |
| Total Blocking Time | 240 ms | 10 ms |
| Cumulative Layout Shift | 0 | 0 |

Estas cifras son mediciones sintéticas y no sustituyen los datos reales de Core Web Vitals que Google recopilará cuando exista tráfico suficiente.

## 4. Arquitectura vigente

```text
src/
├── config/       # Dominio, contacto, URLs y metadatos globales
├── domain/       # Contenido bilingüe y modelos del negocio
├── components/   # Secciones de la landing y UI compartida
├── layouts/      # Documento HTML, SEO y datos estructurados
├── pages/        # Rutas estáticas ES/EN y página 404
├── scripts/      # Menú, animaciones, vídeo y eventos
└── styles/       # Sistema visual, hero y accesibilidad
```

Principios técnicos:

- mantener la web estática siempre que el producto no requiera lógica de servidor;
- no añadir frameworks de interfaz ni dependencias innecesarias;
- centralizar URLs, contacto y metadatos en configuración;
- centralizar el contenido bilingüe en dominio;
- reutilizar componentes y tokens antes de duplicar HTML o CSS;
- hacer que una regresión de Astro o TypeScript bloquee la build.

## 5. Decisiones y límites vigentes

- La conversión principal es WhatsApp; no existe formulario propio.
- No hay analítica ni tracking de terceros instalado actualmente.
- No se necesita banner de cookies mientras no se incorporen tecnologías no esenciales.
- No se publicará un correo que no haya sido confirmado.
- No se inventarán razón social, domicilio, NIF/CIF, jurisdicción, plazos legales ni métricas comerciales.
- Inkendar mantiene por ahora su URL pública de Netlify, independientemente del hosting de Incamdi.
- La landing puede posicionar la marca y términos generales, pero no puede cubrir con profundidad todas las intenciones de búsqueda sin páginas específicas.
- Una puntuación Lighthouse alta no garantiza por sí sola posicionamiento, tráfico ni ventas.

## 6. Hoja de ruta

### Fase 1 — Visibilidad en Google

Prioridad inmediata cuando Marcos esté delante del ordenador.

- [ ] Crear o seleccionar en Google Search Console la propiedad de dominio `incamdi.com`.
- [ ] Verificar la propiedad mediante DNS en Cloudflare.
- [ ] Enviar `https://incamdi.com/sitemap-index.xml`.
- [ ] Comprobar que Google detecta `/` y `/en/` como páginas indexables.
- [ ] Solicitar indexación inicial si Search Console lo permite.
- [ ] Revisar durante las semanas siguientes cobertura, consultas y Core Web Vitals reales.

Definición de terminado:

- la propiedad aparece como verificada;
- el sitemap figura como procesado correctamente;
- no existen errores técnicos de indexación sin resolver.

### Fase 2 — Páginas de servicio

Crear páginas con contenido original, útil y bilingüe para las principales intenciones comerciales.

Rutas propuestas, sujetas a revisión de copy y estructura:

- desarrollo web a medida;
- SEO técnico;
- automatizaciones con IA;
- software y SaaS a medida;
- equivalentes en inglés bajo `/en/`.

Cada página deberá incluir:

- problema que resuelve;
- cliente adecuado para el servicio;
- proceso de trabajo;
- entregables reales;
- caso relacionado cuando exista;
- preguntas frecuentes honestas;
- CTA directo a WhatsApp;
- title, description, canonical, `hreflang` y datos estructurados coherentes.

No se crearán páginas casi idénticas cambiando únicamente el nombre de una ciudad o una palabra clave.

### Fase 3 — Casos de estudio completos

- [ ] Convertir Epoxiron en un caso de estudio detallado.
- [ ] Convertir Inkendar en un caso de estudio de producto.
- [ ] Convertir Peru Inkas Travel en un caso de estudio web y SEO.
- [ ] Añadir Koko Atelier, CineHub o ConoXchange solo cuando existan material y enlaces suficientes.

Cada caso deberá separar claramente:

- contexto y problema;
- solución construida;
- responsabilidades de Marcos;
- arquitectura o tecnologías relevantes;
- resultado verificable;
- límites de la información pública del cliente.

No se publicarán porcentajes, ingresos, conversiones o testimonios sin evidencia y autorización.

### Fase 4 — Legal y privacidad

Antes de publicar páginas legales se deberán confirmar:

- nombre legal del responsable;
- nombre comercial;
- país y jurisdicción;
- correo de privacidad;
- dirección legal que deba publicarse;
- tratamientos y plazos de conservación reales.

Trabajo previsto:

- [ ] Política de privacidad ES/EN.
- [ ] Términos y condiciones ES/EN.
- [ ] Aviso legal si resulta aplicable tras revisión cualificada.
- [ ] Enlaces visibles desde el footer.
- [ ] Revisión por una persona cualificada antes de considerarlo asesoramiento o texto jurídico definitivo.

### Fase 5 — Analítica y conversión

- [ ] Elegir entre Cloudflare Web Analytics u otra herramienta respetuosa con la privacidad.
- [ ] Documentar qué información recoge y durante cuánto tiempo.
- [ ] Medir clics a WhatsApp, Inkendar y casos públicos.
- [ ] No cargar analítica no esencial antes del consentimiento cuando este sea necesario.
- [ ] Añadir banner de consentimiento solo si las tecnologías instaladas lo requieren.
- [ ] Evaluar el rendimiento después de integrar cualquier script externo.

### Fase 6 — SEO local y autoridad

- [ ] Evaluar si corresponde crear un Google Business Profile como negocio local o de área de servicio.
- [ ] Confirmar qué ubicación puede publicarse y qué requisitos de elegibilidad se cumplen.
- [ ] Mejorar señales locales reales para Galway, Madrid, Irlanda y España.
- [ ] Conseguir menciones, enlaces y reseñas legítimas de proyectos o clientes autorizados.
- [ ] Publicar contenido únicamente cuando responda a preguntas reales de clientes potenciales.

### Fase 7 — Mantenimiento continuo

Revisión mensual recomendada:

- estado de indexación y sitemap;
- consultas, páginas y países en Search Console;
- Core Web Vitals reales;
- enlaces rotos;
- funcionamiento de WhatsApp y enlaces externos;
- dependencias y vulnerabilidades;
- rendimiento móvil;
- exactitud del contenido y proyectos mostrados.

## 7. Datos pendientes que requieren decisión humana

- Correo comercial o de privacidad que deba hacerse público.
- Identidad legal y datos necesarios para textos legales.
- Herramienta de analítica elegida.
- Elegibilidad y configuración deseada para Google Business Profile.
- Métricas, testimonios o resultados que puedan publicarse con autorización.
- Orden comercial de las futuras páginas de servicio.

## 8. Criterios de calidad para cualquier cambio futuro

Antes de publicar una nueva funcionalidad o página:

- [ ] Existe en español e inglés cuando es contenido público de negocio.
- [ ] Funciona con teclado y tiene foco visible.
- [ ] Respeta contraste y movimiento reducido.
- [ ] No introduce datos, claims ni elementos legales inventados.
- [ ] Incluye metadatos y semántica apropiados para su ruta.
- [ ] No empeora el rendimiento de forma injustificada.
- [ ] `pnpm build` pasa sin errores.
- [ ] `git diff --check` pasa.
- [ ] El diff final no contiene archivos temporales ni cambios accidentales.
- [ ] El despliegue de Cloudflare se verifica en la URL pública.
- [ ] Este documento se actualiza si cambia el estado o la hoja de ruta.

## 9. Próximo paso acordado

Cuando Marcos vuelva a estar delante del ordenador:

1. abrir Google Search Console;
2. iniciar sesión con la cuenta que administrará Incamdi;
3. verificar `incamdi.com` mediante DNS;
4. enviar el sitemap;
5. registrar aquí la fecha y el resultado.

