import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import TaskItem from "@/components/TaskItem";
import TaskForm from "@/components/TaskForm";
import TaskControls from "@/components/TaskControls";
import Pagination from "@/components/Pagination";
import ProgressTracker from "@/components/ProgressTracker";

const defaultTasks = [
  {
    id: "1",
    title: "Project Setup",
    description: "Initialize Vite project and install dependencies",
    priority: "High",
    status: "Completed",
    createdAt: Date.now(),
  },
  {
    id: "2",
    title: "Implement UI Components",
    description: "Build TaskItem and TaskForm using shadcn/ui",
    priority: "Medium",
    status: "In Progress",
    createdAt: Date.now(),
  },
];

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : defaultTasks;
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [filterPriority, setFilterPriority] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const itemsPerPage = 5;

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesPriority =
      filterPriority === "All" || task.priority === filterPriority;
    const matchesStatus =
      filterStatus === "All" || task.status === filterStatus;
    return matchesSearch && matchesPriority && matchesStatus;
  });

  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleTasks = filteredTasks.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filterPriority, filterStatus]);

  const handleSaveTask = (taskData) => {
    if (editingTask) {
      setTasks(tasks.map((t) => (t.id === taskData.id ? taskData : t)));
    } else {
      setTasks([taskData, ...tasks]);
    }
    setIsFormOpen(false);
    setEditingTask(null);
  };

  const handleDeleteTask = (id) => {
    if (confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((t) => t.id !== id));
      if (visibleTasks.length === 1 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  const handleEditClick = (task) => {
    setEditingTask(task);
    setIsFormOpen(true);
  };

  const handleAddNewClick = () => {
    setEditingTask(null);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-foreground">Task Manager</h1>
        <Button onClick={handleAddNewClick}>
          <Plus className="mr-2 h-4 w-4" /> Add Task
        </Button>
      </div>

      <ProgressTracker tasks={tasks} />

      <TaskControls
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        FilterPriority={filterPriority} 
      />

      <div className="space-y-4">
        {visibleTasks.length > 0 ? (
          visibleTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDeleteTask}
              onEdit={handleEditClick}
            />
          ))
        ) : (
          <div className="text-center py-10 text-muted-foreground border rounded-lg border-dashed">
            No tasks found matching your criteria.
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      <TaskForm
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingTask(null);
        }}
        onSave={handleSaveTask}
        initialData={editingTask}
      />
    </div>
  );
}
