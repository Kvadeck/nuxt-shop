<script setup lang="ts">
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/vue/20/solid'
import type {PaginationProps} from "~/types/pagination";
const props = defineProps<PaginationProps>();

const emit = defineEmits<{
  'page-change': [page: number]
}>()

function prevPage() {
  if (props.currentPage > 1) {
    emit('page-change', props.currentPage - 1);
  }
}

function nextPage() {
  if (props.currentPage < props.totalPages) {
    emit('page-change', props.currentPage + 1);
  }
}
</script>

<template>
  <div class="justify-center border-gray-200 flex items-center py-3 px-4">
    <div class="flex">
      <div>
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <a @click.prevent="prevPage" :disabled="props.currentPage === 1" href="#"
             class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Предыдущие</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true"/>
          </a>
          <a @click.prevent="nextPage" :disabled="props.currentPage === totalPages" href="#"
             class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Следующие</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true"/>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>