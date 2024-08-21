<script setup lang="ts">
import Pagination from "~/components/UI/Pagination.vue";
import Sort from "~/components/UI/Sort.vue";
import ProductItem from "~/components/Products/ProductItem.vue";
import Filter from "~/components/UI/Filter/Filter.vue";
import {sortByProperty} from "~/utils";
import {useWatchedPagination} from "~/composables/usePagination";
import {useFilteredProducts} from "~/composables/useFilteredProducts";

const {products, error, totalPages, currentPage} = useWatchedPagination()
const {filteredProducts, updateFilter} = useFilteredProducts(products)

function sortByPriceDesc(): void {
  products.value = sortByProperty(products.value, 'price');
}

function sortByPriceAsc(): void {
  products.value = sortByProperty(products.value, 'price').reverse();
}

function changePageHandler(page: number): void {
  currentPage.value = page;
}

</script>

<template>
  <div class="bg-white">
    <div class="container mx-auto px-4 py-2">
      <div class="flex flex-col sm:flex-row gap-2 items-center justify-between">
        <Filter @change-filter="updateFilter"/>
        <div class="flex items-center">
          <Pagination @page-change="changePageHandler" :current-page="currentPage" :total-pages="totalPages"/>
          <Sort @sort-by-price-desc="sortByPriceDesc" @sort-by-price-asc="sortByPriceAsc"/>
        </div>
      </div>
      <div v-if="filteredProducts"
           class="mt-3 mb-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <product-item v-for="product in filteredProducts" :key="product.id"
                      :id="product.id"
                      :color="product.color"
                      :price="product.price"
                      :name="product.name"
                      :image-src="product.imageSrc"
                      :image-alt="product.imageAlt" :smell="product.smell" :thickness="product.thickness"
                      :description="product.description" :quantity="product.quantity"/>
      </div>
      <div v-else-if="error">Something goes wrong: {{ error }}</div>
      <div v-else class="text-center text-2xl">No trees found!</div>
    </div>
  </div>

</template>