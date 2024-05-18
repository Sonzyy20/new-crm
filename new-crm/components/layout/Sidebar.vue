<script lang="ts" setup>

</script>

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 block">
        <NuxtImg class="mx-auto" src="/logo.svg" alt="" width="100px" />
    </NuxtLink>
   <button class="absolute top-2 right-3 transition-colors hover:text-purple-400" >
    <Icon name="line-md:logout" size="22px" />
   </button>
  </aside>
</template>

