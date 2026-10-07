# House of Hope — houseofhopec3.org

Astro site for House of Hope Christian Counseling Center.

## Commands

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm install`     | Install dependencies (Node 22+ recommended)   |
| `npm run dev`     | Local dev server at http://localhost:4321     |
| `npm run build`   | Build the static site to `dist/`              |
| `npm run preview` | Preview the production build locally          |

`dist/` is plain static HTML, CSS and optimized images.

## Deploying to Cloudflare

The repo is set up for Cloudflare Workers static assets (`wrangler.json`).

1. Push this folder to a GitHub repository (the files at the repo root, not inside a subfolder).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Import a repository**, and pick the repo.
3. Build settings:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
   - Node version: 22 (also pinned in `.nvmrc` and `package.json`)
4. Add the custom domain `houseofhopec3.org` under the project's **Settings → Domains & Routes**.

Every push to the main branch rebuilds and redeploys the site.

If you prefer Cloudflare **Pages** instead: build command `npm run build`, output directory `dist`. `wrangler.json` is not needed there.

`public/_redirects` sends the old `/contact` page to the contact section on Get Involved.

## Pages

| URL               | File                          |
| ----------------- | ----------------------------- |
| `/`               | `src/pages/index.astro`       |
| `/about/`         | `src/pages/about.astro`       |
| `/services/`      | `src/pages/services.astro`    |
| `/our-work/`      | `src/pages/our-work.astro`    |
| `/get-involved/`  | `src/pages/get-involved.astro`|
| 404               | `src/pages/404.astro`         |

## Where to edit things

- **Links, phone, email, mailing address, announcement bar:** `src/data/site.ts`
- **Services, core beliefs, "the problem" list:** `src/data/content.ts`
- **Colors, fonts, buttons, spacing:** `src/styles/global.css` (CSS variables at the top)
- **Header / footer / newsletter band:** `src/components/`
- **Photos:** `src/assets/images/` — Astro converts them to responsive WebP at build time. Replace a file with the same name to swap a photo.
- **Social share image and favicons:** `public/`

## Still to fill in

- A larger original of `hero.jpg` if one exists (the current file is ~1000px wide)

## Notes

