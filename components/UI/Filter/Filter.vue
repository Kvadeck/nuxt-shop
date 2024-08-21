<script setup lang="ts">
import {ref, computed} from 'vue';
import FilterItem from "~/components/UI/Filter/FilterItem.vue";

const emits = defineEmits<{
  'change-filter': [value: string]
}>()

const isShowFilters = ref(false);

const colorOptions = ['Желтовато-белый', 'Нежно-розовый', 'Бледно-коричневый',];
const smellOptions = ['Чабрец', 'Лимон', 'Виноград', 'Грейпфрут'];
const thicknessOptions = ['500 кг/м3', '200 кг/м3', '580 кг/м3', '790 кг/м3',];

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
        <filter-item title="Цвет" :options="colorOptions" :change-filter="changeFilter"/>
        <filter-item title="Запах" :options="smellOptions" :change-filter="changeFilter"/>
        <filter-item title="Плотность" :options="thicknessOptions" :change-filter="changeFilter"/>
      </div>
    </fieldset>
  </div>
</template>
