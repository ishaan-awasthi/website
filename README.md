# Personal website

Built with Next.js App Router, React, and Tailwind CSS.

## Local development

Use Node.js 22.13 or newer and run:

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Production and checks

```sh
npm run build
npm start
```

`npm run build` creates the standard `.next` output. `npm test` builds the app
and checks its production server, routes, and assets. `npm run typecheck` checks
TypeScript, and `npm run lint` runs ESLint.

## Vercel

Use the **Next.js** framework preset with the default build command
(`npm run build`) and output directory (`.next`). No custom adapter, output
override, or Cloudflare bindings are required.
