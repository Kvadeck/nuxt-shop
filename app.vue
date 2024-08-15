<script setup lang="ts">
const router = useRouter()

const nav = [
  {label: 'Home', to: '/'},
  {label: 'Cart', to: '/cart'},
  {label: 'Task', to: '/task'},
]
</script>

<template>
  <Header/>
  <NuxtPage/>
</template>

