<script setup lang="ts">

</script>

<template>
  <div>
    <fieldset>
      <legend class="sr-only">Filter options</legend>
      <div class="flex flex-wrap gap-2 justify-center">
        <h3 class="font-semibold">Цвет:</h3>
        <label v-for="color in ['Желтовато-белый', 'Нежно-розовый', 'Бледно-коричневый']"
               class="cursor-pointer flex gap-2 items-center" :key="color">
          <div class="flex items-center">
            <input type="checkbox" :value="color" class="size-4 rounded border-gray-300"/>
          </div>
          <div>
            <p class="text-sm text-gray-900">{{ color }}</p>
          </div>
        </label>

        <h3 class="font-semibold">Запах:</h3>
        <label v-for="smell in ['Чабрец', 'Лимон', 'Виноград', 'Грейпфрут']"
               class="cursor-pointer flex gap-2 items-center" :key="smell">
          <div class="flex items-center">
            <input type="checkbox" :value="smell" class="size-4 rounded border-gray-300"/>
          </div>
          <div>
            <p class="text-sm text-gray-900">{{ smell }}</p>
          </div>
        </label>

        <h3 class="font-semibold">Плотность:</h3>
        <label v-for="thickness in ['500 кг/м3', '200 кг/м3', '580 кг/м3', '790 кг/м3']"
               class="cursor-pointer flex gap-2 items-center" :key="thickness">
          <div class="flex items-center">
            <input type="checkbox" :value="thickness" class="size-4 rounded border-gray-300"/>
          </div>
          <div>
            <p class="text-sm text-gray-900">{{ thickness }}</p>
          </div>
        </label>
      </div>
    </fieldset>
  </div>
</template>

<style scoped>

</style>