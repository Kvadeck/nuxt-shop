<script setup lang="ts">

interface Props {
  id: number;
  name: string;
  color: string;
  price: number;
  imageSrc: string;
  imageAlt?: string;
}

const props = defineProps<Props>();

</script>

<template>
  <div class="group relative">
    <div
        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <img :src="props.imageSrc" :alt="props.imageAlt"
           class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <a href="#">
            <span aria-hidden="true" class="absolute inset-0"/>
            {{ props.name }}
          </a>
        </h3>
        <p class="mt-1 text-sm text-gray-500">{{ props.color }}</p>
      </div>
      <p class="text-sm font-medium text-gray-900">{{ props.price }}&nbsp;₽</p>
    </div>
  </div>
</template>

<style scoped>

</style>