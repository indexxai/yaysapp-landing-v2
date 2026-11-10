# YaysApp website (v2)

The public website at yaysapp.com: the home page, **Support**, **Privacy**, **Terms** and **Delete account**.
It replaces the plain-HTML page on `main` with the same pages, rebuilt in Next.js to match the YaysApp v2 design.

It is a **static site**: `npm run build` writes plain HTML, CSS and images to `out/`. Nothing runs on a server.

## Run it

Needs Node 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3200, reloads as you edit
```

## Build and host

```bash
npm run build      # writes the site to out/
npm start          # serves out/ at http://localhost:3200 to check it
```

Upload the contents of `out/` to any static host (Netlify, Vercel, Cloudflare Pages, S3 + CloudFront, nginx).
Pages are written as `privacy.html`, `terms.html` and so on. Most hosts serve `/privacy` from `privacy.html` on
their own; on nginx add `try_files $uri $uri.html $uri/ =404;`. `404.html` is the not-found page.

## Test it

```bash
npx playwright install chromium   # once
npm run test:e2e                  # builds, then checks every page on desktop and phone
```

## Where things are

| What | Where |
|---|---|
| Home page | `app/page.tsx`, styles in `app/site.css` |
| Support and Delete account forms | `components/forms.tsx` (they post to the Indexx API, `lib/links.ts`) |
| Privacy, Terms, Support and Delete account wording | `content/*.html`, shown as written: change the legal wording only with approval |
| Google Play link, Indexx API address | `lib/links.ts` |
| Colours, type and spacing | `app/tokens.css`, copied from the YaysApp app project (`packages/tokens`). Change them there and copy the file again, so the site and the app stay the same. |
| Images and logos | `public/img/` |

## Before it goes live

- **App Store:** the iOS app isn't published yet, so its badge says "Coming soon". When it ships, link the badge
  to `https://apps.apple.com/app/yaysapp/id{APPLE_APP_ID}`.
- **Google Play:** live, `com.indexx.yaysapp`.
