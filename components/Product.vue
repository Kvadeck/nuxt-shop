<script setup lang="ts">
import type { Ref } from 'vue'
import { useProduct } from '~/composables/useProduct'
import { useCartStore } from '@/stores/cart'
import type { Product } from '~/types/product'

const store: Ref = ref(null)

onMounted(() => {
  store.value = useCartStore()
})

const { product, error, getProduct } = useProduct()

await getProduct()

const quantity = ref(1)

function addProductToCart() {
  if (product.value) {
    product.value.quantity = quantity.value

    const cartItem: Product = {
      ...product.value,
    }
    store.value.addToCart(cartItem)
  }
}
</script>

<template>
  <div class="container mx-auto px-4">
    <div>
      <div v-if="product">
        <div class="grid items-center lg:grid-cols-2 mt-6 mx-auto">
          <!-- Image -->
          <div class="overflow-hidden">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="object-center object-cover xl:w-9/12">
          </div>
          <div class="mb-6">
            <!-- Product name -->
            <h1 class="font-bold mb-3 sm:text-3xl text-2xl text-gray-900">
              {{ product.name }}
            </h1>
            <!-- Description -->
            <div class="mb-4">
              <h3 class="sr-only">
                Описание
              </h3>
              <p class="text-base text-gray-900">
                {{ product.description }}
              </p>
            </div>
            <!-- Product info -->
            <h2 class="sr-only">
              Информация о продукте
            </h2>
            <p class="text-2xl text-gray-900 mb-4">
              Цена: {{ product.price }}&nbsp;₽
            </p>
            <div>
              <h3 class="text-sm font-medium text-gray-900">
                Цвет:&nbsp;{{ product.color }}
              </h3>
              <h3 class="text-sm font-medium text-gray-900">
                Запах:&nbsp;{{ product.smell }}
              </h3>
              <h3 class="text-sm font-medium text-gray-900">
                Плотность:&nbsp;{{ product.thickness }}
              </h3>
            </div>
            <button
              type="button"
              class="bg-indigo-600 border border-transparent font-medium hover:bg-indigo-700 items-center justify-center mt-6 px-6 py-3 rounded-md text-base text-white"
              @click.prevent="addProductToCart"
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
      <div v-else-if="error">
        Something goes wrong: {{ error }}
      </div>
      <div v-else class="container mx-auto px-4 flex items-center justify-center mt-10 text-2xl">
        Такой продукт не найден...
      </div>
    </div>
  </div>
</template>
