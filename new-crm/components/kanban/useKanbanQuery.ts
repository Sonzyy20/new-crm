import { useQuery } from "@tanstack/vue-query"
import { COLLECTION_DEALS, DB_ID } from "~/app.constants"
import { KANBAN_DATA } from "./kanban.data"
import type { ICard } from "./kanban.type"
import type {IColumn} from "./kanban.type"
import type { IDeal } from "~/types/deals.types"

export function useKanbanQuery(){
    
    return useQuery({
        queryKey: ['deals'],
        queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
        select(data) {
            const newBoard: IColumn[] = KANBAN_DATA.map(column => ({
				...column,
				items: [],
            }))
            const deals = data.documents as unknown as IDeal[]
            
            for(const deal of deals){
                const colunmn = newBoard.find(col => col.id === deal.status)
                if (colunmn) {
                    colunmn.items.push({
                        $createdAt: deal.$createAt,
                        id: deal.$id,
                        name: deal.name ,
                        price: deal.price ,
                        companyName: deal.customer.name,
                        status: colunmn.name

                    })
                }
            }

            // deals.forEach
            return newBoard
        },
        
    })
}