<script setup lang="ts">
import {useCartStore} from "@/stores/cart";
import type {Ref} from "vue";
import {ShoppingCartIcon} from '@heroicons/vue/24/solid'
import ContactsForm from "~/components/UI/Form/ContactsForm.vue";
import PaymentForm from "~/components/UI/Form/PaymentForm.vue";
import Spinner from "~/components/UI/Spinner.vue";

const store: Ref = ref(null)
const loading = ref(true);

onMounted(() => {
  store.value = useCartStore()
  loading.value = false;
})

</script>

<template>
  <div v-if="loading">
    <Spinner/>
  </div>
  <div v-else-if="!store.hasItems" class="container mx-auto px-4 flex items-center justify-center mt-10 text-2xl">
    <ShoppingCartIcon class="size-6 text-green-600"/>&nbsp;Ваша корзина пуста милорд...
  </div>
  <div v-else>
    <div class="container mx-auto px-4">
      <div class="flex flex-col bg-white">
        <div class="flex-1 py-6">
          <div class="flex items-start">
            <div class="text-lg font-medium text-gray-900">Товары в корзине</div>
          </div>
          <div class="mt-8">
            <div class="flow-root">
              <ul role="list" class="-my-6 divide-y divide-gray-200">
                <cart-item v-for="product in store.cart" :product="product" :key="product.id" :remove-from-cart="store.removeFromCart"/>
              </ul>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 py-6">

          <ContactsForm/>
          <PaymentForm/>

          <div class="flex justify-between text-base font-medium text-gray-900">
            <p>Всего:</p>
            <p>{{ store.cartTotalPrice }}&nbsp;₽</p>
          </div>

          <p class="mt-0.5 text-sm text-gray-500">Доставка и налоги рассчитываются при оформлении заказа.</p>
          <div class="mt-6">
            <a href="#"
               class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Оплатить</a>
          </div>
          <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>или
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