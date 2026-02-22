# Tucker Yazdani Portfolio (GitHub Pages)

Modern multi-page portfolio built with HTML, CSS, and vanilla JavaScript.

## File Structure

```text
/
├── index.html
├── projects.html
├── experience.html
├── about.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       └── README.md
```

## Features
- Sticky top navigation with active-page highlight
- Smooth scrolling support
- Dark mode toggle with `localStorage` persistence
- Responsive, accessible layout
- SEO and Open Graph tags
- Resume-safe content model with TODO placeholders for missing links/details

## Local Preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## GitHub Pages Deployment

1. Push this repository to GitHub.
2. Go to repository **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose your publish branch (e.g., `main`) and folder (`/root`).
5. Save and wait for deployment.
6. Open the provided GitHub Pages URL.

## TODO Setup Checklist
- Replace `TODO_EMAIL`, `TODO_LINKEDIN_URL`, `TODO_GITHUB_URL`, `TODO_TWITTER_URL`, `TODO_GITHUB_PAGES_URL`.
- Add role-specific experience bullets and technologies where marked `Add details`.
- Add a `resume.pdf` file to root, then update hero resume link.


## Netlify Deployment

If Netlify is configured to run Jekyll (`bundle exec jekyll build`), override it for this static HTML/CSS/JS site:

1. Commit `netlify.toml` (included in this repo).
2. In Netlify **Site settings → Build & deploy → Build settings**, clear any old build command if present in UI.
3. Trigger a new deploy.

This site does not require Ruby, Bundler, or Jekyll.
