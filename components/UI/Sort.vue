<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const emits = defineEmits<{
  sortByPriceAsc: [value: null]
  sortByPriceDesc: [value: null]
}>()

const activeSort = ref('')

function sortByPrice(order: string) {
  activeSort.value = order
  if (order === 'asc') {
    emits('sortByPriceAsc', null)
  }
  else {
    emits('sortByPriceDesc', null)
  }
}
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton id="1"
      class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      Сортировка
      <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
    </MenuButton>
    <MenuItems
      class="absolute bg-white focus:outline-none mt-2 origin-top-right ring-1 ring-black ring-opacity-5 rounded-md shadow-lg z-10"
    >
      <div class="py-1">
        <MenuItem>
          <button
              type="button"
              class="block w-full px-4 py-2 text-left text-sm"
              :class="[activeSort === 'asc' ? 'bg-gray-200 text-gray-900' : 'text-gray-700']"
              @click="sortByPrice('asc')"
          >
            Цена по убыванию
          </button>
        </MenuItem>
        <MenuItem>
          <button
              type="button"
              class="block w-full px-4 py-2 text-left text-sm"
              :class="[activeSort === 'desc' ? 'bg-gray-200 text-gray-900' : 'text-gray-700']"
              @click="sortByPrice('desc')"
          >
            Цена по возрастанию</button>
        </MenuItem>
      </div>
    </MenuItems>
  </Menu>
</template>
