import { COLLECTION_DEALS, DB_ID } from '~/app.constants';
import { useQuery } from "@tanstack/vue-query";




export function useComments() {
    const store =  useDealSliderStore()
    const cardId = store.card?.id || ''

    return useQuery({
        queryKey: ['deal', cardId],
        queryFn: () => DB.getDocument(DB_ID, COLLECTION_DEALS, cardId),
    })

}