<script setup lang="ts">

interface FilterOptions {
  color: string[];
  smell: string[];
  thickness: string[];
}

interface Item {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  color: string;
  smell: string;
  thickness: string;
}

interface FilterProps {
  items: Item[];
  initialFilters?: FilterOptions;
}

const props = defineProps<FilterProps>();

const filters = ref<FilterOptions>({
  color: [],
  smell: [],
  thickness: [],
  ...props.initialFilters,
});


const filteredItems = computed(() => {
  return props.items.filter(item => {
    const matchesCategory = filters.value.category.length === 0 || filters.value.category.includes(item.category);
    const matchesPrice = item.price >= filters.value.priceRange[0] && item.price <= filters.value.priceRange[1];
    const matchesStock = !filters.value.inStock || item.inStock;

    return matchesCategory && matchesPrice && matchesStock;
  });
});


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