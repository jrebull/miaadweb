# CLAUDE.md — Contexto del Proyecto MIAAD_WEB

## Descripción General

Sitio web estático para **Javier Rebull**, estudiante de la Maestría en Inteligencia Artificial y Analítica de Datos (MIAAD) en la Universidad Autónoma de Ciudad Juárez (UACJ).

- **URL en producción:** [miaad.dev](https://miaad.dev)
- **Repositorio:** [github.com/jrebull/miaadweb](https://github.com/jrebull/miaadweb)
- **Propósito:** Landing page académica personal + entregas de proyectos de la maestría

## Estructura de Archivos

```
/
├── index.html                          # Página principal (landing/CV)
├── javi_photo.jpg                      # Foto de perfil (raíz)
├── README.md                           # Documentación del proyecto
├── CLAUDE.md                           # Este archivo (contexto para Claude Code)
└── SmartOpt/                           # Directorio de proyectos académicos
    └── HHO_Phase01/                    # Proyecto: Harris Hawks Optimization
        ├── HHO.html                    # Presentación tipo slides (25 slides)
        ├── LogoSInFondoMIAAD.png       # Logo MIAAD/UACJ
        ├── DonaldTrump.png             # Imagen contexto migratorio
        ├── harris_hawks.jpg            # Foto halcones Harris
        ├── harris_hawks_trio.png       # Ilustración halcones
        ├── hho_fases.png               # Diagrama fases del algoritmo
        ├── visa_bulletin.png           # Captura Visa Bulletin
        ├── javi_photo.jpg              # Foto autor
        └── yazmin_photo.jpg            # Foto coautora
```

## Tecnologías

- **HTML5 + CSS3 puro** — Sin frameworks, sin build step, sin bundler
- **JavaScript vanilla** — Solo en HHO.html para navegación de slides
- **Google Fonts:** EB Garamond + DM Sans (index.html), Playfair Display + Source Sans 3 + JetBrains Mono (HHO.html)
- **MathJax 2.7.9** — Renderizado de fórmulas LaTeX (solo en HHO.html, cargado vía CDN)
- **SVG inline** — Iconos embebidos directamente en el HTML
- **Sin dependencias npm/package.json** — Todo es estático

## Paleta de Colores (Institucional UACJ)

| Variable CSS     | HEX       | Uso                    |
|------------------|-----------|------------------------|
| `--azul`         | `#003CA6` | Color primario         |
| `--azul-dark`    | `#002B7A` | Variante oscura        |
| `--azul-light`   | `#E8EEF9` | Fondos suaves          |
| `--amarillo`     | `#FFD600` | Acento / highlights    |
| `--amarillo-soft`| `#FFF8D6` | Fondo acento suave     |
| `--gris`         | `#555559` | Texto secundario       |
| `--negro`        | `#231F20` | Texto principal / body |
| `--bg`           | `#FAFAFA` | Fondo de página        |

## Convenciones de Código y Estilo

### HTML/CSS
- **Idioma del contenido:** Español (lang="es")
- **CSS embebido** en `<style>` dentro del `<head>` — no hay archivos .css separados
- **CSS custom properties (variables)** definidas en `:root` para colores
- **Diseño responsive:** Media queries con breakpoint a `700px`
- **Unidades:** `rem` para tipografía, `px` para bordes/sombras, `clamp()` para títulos responsivos
- **Nomenclatura de clases:** kebab-case (ej. `cv-card`, `hero-links`, `slide-title`)
- **Animaciones:** CSS-only con `@keyframes fadeUp` y clases delay (`d1`–`d6`)
- **Layout:** CSS Grid y Flexbox; max-width `900px` para contenido (index), `1280x720px` para slides (HHO)
- **No hay IDs para estilos** — se usan solo para anclaje (`#perfil`, `#proyectos`, `#programa`) y JS

### JavaScript (HHO.html)
- Vanilla JS, todo en un solo `<script>` al final del body
- Variables con `const`/`let`, funciones declarativas
- Navegación por teclado (flechas, espacio, Home, End, N para notas, F para fullscreen)
- Soporte touch (swipe) para dispositivos móviles
- Escala automática de la presentación con `transform: scale()`

### Patrones Generales
- **Zero-dependency philosophy:** No se usan frameworks ni librerías JS (excepto MathJax para fórmulas)
- **Single-file pages:** Cada página es un archivo HTML autocontenido (CSS + JS embebidos)
- **Imágenes locales:** Todas las imágenes están en el mismo directorio que el HTML que las usa
- **Sin minificación:** Código legible, sin paso de build

## Comandos Útiles

```bash
# Servidor local de desarrollo
python -m http.server 8000
# o
npx serve .

# El sitio se accede en http://localhost:8000

# No hay proceso de build — los archivos se sirven directamente
```

## Estructura de Proyectos Académicos

Los proyectos se organizan bajo `SmartOpt/` con la convención:
```
SmartOpt/<NombreAlgoritmo>_<Fase>/
```

Ejemplo: `SmartOpt/HHO_Phase01/` para la Fase 01 de Harris Hawks Optimization.

Cada proyecto es una presentación HTML tipo slides con:
- Resolución de diseño: **1280×720px** (16:9)
- Sidebar de navegación con secciones numeradas
- Panel de notas del presentador (atributo `data-notes` en cada slide)
- Soporte fullscreen
- Fórmulas matemáticas con MathJax
- Tarjetas de persona (`.person-card`) para autores

## Enlace desde index.html a Proyectos

Los proyectos se enlazan desde la sección "Proyectos" del `index.html` usando rutas relativas lowercase:
```html
<a href="https://miaad.dev/smartopt/hho_phase01/hho">
```
**Nota:** El servidor de producción parece hacer case-insensitive routing o rewriting (las carpetas usan PascalCase pero las URLs son lowercase).

## Reglas y Preferencias para Editar

1. **Idioma:** Todo el contenido visible está en **español**. Comentarios en el código pueden estar en inglés o español.
2. **Sin dependencias externas nuevas** salvo CDNs para fuentes o librerías de renderizado (MathJax).
3. **Mantener la paleta UACJ** — no introducir colores fuera de la paleta sin justificación.
4. **Cada página debe ser autocontenida** — CSS y JS embebidos en el HTML.
5. **Responsive obligatorio** — Todo debe funcionar en móvil (breakpoint ≤700px).
6. **No agregar .DS_Store al repo** — actualmente hay varios; considerar agregar `.gitignore`.
7. **Commits en español o inglés** — el historial usa español con formato: "HHO Presentacion vN".
8. **Imágenes:** Formatos JPG para fotos, PNG para diagramas/logos. Mantener en el mismo directorio del HTML.

## Git
- Todos los commits deben hacerse con el usuario: jrebull
- Nunca hacer commits como "claude" o cualquier otro usuario
- Mensajes de commit en español
