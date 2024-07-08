<script setup lang="ts">
import dayjs from 'dayjs';
import { useDealSliderStore } from '#imports';

const store = useDealSliderStore()



</script>

<template>
    <div class="border-border bg-black/20 rounded p-3">
        <div class="uppercase bold text-xl mb-4">О сделке</div>
        <KanbanSlideoverLabel label-text="Nameing">
            <h2>{{ store.card?.name }}</h2>
        </KanbanSlideoverLabel>

        <KanbanSlideoverLabel label-text="Price">
            {{ convertreCurrynce(store.card?.price || 0) }}
        </KanbanSlideoverLabel>
        <KanbanSlideoverLabel label-text="Status">
            <UBadge variant="outline">
                {{ store.card?.status }}
            </UBadge>
        </KanbanSlideoverLabel>
        <KanbanSlideoverLabel label-text="Company Name">
            {{ store.card?.companyName }}
        </KanbanSlideoverLabel>
        <KanbanSlideoverLabel label-text="Date of creation">
            {{ dayjs(store.card?.$createdAt).format('DD MMMM YYYY') }}
        </KanbanSlideoverLabel>



    </div>
</template>