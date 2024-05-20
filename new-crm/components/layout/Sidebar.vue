<script lang="ts" setup>
import { useAuthStore, useLoadingStore } from '#imports';

const store = useAuthStore()
const router = useRouter()
const loadingStore = useLoadingStore()
const logout = async() => {
loadingStore.set(true)
  await account.deleteSession('current')
  store.clear()
  await router.push('/login')
  loadingStore.set(true)

}
</script>

<!--TODO: Autch-->

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 block">
        <NuxtImg class="mx-auto" src="/logo.svg" alt="" width="140px" />
    </NuxtLink>
   <button @click="logout" class="absolute top-2 right-3 transition-colors hover:text-purple-400" >
    <Icon name="line-md:logout" size="20" />
   </button>
   <LayoutMenu />
  </aside>
</template>

