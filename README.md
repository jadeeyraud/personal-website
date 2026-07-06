# Jade Eyraud — Online CV

A single-page, responsive CV site. Built from the **"1a Sidebar Sage"** design
direction (pastel green · Manrope font), as chosen from the Claude Design handoff.

## Files

```
site/
├── index.html                     # the page (semantic HTML, all content inline)
├── styles.css                     # all styling, responsive + print rules
└── assets/
    ├── photo-color.jpg            # colour headshot (shown on hover / when printing)
    ├── photo-bw.jpg               # black & white headshot (default)
    └── Jade_Eyraud_CV_2026.pdf    # linked by the "Download PDF" button
```

No build step, no dependencies. It's plain static HTML/CSS.

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
cd site
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Features

- **Two-column layout** — sage sidebar (photo, contact, skills, languages,
  interests) beside the main column (profile, experience, education).
- **Photo hover swap** — the headshot shows black & white by default and fades
  to colour on hover (`.photo-swap:hover .photo-bw`). Keyboard focus triggers it too.
- **Subtle paw motif** by *Interests*, and a paw favicon — the quiet nod to the
  two adopted cats.
- **Responsive** — the sidebar stacks above the main column below 720px; the
  header wraps on small phones.
- **Print-ready** — printing hides the button, shows the colour photo, and keeps
  the sage backgrounds (`@media print`).

## Deploy

Upload the contents of `site/` to any static host (Netlify, GitHub Pages,
Cloudflare Pages, your own server). For the personal domain, drop these files at
the web root of <https://jadeeyraud.com/>.
