# blcklst-to-dck

## Overview
**blcklst-to-dck** is a Next.js 14 application that pairs the App Router with a modern component toolkit to deliver a responsive, accessible UI for browsing curated content. The project is optimized for local development with pnpm and is intended to be deployed on Vercel for best results.

## Prerequisites
Before cloning the repository ensure you have the following installed:

- **Node.js** 18.x or newer (Next.js 14 requires the active LTS release).
- **pnpm** 8.x or newer (used for dependency management and scripts).
- **Git** for version control.
- Optional: **Vercel CLI** if you plan to manage deployments from the command line.

You can verify versions with `node -v`, `pnpm -v`, and `git --version`.

## Installation & Local Development
1. Clone the repository: `git clone <repo-url>`.
2. Change into the project directory: `cd blcklst-to-dck`.
3. Install dependencies: `pnpm install`.
4. Start the development server: `pnpm dev`.
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app. Hot reloading is enabled by default.

### Environment Variables
Create a `.env.local` file based on any examples provided (for example `.env.example`) and populate it with the required keys. Environment variables are automatically loaded by Next.js when the server starts.

## Available Scripts
The `package.json` scripts leverage pnpm. Run them with `pnpm <script-name>`.

| Script | Description |
| --- | --- |
| `dev` | Starts the Next.js development server with hot reloading. |
| `build` | Creates an optimized production build. |
| `start` | Launches the production server (after running `pnpm build`). |
| `lint` | Runs ESLint using the repository configuration. |
| `test` | Executes the unit/integration test suite if defined. |
| `format` | Applies project formatting conventions (Prettier/Tailwind plugins). |

> **Tip:** Use `pnpm run <script>` if you prefer the `run` syntax.

## Tech Stack
- **Next.js 14** with the App Router, Server Components, and Server Actions.
- **TypeScript** for type-safe development.
- **Tailwind CSS** for utility-first styling.
- **shadcn/ui** for accessible, themeable UI primitives built on Radix UI.
- **Lucide Icons** and **Tailwind Typography** (commonly used alongside shadcn/ui components).
- **ESLint** and **Prettier** (with Tailwind class sorting) for static analysis and formatting.

## Project Structure
Although Next.js encourages a modular structure, the core directories typically follow the outline below:

```
├── app/                  # App Router entry points (layouts, pages, server actions)
│   ├── (marketing)/      # Route groups for marketing pages
│   ├── (dashboard)/      # Route groups for authenticated experiences
│   ├── api/              # Route handlers (Edge/Node functions)
│   ├── globals.css       # Global styles (imports Tailwind layers)
│   └── layout.tsx        # Root layout configuration
├── components/
│   ├── ui/               # shadcn/ui wrapped primitives and shared UI pieces
│   └── features/         # Feature-specific components and hooks
├── lib/                  # Utilities (client/server helpers, fetchers, constants)
├── data/
│   └── mock/             # JSON/TS mock data sources for development
├── public/               # Static assets served as-is
├── styles/               # Additional CSS modules or Tailwind configs
├── tests/                # Unit/integration tests (Vitest/Jest/Playwright)
├── package.json
└── pnpm-lock.yaml
```

> Adjust route groups and directories as the domain evolves. The App Router enables colocation of data fetching and UI; keep server-only logic in `app/` or `lib/server` to avoid bundling it client-side.

## Mock Data Usage
Mock data lives under `data/mock` and is typically consumed during early development or when backend integrations are unavailable. Utilities in `lib/` read these files and expose them via hooks or server actions. Replace mock sources with API calls as production endpoints stabilize. When introducing new mock data, prefer TypeScript modules exporting typed objects so they can be validated at compile time.

## Development Conventions & Tips
- **Type Safety:** Keep TypeScript strict mode enabled; define shared interfaces in `lib/types` and reuse them across components, mocks, and API handlers.
- **Component Patterns:** Prefer shadcn/ui primitives wrapped in the `components/ui` directory. Extend via composition rather than modifying the underlying library directly.
- **Styling:** Use Tailwind utility classes. For complex styles, create dedicated components instead of long class chains. Maintain logical ordering assisted by the Tailwind Prettier plugin.
- **State Management:** Lean on React Server Components and fetch data at the route level. For client-side state (forms, local UI), use React hooks; introduce external state libraries only when necessary.
- **Linting & Formatting:** Run `pnpm lint` and `pnpm format` before committing. Continuous integration is expected to block merges on lint errors.
- **Git Workflow:** Keep feature branches focused; prefer small, reviewable commits with descriptive messages.

## Testing
Testing utilities (e.g., Vitest or Jest) live in `tests/` with component-level helpers under `components/__tests__`. Add fixtures that mirror the shape of mock data to ensure smooth transitions from mocked to real APIs.

## Deployment
The project is optimized for Vercel. Push your changes to the main branch (or open a pull request) and connect the repository to a Vercel project. Vercel automatically builds using `pnpm install`, `pnpm build`, and serves the production bundle. Configure environment variables via the Vercel dashboard. For local previews, use `vercel dev` after installing the Vercel CLI.

## Additional Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [pnpm Documentation](https://pnpm.io)
