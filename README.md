# Tucker Yazdani — Data Engineer Portfolio

A modern, responsive portfolio website designed for recruiters, hiring managers, and technical leads.

## Tech Stack
- HTML
- CSS
- Vanilla JavaScript

## File Structure

```text
.
├── index.html           # Main single-page portfolio layout
├── main.css             # Design system, responsive styling, dark mode theme variables
├── script.js            # Interactions: dark mode, nav highlight, reveal animations, project filters
├── Photos/              # Local image assets
├── about.html           # Legacy page (retained)
├── projects.html        # Legacy page (retained)
├── twitter.html         # Legacy page (retained)
├── photos.html          # Legacy page (retained)
└── firebase.json
```

## Sections Included
- Hero
- About Me
- Featured Projects
- Experience Timeline
- Technical Architecture
- Contact

## Local Development

Open `index.html` directly, or serve with a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Push changes to your repository's publishing branch (commonly `main` or `gh-pages`).
2. In GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - **Source**: Deploy from a branch
   - **Branch**: your selected branch, `/ (root)`
4. Save and wait for deployment to complete.
5. Verify at `https://tuckeryazdani.github.io`.

## Notes
- Replace `resume.pdf` in the project root with your latest resume so the Hero CTA works immediately.
- Update project card copy and metrics with your real production examples for best credibility.
