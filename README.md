# prady029.github.io

Personal portfolio website for **Pradyumna Kumar Sahoo**.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- GitHub Pages (static export)

## Local Development

1. Install dependencies:
	- `npm install`
2. Start dev server:
	- `npm run dev`
3. Open:
	- `http://localhost:3000`

## Production Build

- Build static export: `npm run build`
- Exported output is generated in `out/`

## Deployment

Deployment is automated with GitHub Actions using:

- [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

On every push to `main`, the workflow:

1. Installs dependencies
2. Builds the Next.js site
3. Exports static files
4. Publishes to `gh-pages`

GitHub Pages must be configured to serve from:

- Branch: `gh-pages`
- Folder: `/ (root)`

## Notes

- Legacy Gitfolio/static files are still present in the repository for reference.
- Active site source is the Next.js app under [app](app), [components](components), and [data](data).
