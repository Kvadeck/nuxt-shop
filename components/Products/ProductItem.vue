<script setup lang="ts">
import type { Product } from '~/types/product'

const props = defineProps<Product>()
</script>

<template>
  <div class="group relative">
    <div
      class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
    >
      <img
        :src="props.imageSrc" :alt="props.imageAlt"
        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
      >
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <NuxtLink :to="`/products/${props.id}`">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ props.name }}
          </NuxtLink>
        </h3>
        <p class="flex-col mt-1 text-sm text-gray-500">
          <span class="block">Цвет: {{ props.color }}</span>
          <span class="block">Запах : {{ props.smell }}</span>
          <span class="block">Толщина: {{ props.thickness }}</span>
        </p>
      </div>
      <p class="text-sm font-medium text-gray-900">
        {{ props.price }}&nbsp;₽
      </p>
    </div>
  </div>
</template>
