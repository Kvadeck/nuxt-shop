<script setup lang="ts">

</script>

<template>
  <div class="text-lg font-medium text-gray-900 mb-6 mt-6">Данные для оплаты</div>
  <div class="lg:w-5/12">
    <div class="mb-3 grid grid-cols-2 gap-2">
      <div class="mb-3">
        <label class="sr-only" for="card-number">Номер карты</label>
        <input class="w-full rounded-lg border p-3 text-sm" placeholder="Номер карты" type="text" id="card-number">
      </div>
      <div class="mb-3">
        <label class="sr-only" for="card-name">Имя карты</label>
        <input class="w-full rounded-lg border p-3 text-sm" placeholder="Имя карты" type="text" id="card-name">
      </div>
    </div>
  </div>
  <div class="lg:w-5/12">
    <div class="grid grid-cols-2 lg:w-4/12 gap-2 mb-6">
      <div class="mb-3">
        <label class="sr-only" for="card-end-date">Срок</label>
        <input class="w-full rounded-lg border p-3 text-sm" placeholder="Срок" type="text" id="card-end-date">
      </div>
      <div class="mb-3">
        <label class="sr-only" for="cvc">CVC</label>
        <input class="w-full rounded-lg border p-3 text-sm" placeholder="CVC" type="text" id="cvc">
      </div>
    </div>
  </div>
  <div>

  </div>
</template>

<style scoped>

</style>