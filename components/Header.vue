<script setup lang="ts">

</script>

<template>
  <header>
    <nav class="bg-green-600 py-2.5">
      <div class="container hidden sm:flex justify-between mx-auto px-4">
        <NuxtLink to="/" class="flex items-center">
            <span
                class="text-xl font-semibold whitespace-nowrap text-white hover:text-amber-400">Деревья</span>
        </NuxtLink>
        <NuxtLink to="/cart" class="flex items-center">
          <span class="text-xl font-semibold whitespace-nowrap text-white hover:text-amber-400">Корзина (0)</span>
        </NuxtLink>
        <NuxtLink to="/task" class="block font-semibold hover:text-amber-400 text-white text-xl">
          Задача
        </NuxtLink>
      </div>
      <div class="sm:hidden flex flex-col px-4">
        <NuxtLink to="/" class="flex items-center">
          <span class="text-xl font-semibold whitespace-nowrap text-white hover:text-amber-400">Деревья</span>
        </NuxtLink>
        <NuxtLink to="/cart" class="flex items-center">
          <span class="text-xl font-semibold whitespace-nowrap text-white hover:text-amber-400">Корзина</span>
        </NuxtLink>
        <NuxtLink to="/task" class="block font-semibold hover:text-amber-400 text-white text-xl">
          Задача
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>