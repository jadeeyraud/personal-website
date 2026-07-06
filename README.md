# Personal CV website

A modern, single-page CV. Sage-green theme, Manrope typeface. Everything (HTML,
CSS, and the tiny script) lives in one self-contained `index.html`, so it renders
correctly whether you double-click it, preview it, or serve it from GitHub Pages —
**no build step.**

## Structure

```
.
├── index.html      # the whole site — edit your text + styles here
├── assets/         # photo-color.jpg, photo-bw.jpg, and your cv.pdf (all PUBLIC)
└── .nojekyll       # tells GitHub Pages to skip Jekyll processing
```

> ⚠️ There is **no private folder**. A static site is entirely public — never commit
> secrets, API keys, or private data.

## Editing

- **Text** (profile, experience, education, skills, languages, interests): edit the
  matching sections in `index.html`.
- **Colors**: change the CSS variables at the top of the `<style>` block
  (`--green`, `--page-bg`, etc.) to re-theme the whole page.
- **Photo**: replace `assets/photo-color.jpg` / `assets/photo-bw.jpg`
  (hover swaps black-and-white → colour). Keep them square for best results.
- **Download PDF button**: drop your CV in `assets/cv.pdf` (or edit the link).

## Preview locally

Just double-click `index.html`, or serve it:

```bash
python3 -m http.server 8000   # → http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a repo named **`<your-username>.github.io`** (served at
   `https://<your-username>.github.io`). Any other name works too, just under
   `https://<your-username>.github.io/<repo-name>/`.
2. Push these files:
   ```bash
   git init
   git add .
   git commit -m "Initial CV site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source: "Deploy from a branch"**, pick branch
   **`main`** and folder **`/ (root)`**, then Save.
4. Wait ~1 minute and visit your URL.

## Custom domain (optional)

You already own `jadeeyraud.com`. Add a file named `CNAME` containing `jadeeyraud.com`,
then point the domain's DNS at GitHub Pages per their docs.
