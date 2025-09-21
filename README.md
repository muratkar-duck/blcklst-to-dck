# Writer Dashboard Scaffold

A text-only Next.js 14 dashboard scaffold for writers to manage hosted projects, evaluations, and community programs. The layout uses the App Router, Tailwind CSS, and shadcn/ui primitives while keeping all assets inline as SVG.

## Quick start

```bash
pnpm install
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the dashboard shell.

## Tech stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS with custom brand palette
- shadcn/ui components (button, tabs, checkbox) + Radix UI primitives
- lucide-react icons and sonner toasts
- ESLint & Prettier for linting/formatting

## Available routes

- `/` - My Dashboard overview
- `/my-projects`
- `/add-project`
- `/profile`
- `/top-lists`
- `/featured-projects`
- `/my-programs`
- `/search-projects`
- `/search-writers`
- `/buy-evaluations`

Each route is grouped under `app/(dashboard)` and rendered inside the shared sidebar/top-bar layout.

## No-binary policy

This repo intentionally contains **no binary assets**. All visuals (including the duck illustration, avatars, and posters) are inline SVG in React components. Avoid adding files such as images, fonts, archives, or media. The `.gitignore` and `.gitattributes` files reinforce this constraint.

## Deploying

The project is ready for deployment to platforms like Vercel. Run `pnpm build` to generate a production build before deploying. Ensure environment variables (if any are added in the future) are configured in your hosting provider.
