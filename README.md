# Omar Martinez — Portfolio

Static personal portfolio for [omar-martinez-dev.github.io](https://omar-martinez-dev.github.io), hosted with GitHub Pages.

## Purpose

This site presents product work through engineering decisions and user outcomes rather than a list of technologies. Ostinova is the lead case study because it demonstrates end-to-end ownership: product framing, SwiftUI implementation, local-first data, audio behavior, privacy-aware advertising, testing, and release preparation.

## Design and engineering decisions

- **Editorial product story:** a restrained dark layout keeps the app imagery and case-study narrative primary.
- **Static by design:** semantic HTML, CSS, and a small amount of JavaScript keep deployment simple, reduce runtime dependencies, and make the site inexpensive to host.
- **Responsive composition:** fluid type, grid breakpoints, and bounded media layouts support compact phones through large desktop displays without maintaining separate pages.
- **Progressive enhancement:** core navigation and content work without JavaScript; JavaScript adds reveal motion and lightweight interaction.
- **Accessibility:** visible focus states, descriptive alternative text, semantic landmarks, and reduced-motion support are built in.
- **Performance:** optimized screenshots, no framework bundle, and no third-party trackers keep the initial experience lightweight.

## Structure

```text
.
├── assets/       # Optimized product imagery
├── index.html    # Portfolio content and semantic structure
├── styles.css    # Tokens, layout, responsive rules, and motion
├── script.js     # Progressive interaction and reveal behavior
├── 404.html      # Branded fallback page
└── .nojekyll     # Serve the static files directly on GitHub Pages
```

## Local preview

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Publishing

GitHub Pages publishes from the `main` branch root. The `.nojekyll` file ensures the static files are served directly.

## Product principles demonstrated

- Begin with the interruption in the user's workflow.
- Treat privacy, accessibility, and error states as product behavior.
- Prefer maintainable systems over unnecessary abstractions.
- Validate on real device constraints, not only an ideal canvas.
