# Mantra Academy — Website

Marketing site for Mantra Academy, a Maths &amp; Science tuition academy in
Indirapuram, Ghaziabad, teaching Grades 7–10 across CBSE and ICSE boards.

## Stack

- **[Astro](https://astro.build)** — static site generator, no backend server, fast by default
- **[Decap CMS](https://decapcms.org)** — free, git-based admin panel at `/admin` for editing the noticeboard without touching code
- **Hosting**: Netlify (free tier) — auto-builds on every push to `main`, and provides the login (via Netlify Identity + Git Gateway) that powers the `/admin` panel
- **Repo**: GitHub — source of truth; Netlify deploys from here, and Decap CMS commits content edits back here

## Pages

| Route            | Purpose                                              |
|-------------------|-------------------------------------------------------|
| `/`               | Home — hero, why-us, testimonial, CTA               |
| `/about`          | About Us — mission and teaching approach             |
| `/courses`        | Courses — CBSE/ICSE, Grades 7–10, Maths &amp; Science |
| `/ceo-message`    | From the CEO's Desk — founder message                |
| `/updates`        | Noticeboard — pulls from `src/content/notices/`       |
| `/admissions`     | Admissions/Contact — JotForm embed, WhatsApp, email   |
| `/admin`          | Decap CMS — admin login to edit noticeboard entries   |

## Local development

```sh
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

```sh
npm run build    # outputs static site to dist/
npm run preview  # serves the built dist/ locally
```

## Editing the noticeboard without code

Once deployed and Identity/Git Gateway are set up on Netlify (see deployment
notes below), go to `yourdomain.com/admin`, log in, and edit/add notices
directly. No code or GitHub knowledge required.

Notices live as Markdown files in `src/content/notices/`. Each one has:
`title`, `date`, `summary`, `pinned` (boolean), and a `body`.

## Deployment notes

1. Push this repo to GitHub.
2. Connect the repo to Netlify (build command `npm run build`, publish
   directory `dist`).
3. In Netlify: enable **Identity**, then enable **Git Gateway** under
   Identity → Services. Invite the admin (e.g. the academy's mom/owner) by
   email under Identity → Invite users.
4. Once a custom domain is registered, add it under Netlify → Domain
   management, and update:
   - `site` in `astro.config.mjs`
   - `SITE_URL` in `src/layouts/Layout.astro`
   - `Sitemap:` line in `public/robots.txt`

## Things still pending

- Real exported logo file (currently using a CSS text wordmark as a
  placeholder, since only Canva editor screenshots were available)
- Real photography (hero currently uses a CSS badge, not an image)
- Domain registration — placeholder URL `mantraacademy.example` is used
  throughout until a real domain is picked
