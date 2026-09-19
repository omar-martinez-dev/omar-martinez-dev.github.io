# Omar Martinez — Portfolio

Static engineering portfolio for https://omar-martinez-dev.github.io. No build step or JavaScript dependencies are required.

## Selected work

- **Ostinova:** lead product case study, using the public `ostinova-showcase` documentation and existing portfolio screenshots. Clearly labeled in development.
- **Music Player:** public native iOS project demonstrating persistence, local audio, system media integration, and concurrency.
- **Audiology Externship:** React/Firebase senior capstone, explicitly credited to the eight-person Code Enjoyers team. Descriptions describe team capabilities rather than claiming individual ownership.
- **Martinez Studio:** supporting link to the product catalog.

Content is based on public project READMEs. Private repository content is not published.

## Design

Warm paper, charcoal typography, muted project colors, and orange accents. Large product imagery is paired with a short problem statement, engineering focus, technologies, and a direct source/case-study link.

Mobbin MCP reference: [Unseen Studio selected projects](https://mobbin.com/sites/sections/79d328bc-800b-4830-9de1-7ef8fd2dd00f). The reference informed the image-led project hierarchy and restrained navigation; no reference-site assets are embedded.

Project imagery comes from the existing portfolio, `omar-martinez-dev/MusicPlayerApp/docs/screenshots`, and `austindusa/Code-Enjoyers-Senior-Project/src/images/HomePage.JPG`.

## Local preview

Run `python -m http.server 4173` and open http://localhost:4173.

## Structure

- `index.html`: semantic content, project links, and metadata
- `styles.css`: design tokens and desktop/mobile layouts
- `script.js`: progressive copyright-year enhancement
- `assets/`: local project screenshots and app icon
- `404.html`: fallback page

Content and navigation work without JavaScript. The page includes a keyboard skip link, visible focus outlines, descriptive image alternatives, reduced-motion support, and lazy loading for secondary screenshots. Google Fonts supplies DM Sans and Manrope with local fallback fonts.

## Validation

- Browser inspection at 1440px and 390px; no horizontal document overflow.
- All six local images loaded and all fragment links resolved.
- Project navigation and selected-work anchor checked in browser.
- `node --check script.js` and `git diff --check`.

## Publishing

GitHub Pages publishes the main branch root. Work on `redesign` is a reviewable branch; merging into main is the release step.
