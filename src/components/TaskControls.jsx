import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export default function TaskControls({searchQuery, setSearchQuery, FilterPriority, setFilterPriority, filterStatus, setFilterStatus}){
    return(
        <div className="flex flex-col md:flex-row gap-4 mb-6">
            <Input placeholder="Search Task" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
            className="md:w-1/3"/>
            <Select value={FilterPriority} onValueChange={setFilterPriority}>
                <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filter by Priority"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="All">All Priorities</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
            </Select>

            <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filter by Status"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="All">All Statuses</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}