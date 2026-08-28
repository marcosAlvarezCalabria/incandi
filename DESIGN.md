---
name: Incandi
description: Precisión técnica con energía ember para una agencia bilingüe de desarrollo y automatización.
colors:
  ember: "#ff6a1a"
  ember-light: "#ff8a3d"
  ember-deep: "#c84605"
  ink: "#111114"
  ink-soft: "#2b2b31"
  muted: "#5f5f69"
  paper: "#ffffff"
  paper-soft: "#f7f6f4"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2.75rem, 7.4vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.038em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.125rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.62
rounded:
  control: "13px"
  card: "18px"
  panel: "28px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "28px"
  lg: "48px"
  section: "104px"
components:
  button-primary:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px 25px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "28px"
---

# Design System: Incandi

## Overview

**Creative North Star: "El taller al rojo vivo"**

Incandi combina la claridad de un estudio técnico con un único gesto de energía: el naranja ember. La interfaz se siente construida, precisa y humana; el papel blanco, la rejilla y los bordes finos organizan el contenido, mientras el resplandor naranja señala actividad, foco y conversión.

La composición alterna pasajes claros y aireados con un único panel oscuro para Inkendar. La personalidad nace de la tipografía compacta, el ritmo generoso y los detalles ember, no de efectos acumulados.

**Key Characteristics:**

- Papel blanco con rejilla técnica de 64px que se desvanece.
- Un único acento naranja ember, nunca una paleta multicolor.
- Titulares compactos y geométricos; cuerpo sobrio y altamente legible.
- Profundidad ambiental contenida mediante bordes, blur y sombras suaves.
- Un solo bloque oscuro, reservado al producto Inkendar.

## Colors

La estrategia es restringida: neutros de papel y tinta con un solo sistema naranja para energía, foco y acción.

### Primary

- **Ember:** acción principal, foco, indicadores y detalles de marca.
- **Ember Light:** parte superior de botones y puntos luminosos.
- **Ember Deep:** iconos, kickers y extremos de gradiente con contraste reforzado.

### Neutral

- **Ink:** titulares y contenido principal.
- **Ink Soft:** énfasis dentro del cuerpo.
- **Muted:** texto secundario sobre superficies claras.
- **Paper:** fondo y superficies principales.
- **Paper Soft:** sección personal y pie de página.

**The One Ember Rule.** El naranja es el único acento cromático de marca; no se añaden azules, violetas ni gradientes arcoíris.

**The One Dark Room Rule.** Inkendar es el único entorno oscuro de la página; el resto permanece sobre papel claro.

## Typography

**Display Font:** Space Grotesk (con sans-serif de respaldo)
**Body Font:** Inter (con system-ui y sans-serif de respaldo)

**Character:** Space Grotesk aporta una voz directa y técnica en titulares; Inter mantiene legibilidad y neutralidad en navegación, cuerpo y controles. Las seis fuentes WOFF2 se sirven localmente con `font-display: swap`.

### Hierarchy

- **Display** (700, escala fluida hasta 5.25rem, altura 1): promesa del hero.
- **Headline** (700, escala fluida hasta 3.125rem, altura 1.06): títulos de sección.
- **Title** (600–700, 1.25–1.375rem): servicios y casos.
- **Body** (400, 1rem, altura 1.62): lectura continua con medida de 48–57 caracteres.
- **Label** (600, 0.72–0.875rem): navegación, kickers y badges.

**The Compressed Headline Rule.** Los titulares usan peso alto, tracking negativo y altura de línea compacta; el texto de lectura conserva ritmo abierto y longitudes moderadas.

## Layout

El contenido vive en un contenedor central de hasta 1180px con 28px laterales en escritorio y 18px en móvil. Las secciones usan 104px verticales y alternan encabezados en dos columnas, retículas automáticas y pasajes enfocados. El breakpoint principal es 860px: la navegación se transforma en un panel accesible y las composiciones dobles pasan a una sola columna.

## Elevation & Depth

La profundidad es ambiental. Bordes de baja opacidad definen superficies; sombras amplias y suaves aparecen en tarjetas y llamadas a la acción. El nav usa transparencia y desenfoque porque se superpone al contenido durante el scroll.

### Shadow Vocabulary

- **Ambient:** sombra contenida para chips, tarjetas y controles claros.
- **Lifted:** sombra amplia para hover y panel de contacto.
- **Ember Action:** sombra naranja con desplazamiento para botones primarios.

**The Quiet Lift Rule.** Las superficies descansan casi planas y solo se elevan ligeramente como respuesta a hover o foco.

## Shapes

Los controles usan 13px, las tarjetas 18–20px y los paneles principales 28px. Los pills quedan reservados para chips y etiquetas compactas. Los bordes permanecen finos; círculos solo aparecen en indicadores o accesos sociales.

## Components

### Buttons

- **Shape:** rectángulo suavemente técnico con radio de 13px y altura mínima de 52px.
- **Primary:** gradiente ember vertical, texto blanco y sombra cálida desplazada.
- **Hover / Focus:** elevación de 2px; anillo de foco naranja visible en teclado.
- **Ghost / Dark:** superficie de papel con borde fino o transparencia blanca dentro de Inkendar.

### Chips

- **Style:** pill de papel, borde tenue, icono ember y texto muted.

### Cards / Containers

- **Corner Style:** 18px en tarjetas y 28px en paneles protagonistas.
- **Background:** papel blanco; Inkendar usa tinta profunda.
- **State:** ligera elevación y borde ember al pasar el puntero.

### Navigation

- **Desktop:** sticky, translúcida y compacta con links Inter de 14px.
- **Mobile:** botón hamburguesa real, panel a pantalla completa, cierre con Escape y trampa de foco.
- **Language:** grupo de botones ES/EN con `aria-pressed` y estado persistente.

### Ember Marker

El punto brillante aparece únicamente en logo, eyebrows y nombre de Inkendar. Es el gesto reconocible que conecta marca, actividad y CTA.

## Do's and Don'ts

### Do:

- **Do** mantener cada texto visible en español e inglés.
- **Do** usar el resplandor ember con moderación para foco, marca y acción.
- **Do** priorizar rendimiento, contraste, foco visible y movimiento reducido.
- **Do** reservar el bloque oscuro exclusivamente para Inkendar.

### Don't:

- **Don't** añadir nuevos colores de acento, secciones oscuras o fondos decorativos ajenos a la rejilla.
- **Don't** inventar métricas, clientes, testimonios o precios.
- **Don't** añadir dependencias de frontend o hidratación para interacciones que funcionan con JavaScript nativo.
