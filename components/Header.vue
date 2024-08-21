<script setup lang="ts">
import {useCartStore} from "@/stores/cart";
import type {Ref} from "vue";

const store: Ref = ref(() => {
})

onMounted(() => {
  store.value = useCartStore()
})

</script>

<template>
  <header>
    <nav class="bg-green-600 py-2.5">
      <div class="container hidden sm:flex justify-between mx-auto px-4">
        <NuxtLink to="/" class="flex items-center">
            <span
                class="text-xl font-semibold whitespace-nowrap text-white hover:text-amber-400">Зелёный Маркет</span>
        </NuxtLink>
        <NuxtLink to="/cart" class="flex items-center">
          <span class="flex font-semibold hover:text-amber-400 text-white text-xl whitespace-nowrap">Корзина
            ({{ store.totalItems }})
            <span v-if="store.hasItems" class="relative flex h-1.5 w-1.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            </span>
          </span>
        </NuxtLink>
        <NuxtLink to="/task" class="block font-semibold hover:text-amber-400 text-white text-xl">
          Задание
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
          Задание
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>