<script setup lang="ts">
import { computed, ref } from 'vue'
import FilterItem from '~/components/UI/Filter/FilterItem.vue'

const emits = defineEmits<{
  changeFilter: [value: string]
}>()

const isShowFilters = ref(false)

const colorOptions = ['Желтовато-белый', 'Нежно-розовый', 'Бледно-коричневый']
const smellOptions = ['Чабрец', 'Лимон', 'Виноград', 'Грейпфрут']
const thicknessOptions = ['500 кг/м3', '200 кг/м3', '580 кг/м3', '790 кг/м3']

const filterBtnLabel = computed<string>(() => {
  return isShowFilters.value ? 'Скрыть' : 'Фильтры'
})

function changeFilter(event: Event): void {
  const target = event.target as HTMLInputElement
  emits('changeFilter', target.value)
}
</script>

<template>
  <button
    class="bg-white hover:bg-gray-50 inline-flex justify-center px-3 py-2 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm text-gray-900 text-sm"
    @click="isShowFilters = !isShowFilters"
  >
    {{ filterBtnLabel }}
  </button>

  <div v-show="isShowFilters">
    <fieldset>
      <legend class="sr-only">
        Filter options
      </legend>
      <div class="flex flex-wrap gap-2 justify-start">
        <FilterItem title="Цвет" :options="colorOptions" :change-filter="changeFilter" />
        <FilterItem title="Запах" :options="smellOptions" :change-filter="changeFilter" />
        <FilterItem title="Плотность" :options="thicknessOptions" :change-filter="changeFilter" />
      </div>
    </fieldset>
  </div>
</template>
