<script setup lang="ts">

import Pagination from "~/components/UI/Pagination.vue";
import Dropdown from "~/components/UI/Dropdown.vue";
import ProductItem from "~/components/Products/ProductItem.vue";
import Filter from "~/components/UI/Filter.vue";

interface Product {
  id: number;
  name: string;
  description: string;
  color: string;
  price: number;
  imageSrc: string;
  imageAlt?: string;
  smell: string,
  thickness: string
}

const {data: product} = await useFetch<Product[]>('/api/products')

</script>

<template>
  <div class="bg-white">
    <div class="container mx-auto px-4 py-4">

      <div class="flex gap-5 items-center justify-between">
        <Filter/>
        <dropdown/>
      </div>

      <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

        <product-item v-for="product in product" :key="product.id"
                      :id="product.id"
                      :color="product.color"
                      :price="product.price"
                      :name="product.name"
                      :image-src="product.imageSrc"
                      :image-alt="product.imageAlt"/>


      </div>
    </div>
  </div>
  <pagination/>
</template>

<style scoped>

</style>