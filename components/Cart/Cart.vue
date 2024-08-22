<script setup lang="ts">
import type { Ref } from 'vue'
import { CheckBadgeIcon, ShoppingCartIcon } from '@heroicons/vue/24/solid'
import { useCartStore } from '@/stores/cart'
import Spinner from '~/components/UI/Spinner.vue'
import CartForm from '~/components/UI/Form/CartForm.vue'

const store: Ref = ref(null)
const loading = ref(true)
const isSubmitted = ref(false)

onMounted(() => {
  store.value = useCartStore()
  loading.value = false
})

function isFromSubmitted() {
  store.value.clearCart()
  isSubmitted.value = true
}
</script>

<template>
  <div v-if="loading">
    <Spinner />
  </div>
  <div v-else-if="!store.hasItems && !isSubmitted" class="container mx-auto px-4 flex items-center justify-center mt-10 text-2xl">
    <ShoppingCartIcon class="size-6 text-green-600" />&nbsp;Ваша корзина пуста милорд...
  </div>
  <div v-else-if="isSubmitted" class="container mx-auto px-4 flex items-center justify-center mt-10 text-2xl">
    <CheckBadgeIcon class="size-6 text-green-600" />&nbsp;Ваша заявка отправлена милорд!
  </div>
  <div v-else>
    <div class="container mx-auto px-4">
      <div class="flex flex-col bg-white">
        <div class="flex-1 py-6">
          <div class="flex items-start">
            <div class="text-lg font-medium text-gray-900">
              Товары в корзине
            </div>
          </div>
          <div class="mt-8">
            <div class="flow-root">
              <ul role="list" class="-my-6 divide-y divide-gray-200">
                <cart-item
                  v-for="product in store.cart" :key="product.id" :product="product"
                  :remove-from-cart="store.removeFromCart"
                />
              </ul>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 py-6">
          <div class="flex justify-between text-base font-medium text-gray-900 border-b border-gray-200 pb-6">
            <p>Всего:</p>
            <p>{{ store.totalPrice }}&nbsp;₽</p>
          </div>

          <CartForm :cart="store.cart" :total-price="store.totalPrice" @form-submitted="isFromSubmitted" />

          <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              или
              <NuxtLink to="/">
                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Продолжить покупки
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
