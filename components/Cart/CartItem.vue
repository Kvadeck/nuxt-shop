<script setup lang="ts">
import type { Product } from '~/types/product'
import Confirm from '~/components/UI/Modal/Confirm.vue'

export interface CartItemProps {
  product: Product
  removeFromCart: (id: number) => void
}

const props = defineProps<CartItemProps>()

const isModalOpen = ref(false)

function removeProductHandler(value: boolean) {
  if (value) {
    props.removeFromCart(props.product.id)
  }
  isModalOpen.value = false
}

function showConfirmDialog() {
  isModalOpen.value = true
}
function closeModal() {
  isModalOpen.value = false
}
</script>

<template>
  <Confirm :is-opened="isModalOpen" @result="removeProductHandler" @close-modal="closeModal" />
  <li class="flex py-6">
    <NuxtLink :to="`/products/${product.id}`">
      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          :src="product.imageSrc" :alt="product.imageAlt"
          class="h-full w-full object-cover object-center"
        >
      </div>
    </NuxtLink>
    <div class="ml-4 flex flex-1 flex-col">
      <div>
        <div class="flex justify-between text-base font-medium text-gray-900">
          <h3>{{ product.name }}</h3>
          <p class="ml-4">
            {{ product.price }}&nbsp;₽
          </p>
        </div>
        <p class="mt-1 text-sm text-gray-500">
          <span class="block">Цвет: {{ product.color }}</span>
          <span class="block">Запах : {{ product.smell }}</span>
          <span class="block">Толщина: {{ product.thickness }}</span>
        </p>
      </div>
      <div class="flex flex-1 items-end justify-between text-sm mt-2">
        <p class="text-gray-500">
          Количество: <span class="font-semibold">{{ product.quantity }}</span>
        </p>

        <div class="flex">
          <button
            type="button" class="font-medium text-indigo-600 hover:text-indigo-500"
            @click="showConfirmDialog"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  </li>
</template>
