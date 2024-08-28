<script setup lang="ts">
import { cartSchema } from '@/schemas/cartSchema'
import type { CartFormProps } from '~/types/cart'

const props = defineProps<CartFormProps>()
const emits = defineEmits<{
  formSubmitted: [value: null]
}>()

const error = ref<string | null>(null)

async function submitCart(values) {
  try {
    error.value = null
    const sendData = {
      cart: props.cart,
      totalPrice: props.totalPrice,
      client: values,
    }
    await useAsyncData(() =>
      $fetch('/api/addProductsFromCart', {
        method: 'POST',
        body: sendData,
      }),
    )
    emits('formSubmitted')
  }
  catch (err) {
    error.value = err instanceof Error ? err.message : 'An error occurred'
  }
}
</script>

<template>
  <div v-if="error" class="text-red-600">
    {{ error }}
  </div>
  <vee-form :validation-schema="cartSchema" @submit="submitCart">
    <div class="mb-5 mt-5">
      <div class="text-lg font-medium text-gray-900 mb-6">
        Контактная информация
      </div>
      <div class="lg:w-5/12">
        <div class="mb-3 grid grid-cols-2 gap-2">
          <div>
            <label class="sr-only" for="name">Имя</label>
            <vee-field
              id="name" name="name" class="w-full rounded-lg border p-3 text-sm" placeholder="Имя"
              type="text"
            />
            <vee-error-message name="name" class="text-red-600 text-sm" />
          </div>
          <div>
            <label class="sr-only" for="lastname">Фамилия</label>
            <vee-field
              id="lastname" name="lastname" class="w-full rounded-lg border p-3 text-sm" placeholder="Фамилия"
              type="text"
            />
            <vee-error-message name="lastname" class="text-red-600 text-sm" />
          </div>
        </div>
        <div>
          <div class="flex flex-col">
            <label class="sr-only" for="email">Почта</label>
            <vee-field
              id="email" name="email" class="w-6/12 rounded-lg border p-3 text-sm" placeholder="Почта"
              type="text"
            />
            <vee-error-message name="email" class="text-red-600 text-sm" />
          </div>
        </div>
      </div>
    </div>
    <div class="text-lg font-medium text-gray-900 mb-6 mt-6">
      Данные для оплаты
    </div>
    <div class="lg:w-5/12">
      <div class="mb-3 grid grid-cols-2 gap-2">
        <div class="mb-3">
          <label class="sr-only" for="card-number">Номер карты</label>
          <vee-field
            id="card-number" name="card-number" class="w-full rounded-lg border p-3 text-sm"
            placeholder="Номер карты" type="text"
          />
          <vee-error-message name="card-number" class="text-red-600 text-sm" />
        </div>
        <div class="mb-3">
          <label class="sr-only" for="card-name">Имя карты</label>
          <vee-field
            id="card-name" name="card-name" class="w-full rounded-lg border p-3 text-sm" placeholder="Имя карты"
            type="text"
          />
          <vee-error-message name="card-name" class="text-red-600 text-sm" />
        </div>
      </div>
    </div>
    <div class="lg:w-5/12">
      <div class="grid grid-cols-2 lg:w-4/12 gap-2 mb-6">
        <div class="mb-3">
          <label class="sr-only" for="card-end-date">Срок</label>
          <vee-field
            id="card-end-date" name="card-end-date" class="w-full rounded-lg border p-3 text-sm" placeholder="Срок"
            type="text"
          />
          <vee-error-message name="card-end-date" class="text-red-600 text-sm" />
        </div>
        <div class="mb-3">
          <label class="sr-only" for="cvc">CVC</label>
          <vee-field id="cvc" name="cvc" class="w-full rounded-lg border p-3 text-sm" placeholder="CVC" type="text" />
          <vee-error-message name="cvc" class="text-red-600 text-sm" />
        </div>
      </div>
    </div>
    <p class="mt-0.5 text-sm text-gray-500">
      Доставка и налоги рассчитываются при оформлении заказа.
    </p>
    <div class="mt-6">
      <button
        type="submit"
        class="bg-indigo-600 border border-transparent flex font-medium hover:bg-indigo-700 items-center justify-center px-6 py-3 rounded-md shadow-sm text-base text-white w-full"
      >
        Оплатить
      </button>
    </div>
  </vee-form>
</template>

<style scoped>

</style>
