<script setup lang="ts">
       useHead({
        title: 'Login'
       }) 

       const emailRef = ref('');
       const passwordRef = ref('');
       const nameRef = ref('');
</script>
<template>
    <div class="flex items-center justify-center min-h-screen
    w-full">
        <div class="rounded bg-sidebar w-1/4 p-5">
            <h1 class="text-2xl font-bold text-center mb-5">Login</h1>

            <form>
                <UiInput placeholder="Email" type="email" class="mb-3"
                v-model="emailRef" />
                <UiInput placeholder="Passwprd" type="password" class="mb-3"
                v-model="emailRef" />
                <UiInput placeholder="Name" type="name" class="mb-3"
                v-model="emailRef" />
                <div class="flex items-center justify-center gap-5">
                    <UiButton  type="buttons">Login</UiButton>
                    <UiButton type="buttons">Register</UiButton>
                </div>
            </form>
        </div>
    </div>
</template>


