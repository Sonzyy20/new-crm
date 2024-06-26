<script setup lang="ts">
import { useDealSliderStore } from '~/store/deal-slide.store';
const store = useDealSliderStore()

const isLocalOpen = computed({
    get: () => store.isOpen,
    set: value => {
        store.isOpen = value;
    }
})


</script>

<template>
    <div>
        
    </div>
</template>