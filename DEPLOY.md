# Deploying the Portfolio (React SPA)

This repository contains both a static site (`index.html`) and a React Vite app in `react-portfolio`.

Recommended: deploy the React app (`react-portfolio`) to Netlify for full SPA routing support.

Quick manual Netlify steps:

1. Go to https://app.netlify.com and sign in with GitHub.
2. New site -> Import from GitHub -> select this repository.
3. In Build settings use:
   - Base directory: `react-portfolio`
   - Build command: `npm run build`
   - Publish directory: `react-portfolio/dist`
4. Add the following environment variable (if needed): `NODE_VERSION=18`.
5. Deploy site.

Automatic workflow (GitHub Actions):
- A workflow is included: `.github/workflows/netlify-deploy.yml`.
- You must add these repository secrets in GitHub settings:
  - `NETLIFY_AUTH_TOKEN` — your Netlify personal access token.
  - `NETLIFY_SITE_ID` — the site ID from Netlify (only required for CLI deploy).

Local test commands:
```bash
# run the static preview
cd /home/sama/portfolio
python3 -m http.server 8000

# run the React dev server
cd react-portfolio
npm install
npm run dev
```
