import type { ICard } from "~/components/kanban/kanban.type";

const defaultValue: {card: ICard | null; isOpen: boolean} = {
    card: null,
    isOpen: false,
}

export const useDealSliderStore = defineStore('deal-slide', {
    state: () => defaultValue,
    actions: {
        clear() {
            this.$patch(defaultValue)
        },

        set(card:ICard) {
            this.$patch({card, isOpen: true})
        },

        toggle() {
            this.isOpen = !this.isOpen
        }


    }
})