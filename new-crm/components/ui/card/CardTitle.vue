<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <h3
    :class="
      cn('text-tl font-semibold leading-none tracking-tighter', props.class)
    "
  >
    <slot />
  </h3>
</template>
