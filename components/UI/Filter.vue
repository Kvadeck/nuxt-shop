<script setup lang="ts">
import {ref, computed} from 'vue';

const emits = defineEmits<{
  (e: 'change-filter', value: string): void;
}>();

const isShowFilters = ref<boolean>(false);

const colorOptions = [
  {option: 'Желтовато-белый'},
  {option: 'Нежно-розовый'},
  {option: 'Бледно-коричневый'},
];

const smellOptions = [
  {option: 'Чабрец'},
  {option: 'Лимон'},
  {option: 'Виноград'},
  {option: 'Грейпфрут'},
];

const thicknessOptions = [
  {option: '500 кг/м3'},
  {option: '200 кг/м3'},
  {option: '580 кг/м3'},
  {option: '790 кг/м3'},
];

const filterBtnLabel = computed<string>(() => {
  return isShowFilters.value ? 'Скрыть' : 'Фильтры';
});

function changeFilter(event: Event): void {
  const target = event.target as HTMLInputElement;
  emits('change-filter', target.value);
}
</script>

<template>
  <button
      @click="isShowFilters = !isShowFilters"
      class="bg-white hover:bg-gray-50 inline-flex justify-center px-3 py-2 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm text-gray-900 text-sm"
  >
    {{ filterBtnLabel }}
  </button>

  <div v-show="isShowFilters">
    <fieldset>
      <legend class="sr-only">Filter options</legend>
      <div class="flex flex-wrap gap-2 justify-start">
        <h3 class="font-semibold">Цвет:</h3>
        <label v-for="(color, index) in colorOptions" :key="index" class="cursor-pointer flex gap-2 items-center">
          <div class="flex items-center">
            <input
                type="checkbox"
                :value="color.option"
                @change="changeFilter"
                class="size-4 rounded border-gray-300"
            />
          </div>
          <div>
            <p class="text-sm text-gray-900">{{ color.option }}</p>
          </div>
        </label>

        <h3 class="font-semibold">Запах:</h3>
        <label v-for="(smell, index) in smellOptions" :key="index" class="cursor-pointer flex gap-2 items-center">
          <div class="flex items-center">
            <input
                type="checkbox"
                :value="smell.option"
                @change="changeFilter"
                class="size-4 rounded border-gray-300"
            />
          </div>
          <div>
            <p class="text-sm text-gray-900">{{ smell.option }}</p>
          </div>
        </label>

        <h3 class="font-semibold">Плотность:</h3>
        <label v-for="(thickness, index) in thicknessOptions" :key="index"
               class="cursor-pointer flex gap-2 items-center">
          <div class="flex items-center">
            <input
                type="checkbox"
                :value="thickness.option"
                @change="changeFilter"
                class="size-4 rounded border-gray-300"
            />
          </div>
          <div>
            <p class="text-sm text-gray-900">{{ thickness.option }}</p>
          </div>
        </label>
      </div>
    </fieldset>
  </div>
</template>
