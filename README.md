# miaad.dev

Personal website for **Javier Rebull** — graduate student in the Master's program in Artificial Intelligence and Data Analytics (MIAAD) at Universidad Autónoma de Ciudad Juárez (UACJ).

🌐 **Live:** [miaad.dev](https://miaad.dev)

## About

Minimalist, single-page site built with vanilla HTML/CSS. Serves as a personal academic landing page featuring a mini CV, professional background, and program information.

### Features

- Responsive design (mobile-first)
- UACJ institutional color palette (`#003CA6`, `#FFD600`, `#555559`, `#231F20`)
- Zero dependencies — no JavaScript frameworks, no build step
- Google Fonts: EB Garamond + DM Sans
- Subtle fade-in animations (CSS only)

## Structure

```
/
├── index.html        # Single-page site
├── javi_photo.jpg    # Profile photo
└── README.md
```

## Setup

No build process required. Just serve the files:

```bash
# Local preview
python -m http.server 8000
```

Or deploy directly to any static hosting (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

## Color Palette (UACJ Institutional)

| Color    | HEX       | Use              |
|----------|-----------|------------------|
| Azul     | `#003CA6` | Primary          |
| Amarillo | `#FFD600` | Accent           |
| Gris     | `#555559` | Secondary text   |
| Negro    | `#231F20` | Body text        |

## Author

**Javier Rebull**
- [rebull.org](https://rebull.org)
- [LinkedIn](https://www.linkedin.com/in/rebull/)
- [GitHub](https://github.com/jrebull)

## License

MIT
