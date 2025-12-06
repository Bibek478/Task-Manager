import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2, Edit } from "lucide-react"; 

export default function TaskItem({ task, onDelete, onEdit }) {
  const priorityColor = {
    High: "destructive",
    Medium: "default",
    Low: "secondary",
  };

  const statusColor = {
    Completed: "bg-green-500 hover:bg-green-600",
    "In Progress": "bg-blue-500 hover:bg-blue-600",
    Pending: "bg-yellow-500 hover:bg-yellow-600",
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">{task.title}</CardTitle>
        <Badge variant={priorityColor[task.priority]}>{task.priority}</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{task.description}</p>
        <div className="flex gap-2">
          <Badge className={statusColor[task.status] || "secondary"}>
            {task.status}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button 
            variant="outline" 
            size="icon" 
            onClick={() => onEdit(task)}
        >
          <Edit className="h-4 w-4" />
        </Button>
        
        <Button 
            variant="destructive" 
            size="icon" 
            onClick={() => onDelete(task.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}