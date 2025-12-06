# React Task Manager - Planning Document

## 1. Project Objective
Develop a functional Task Manager application using React. The application will allow users to create, view, update, delete, and filter tasks. It aims to demonstrate proficiency in React state management, component composition, and modern UI styling with Tailwind CSS and shadcn/ui.

## 2. Tech Stack
*   **Framework**: React (Vite, JSX)
*   **Styling**: Tailwind CSS
*   **UI Library**: shadcn/ui
*   **Icons**: Lucide React
*   **Package Manager**: npm

## 3. Requirements Breakdown
*   **Task Creation**: Input form to add new tasks with title, description, priority, and status.
*   **Task Listing**: Display tasks in a list or grid format.
*   **Pagination**: Limit the number of tasks displayed per page (e.g., 5 tasks) with Next/Previous controls.
*   **Filtering**: Filter tasks by priority (High, Medium, Low) and status (Completed, Pending, In Progress).
*   **Progress Tracker**: Visual indicator of completion percentage.
*   **Task Management**: Ability to delete tasks and edit details.
*   **Local Persistence**: Save tasks to localStorage.
*   **Search**: Filter tasks by title.

## 4. Component Hierarchy
*   `App` (Main container, holds global state)
    *   `Header` (Title and ProgressTracker)
    *   `ProgressTracker` (Visual stats)
    *   `TaskControls` (Wrapper for Search and Filters)
        *   `SearchBar`
        *   `FilterBar`
        *   `AddTaskButton`
    *   `TaskForm` (Modal/Inline form for Create/Edit)
    *   `TaskList` (Iterates over visible tasks)
        *   `TaskItem` (Individual task display, delete/edit actions)
    *   `Pagination` (Page navigation controls)

## 5. Data Structure
```javascript
/**
 * Represents a single task in the system.
 * @typedef {Object} Task
 * @property {string} id - Unique identifier (UUID/Timestamp)
 * @property {string} title - Task headline
 * @property {string} [description] - Optional details
 * @property {'High' | 'Medium' | 'Low'} priority - Task priority
 * @property {'Pending' | 'In Progress' | 'Completed'} status - Current status
 * @property {number} createdAt - Timestamp for sorting
 */
```

## 6. State Management
*   **`allTasks`**: The master list of all tasks (initialized from localStorage).
*   **`searchQuery`**: String state for text search.
*   **`filters`**: State object `{ priority: string, status: string }`.
*   **`currentPage`**: Number state for pagination.
*   **Derived State**: `filteredTasks` (search + filter applied), `visibleTasks` (pagination applied to filtered).

## 7. Step-by-Step Implementation Plan

### Phase 1: Setup
Initialize the project and configure the environment.

**PowerShell Commands:**
```powershell
# 1. Create Vite Project (React)
npm create vite@latest . -- --template react

# 2. Install Dependencies
npm install
npm install -D tailwindcss postcss autoprefixer
npm install -D @types/node

# 3. Initialize Tailwind CSS
npx tailwindcss init -p
# (Manual: Rename tailwind.config.js to .cjs)

# 4. Configure Path Aliases
# (Manual: Create jsconfig.json, Update vite.config.js)

# 5. Initialize shadcn/ui
npx shadcn@latest init

# 6. Install Components & Icons
npx shadcn@latest add button input card select badge label dialog
npm install lucide-react
```

### Phase 2: Core Structure
1.  Clean up default Vite boilerplate.
2.  Create `Task` data structure and mock data.
3.  Implement `TaskForm` component.
4.  Implement `TaskList` and `TaskItem`.
5.  Establish `App` state and `localStorage` sync.

### Phase 3: Features
1.  **Create**: Connect `TaskForm` to `App` state.
2.  **Delete**: Add delete handler.
3.  **Filters & Search**: Implement `TaskControls` and derived state logic.
4.  **Pagination**: Implement `Pagination` component and slicing logic.
5.  **Progress**: Implement `ProgressTracker`.
6.  **Edit**: Reuse `TaskForm` for editing.
