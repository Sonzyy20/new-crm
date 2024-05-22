import { useQuery } from "@tanstack/vue-query"
import { COLLECTION_DEALS, DB_ID } from "~/app.constants"
import { KANBAN_DATA } from "./kanban.data"
import type { ICard } from "./kanban.type"
import type { iDeal } from "~/types/deals.types"

export function useKanbanQuery(){
    
    return useQuery({
        queryKey: ['deals'],
        queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
        select(data) {
            const newBoard = [...KANBAN_DATA]
            const deals = data.documents as unknown as iDeal[]
            
            for(const deal of deals){
                const colunmn = newBoard.find(col => col.id === deal.status)
                if (colunmn) {
                    colunmn.items.push({
                        $createdAt: deal.$createdAt,
                        id: deal.$id,
                        name: deal.name ,
                        price: deal.price ,
                        companyName: deal.cusotomer.name,
                        status: colunmn.name

                    })
                }
            }

            // deals.forEach
            return newBoard
        },
        
    })
}