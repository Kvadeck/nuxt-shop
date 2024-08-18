<script setup lang="ts">

import Pagination from "~/components/UI/Pagination.vue";
import Sort from "~/components/UI/Sort.vue";
import ProductItem from "~/components/Products/ProductItem.vue";
import Filter from "~/components/UI/Filter.vue";
import {sortByProperty} from "~/utils";

interface Product {
  id: number;
  name: string;
  description: string;
  color: string;
  price: number;
  imageSrc: string;
  imageAlt?: string;
  smell: string;
  thickness: string;
}

interface FilterOptions {
  filterBy: string[];
}

const products = ref<Product[]>([]);
const error = ref<string | null>(null);
const filters = ref<FilterOptions>({
  filterBy: [],
});
const currentPage = ref(1);
const totalPages = ref(1);
const limit = 4;

watch(
    currentPage,
    async () => {
      let page = 1;

      try {
        const {data} = await useFetch<Product[]>(`/api/products?page=${page}&limit=${limit}`);
        products.value = data.value.items ?? [];
        currentPage.value = data.value.page;
        totalPages.value = data.value.totalPages;
      } catch (err) {
        error.value = err instanceof Error ? err.message : String(err);
      }
    },
    { immediate: true }
)


function sortByPriceDesc(): void {
  products.value = sortByProperty(products.value, 'price');
}

function sortByPriceAsc(): void {
  products.value = sortByProperty(products.value, 'price').reverse();
}

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    return filters.value.filterBy.length === 0 || filters.value.filterBy.includes(product.color) || filters.value.filterBy.includes(product.smell) || filters.value.filterBy.includes(product.thickness);
  });
});

const updateFilter = (filter: string) => {
  if (filters.value.filterBy.includes(filter)) {
    filters.value.filterBy = filters.value.filterBy.filter(c => c !== filter);
  } else {
    filters.value.filterBy.push(filter);
  }
};


function changePageHandler(page) {
  currentPage.value = page
}

</script>

<template>
  <div class="bg-white">
    <div class="container mx-auto px-4 py-2">
      <div class="flex gap-2 items-center justify-between">
        <Filter @change-filter="updateFilter"/>
        <div class="flex items-center">
          <Pagination @page-change="changePageHandler" :current-page="currentPage" :total-pages="totalPages"/>
          <Sort @sort-by-price-desc="sortByPriceDesc" @sort-by-price-asc="sortByPriceAsc"/>
        </div>
      </div>
      <div v-if="filteredProducts"
           class="mt-3 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <product-item v-for="product in filteredProducts" :key="product.id"
                      :id="product.id"
                      :color="product.color"
                      :price="product.price"
                      :name="product.name"
                      :image-src="product.imageSrc"
                      :image-alt="product.imageAlt" :smell="product.smell" :thickness="product.thickness"/>
      </div>
      <div v-else-if="error">Something goes wrong: {{ error }}</div>
      <div v-else class="text-center text-2xl">No trees found!</div>
    </div>
  </div>

</template>

<style scoped>

</style>