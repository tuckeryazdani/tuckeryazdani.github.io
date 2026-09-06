# Tucker Yazdani — Portfolio

A responsive multi-page portfolio focused on data engineering and platform engineering. Built with semantic HTML, modern CSS, and small, dependency-free JavaScript enhancements.

## Pages

- `index.html` — professional overview, capabilities, current role, and featured project
- `about.html` — engineering approach and technical skill matrix
- `experience.html` — current and previous professional experience
- `projects.html` — project summaries organized by problem, contribution, technology, and outcome
- `reddit-street-journal.html` — detailed project case study
- `contact.html` — email and professional profiles
- `photos.html` — personal photo gallery
- `twitter.html` — archived Reddit Street Journal output

## Local preview

Run a static server from the repository root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Design and accessibility

- Responsive desktop and mobile layouts
- Keyboard-accessible mobile navigation
- Persistent light/dark theme with system preference support
- Visible focus states, a skip link, reduced-motion support, and semantic page structure
- Shared styles in `assets/css/styles.css` and interactions in `assets/js/main.js`

The `gh-pages` branch deploys to Firebase Hosting through the workflows in `.github/workflows`.
