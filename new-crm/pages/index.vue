<script setup lang="ts">
import type { IColumn, ICard } from '~/components/kanban/kanban.type';
import { useKanbanQuery } from '~/components/kanban/useKanbanQuery';

useSeoMeta({
    title: 'Home | CRM system '
})

const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)

const {data, isLoading, refetch} = useKanbanQuery()
        
watchEffect(()=> {
    console.log('Data:', data.value)
})

</script>
<template>
    <div class="p-10">
        <h1 class="font-bold text-2x1 mb-10">CRM System</h1>
        <div v-if="isLoading">Loading ...</div>
        <div v-else>
            <div class="grid grid-cols-5 gap-16">
                <div v-for="(column) in data" :key="column.id">                   
                    <div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center">
                        {{ column.name }}
                    </div>
                    <div>
                        <UiCard class="mb-3" draggable="ture">
                            <UiCardHeader role="button"> Name Card</UiCardHeader>
                            <UiCardContent>Company</UiCardContent>
                            <UiCardFooter>Date</UiCardFooter>
                            
                        </UiCard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>