import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2, Edit, CalendarDays } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TaskItem({ task, onDelete, onEdit, onStatusChange }) {
  const priorityStyles = {
    High: "bg-red-100 text-red-800 hover:bg-red-200 border-red-200",
    Medium: "bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-200",
    Low: "bg-green-100 text-green-800 hover:bg-green-200 border-green-200",
  };

  const statusColor = {
    Completed: "!bg-green-500 text-white border-green-600",
    "In Progress": "!bg-blue-500 text-white border-blue-600",
    Pending: "!bg-yellow-500 text-white border-yellow-600",
  };

  return (
    <Card className="w-full hover:shadow-md transition-all duration-200">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
        <div className="space-y-1">
          <CardTitle className="text-lg font-semibold leading-none tracking-tight">
            {task.title}
          </CardTitle>
          {task.createdAt && (
            <div className="flex items-center text-xs text-muted-foreground">
              <CalendarDays className="mr-1 h-3 w-3" />
              {new Date(task.createdAt).toLocaleDateString()}
            </div>
          )}
        </div>
        <Badge className={`${priorityStyles[task.priority] || "bg-secondary"} shadow-sm border`}>
          {task.priority}
        </Badge>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="rounded-md bg-muted/30 border p-3 text-sm text-muted-foreground leading-relaxed">
          {task.description || "No description provided."}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center pt-2">
        <Select
          value={task.status}
          onValueChange={(value) => onStatusChange(task.id, value)}
        >
          <SelectTrigger
            className={`w-[140px] h-8 text-xs font-medium shadow-sm border ${
              statusColor[task.status] || "bg-secondary"
            }`}
          >
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="In Progress">In Progress</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => onEdit(task)}
          >
            <Edit className="h-4 w-4" />
          </Button>

          <Button
            variant="destructive"
            size="icon"
            className="h-8 w-8 bg-red-500 hover:bg-red-600 text-white"
            onClick={() => onDelete(task.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}