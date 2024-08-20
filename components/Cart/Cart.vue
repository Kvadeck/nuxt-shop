<script setup lang="ts">
import {useCartStore} from "@/stores/cart";
import type {Ref} from "vue";
import {ShoppingCartIcon} from '@heroicons/vue/24/solid'
import Contacts from "~/components/UI/Form/ContactsForm.vue";
import ContactsForm from "~/components/UI/Form/ContactsForm.vue";
import PaymentForm from "~/components/UI/Form/PaymentForm.vue";

const store: Ref = ref(null)
const loading: Ref = ref(true);

onMounted(() => {
  store.value = useCartStore()
  loading.value = false;
})

</script>

<template>
  <div v-if="loading">
    <div role="status" class="flex justify-center mt-10">
      <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
           viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"/>
        <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"/>
      </svg>
      <span class="sr-only">Loading...</span>
    </div>

  </div>
  <div v-else-if="!store.hasItems" class="container mx-auto px-4 flex items-center justify-center mt-10 text-2xl">
    <ShoppingCartIcon class="size-6 text-green-600"/>&nbsp;
    Ваша корзина пуста милорд
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
                <cart-item :cart="store.cart" :remove-from-cart="store.removeFromCart"/>
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

<style scoped>

</style>