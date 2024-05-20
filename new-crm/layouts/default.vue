<script lang="ts" setup>
import {account} from '@/utils/appwrite'
import {useAuthStore, useLoadingStore} from'~/store/auth.store'
console.log("loaded")

const loadingStore = useLoadingStore()
const store = useAuthStore()
const router = useRouter()

onMounted(async()=>{
    try{
        const user = await account.get()
        if(user) store.set(user)
    }catch (error){
        router.push('/login')
    }finally{
        loadingStore.set(false)
        
    }
})


</script>

<template>
    <LayoutLoader v-if="loadingStore.isLoading" />
<section v-else :class="{grid: store.isAuth }" style="min-height: 100vh;">
    <LayoutSidebar v-if="store.isAuth" />
    <div>
        <slot />
    </div>
</section>
</template>

<style scoped>
.grid{
    display: grid;
grid-template-columns: 1fr 6fr;
}
</style>