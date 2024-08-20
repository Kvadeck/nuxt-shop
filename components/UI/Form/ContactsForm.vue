<script setup lang="ts">

</script>

<template>
  <div class="mb-5">
    <div class="text-lg font-medium text-gray-900 mb-6">Контактная информация</div>
    <div class="lg:w-5/12">
      <div class="mb-3 grid grid-cols-2 gap-2">
        <div>
          <label class="sr-only" for="name">Имя</label>
          <input class="w-full rounded-lg border p-3 text-sm" placeholder="Имя" type="text" id="name">
        </div>
        <div>
          <label class="sr-only" for="lastname">Фамилия</label>
          <input class="w-full rounded-lg border p-3 text-sm" placeholder="Фамилия" type="text" id="lastname">
        </div>
      </div>
      <div>
        <label class="sr-only" for="email">Почта</label>
        <input class="w-6/12 rounded-lg border p-3 text-sm" placeholder="Почта" type="text" id="email">
      </div>


    </div>
  </div>
</template>

<style scoped>

</style>