<script setup lang="ts">
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {ChevronDownIcon} from '@heroicons/vue/20/solid'

const emits = defineEmits(['sort-by-price-desc', 'sort-by-price-asc'])

const activePriceDesc = ref(false)
const activePriceAsc = ref(false)

function sortByPriceDesc() {
  activePriceDesc.value = true;
  activePriceAsc.value = false;
  emits('sort-by-price-desc')
}

function sortByPriceAsc() {
  activePriceDesc.value = false;
  activePriceAsc.value = true;
  emits('sort-by-price-asc')
}

</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
          class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        Сортировка
        <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true"/>
      </MenuButton>
    </div>

    <MenuItems
        class="absolute bg-white focus:outline-none mt-2 origin-top-right ring-1 ring-black ring-opacity-5 rounded-md shadow-lg z-10">
      <div class="py-1">
        <MenuItem>
          <a @click="sortByPriceDesc" href="#"
             :class="[activePriceDesc ? 'bg-gray-200 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
            Цена по возрастанию</a>
        </MenuItem>
        <MenuItem>
          <a @click="sortByPriceAsc" href="#"
             :class="[activePriceAsc ? 'bg-gray-200 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">
            Цена по убыванию</a>
        </MenuItem>
      </div>
    </MenuItems>
  </Menu>
</template>

<style scoped>

</style>