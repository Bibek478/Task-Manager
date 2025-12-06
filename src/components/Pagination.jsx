import {Button} from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Pagination({currentPage, totalPages, onPageChange}){
    return(
        <div className="flex items-center justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={()=> onPageChange(currentPage-1)} disabled={currentPage==1}>
                <ChevronLeft className="h-4 w-4"/>
            </Button>
            <span className="text-sm text-muted-foreground">page{currentPage} of {totalPages}</span>
            <Button variant="outline" size="icon" onClick={()=>onPageChange(currentPage+1)}
            disabled={currentPage==totalPages}>
                <ChevronRight className="h-4 w-4/>"/>
            </Button>
        </div>
    );
}