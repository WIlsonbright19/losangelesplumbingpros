# Los Angeles Plumbing Pros

A responsive plumbing services website built with React, TypeScript, and Vite.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Build and deploy

Create the production site with:

```sh
npm run build
```

Deploy the generated `dist` directory to a static web host. Netlify is configured
to run the build and publish `dist` automatically. For another provider, select
`npm run build` as the build command and `dist` as the publish directory.

The Vite build bundles the site's photos and fonts locally and uses relative
asset paths, so it can also be served from a subdirectory. Configure a history
fallback to `index.html` if the host is set up to serve client-side routes.

The quote form currently validates in the browser and displays a confirmation;
connect a form provider or backend before relying on it to deliver customer
requests.
