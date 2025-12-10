# Task Manager (React + Vite)

A small task management UI built with React and Vite. Uses Tailwind CSS, Radix UI primitives, and a set of lightweight UI components. Tasks are persisted to localStorage so you can add, edit, delete and filter tasks without a backend.

Quick features

- Create, edit and delete tasks
- Filter by priority and status, and search by title
- Simple pagination and progress tracking
- Local state persisted to localStorage
- Built with Vite, React, Tailwind, Radix primitives, and shadcn-style components

Prerequisites

- Node.js 18+ (recommended)
- npm (or yarn/pnpm)

Getting started

1. Install dependencies

   ```bash
   npm install
   ```

2. Run development server

   ```bash
   npm run dev
   ```

   Open http://localhost:5173 (or the port printed by Vite)

3. Build for production

   ```bash
   npm run build
   ```

4. Preview production build locally

   ```bash
   npm run preview
   ```

Available scripts

- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — preview the built app
- `npm run lint` — run ESLint

Project notes

- Styling: Tailwind CSS is used (tailwind v4). The project uses CSS variables declared in `src/App.css`.
- Components: UI primitives live under `src/components/ui` (input, select, button, dialog, etc.). App-level components are in `src/components` (TaskItem, TaskForm, TaskControls, Pagination, ProgressTracker).
- Persistence: Tasks are stored in browser localStorage under the "tasks" key. If localStorage data is corrupt, the app will reset that key.
- Pagination: itemsPerPage is 5 by default in `App.jsx`.
- Icons: Lucide icons are used.

Troubleshooting

- If styles don't apply, ensure Tailwind is set up and PostCSS is configured. Restart dev server after changing tailwind config or CSS entry files.
- If the app fails to load on first run, check the console for errors about missing packages; run `npm install` again.
- If localStorage contains invalid JSON, delete the "tasks" key via browser devtools Application → Local Storage.

Where to look in the code

- Entry: `src/main.jsx`
- App shell & logic: `src/App.jsx`
- UI components: `src/components/ui/*`
- App components: `src/components/*.jsx`
- Tailwind / theme variables: `src/App.css` and `src/index.css`

License

This repository contains example/demo code; add a license if you plan to publish.
