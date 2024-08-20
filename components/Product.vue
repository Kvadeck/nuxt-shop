<script setup lang="ts">
import {useProduct} from '~/composables/useProduct';
import type {Product} from "~/types/product";
import type {Ref} from "vue";
import {useCartStore} from "@/stores/cart";

const store: Ref = ref(() => {})

// LocalStorage used only in onMounted hook
onMounted(() => {
  store.value = useCartStore()
})

const {product, error} = useProduct();
const quantity: Ref = ref(1);

function addProductToCart() {
  const cartItem: Product = {
    id: product.value.id,
    name: product.value.name,
    description: product.value.description,
    color: product.value.color,
    price: product.value.price,
    imageSrc: product.value.imageSrc,
    imageAlt: product.value.imageAlt,
    smell: product.value.smell,
    quantity: quantity.value,
    thickness: product.value.thickness,
  };
  store.value.addToCart(cartItem)
}

</script>

<template>
  <div class="container mx-auto px-4">
    <div>
      <div v-if="product && Object.keys(product).length > 0">

        <div class="grid items-center lg:grid-cols-2 mt-6 mx-auto">
          <!-- Image -->
          <div class="overflow-hidden">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="object-center object-cover xl:w-9/12"/>
          </div>
          <div class="mb-6">
            <!-- Product name -->
            <h1 class="font-bold mb-3 sm:text-3xl text-2xl text-gray-900">{{ product.name }}</h1>
            <!-- Description -->
            <div class="mb-4">
              <h3 class="sr-only">Описание</h3>
              <p class="text-base text-gray-900">{{ product.description }}</p>
            </div>
            <!-- Product info -->
            <h2 class="sr-only">Информация о продукте</h2>
            <p class="text-2xl text-gray-900 mb-4">Цена: {{ product.price }}&nbsp;₽</p>
            <div>
              <h3 class="text-sm font-medium text-gray-900">Цвет:&nbsp;{{ product.color }}</h3>
              <h3 class="text-sm font-medium text-gray-900">Запах:&nbsp;{{ product.smell }}</h3>
              <h3 class="text-sm font-medium text-gray-900">Плотность:&nbsp;{{ product.thickness }}</h3>
            </div>
            <button @click.prevent="addProductToCart" type="button"
                    class="bg-indigo-600 border border-transparent font-medium hover:bg-indigo-700 items-center justify-center mt-6 px-6 py-3 rounded-md text-base text-white">
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
      <div v-else-if="error">Something goes wrong: {{ error }}</div>
    </div>
  </div>

</template>