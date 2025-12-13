# Task Manager - React + Vite

A modern, feature-rich task management application built with React and Vite. Manage your tasks efficiently with filtering, pagination, progress tracking, and persistent storage.

## Features

- **Add & Edit Tasks**: Create tasks with title, description, priority, and status
- **Search & Filter**: Find tasks by title, priority level, and status
- **Pagination**: Browse tasks with 5 tasks per page
- **Progress Tracking**: Visual progress bar showing completion percentage
- **Persistent Storage**: Tasks saved to localStorage automatically
- **Responsive Design**: Clean, light-mode UI with smooth interactions
- **Edit Modal**: Update tasks with a dedicated modal interface

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Installation

1. **Clone or navigate to the project directory**

   ```bash
   cd task-manager-HVA
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   This will install key packages used by the project (listed below).

## Usage

### Development Mode

```bash
npm run dev
```

Opens the app at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── TaskForm.jsx          # Create / edit task modal
│   ├── TaskItem.jsx          # Individual task card
│   ├── TaskControls.jsx      # Search & filter controls
│   ├── ProgressTracker.jsx   # Progress visualization
│   ├── Pagination.jsx        # Page navigation
│   └── ui/                   # Reusable UI primitives from Shadcn (button, input, select, dialog, etc.)
├── App.jsx                   # Main app component (state, persistence, composition)
├── main.jsx                  # React entry point
├── App.css                   # Theme variables & component styles
└── index.css                 # Tailwind base imports
```

## Technologies Used

- **React 19** - Component-based UI
- **Vite** - Fast build tool with HMR
- **Tailwind CSS** - Styling
- **localStorage** - Client-side persistent storage

## Features Explained

- **Add Task** — Enter title, description, set priority (Low/Medium/High) and status (Pending/In Progress/Completed)
- **Search** — Real-time search by task title
- **Filters** — Filter by priority level or task status
- **Edit** — Click "Edit" on a task card to modify it via modal
- **Delete** — Remove tasks with a delete button (confirmation)
- **Progress** — Visual progress bar summarizes completed tasks
- **Pagination** — 5 tasks per page with Prev/Next navigation
- **Persistence** — All tasks auto-saved to browser localStorage

## Development Notes

- Tasks persist in localStorage under the "tasks" key.
- IDs are generated with crypto.randomUUID().
- Filtering and pagination work together; changing filters resets to page 1.
- Modal prevents background interaction while editing/creating tasks.
- Change items-per-page in App.jsx if you want a different pagination size.
