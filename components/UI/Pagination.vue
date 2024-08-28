<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
import type { PaginationProps } from '~/types/pagination'

const props = defineProps<PaginationProps>()

const emit = defineEmits<{
  pageChange: [page: number]
}>()

function prevPage() {
  if (props.currentPage > 1) {
    emit('pageChange', props.currentPage - 1)
  }
}

function nextPage() {
  if (props.currentPage < props.totalPages) {
    emit('pageChange', props.currentPage + 1)
  }
}

const isFirstPage = computed(() => {
  return props.currentPage === 1
})

const isLastPage = computed(() => {
  return props.currentPage === props.totalPages
})
</script>

<template>
  <div class="justify-center border-gray-200 flex items-center py-3 px-4">
    <div class="flex">
      <div>
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <a
            :class="{ 'pointer-events-none': isFirstPage }" class="relative inline-flex items-center rounded-l-md p-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            @click.prevent="prevPage"
          >
            <span class="sr-only">Предыдущие</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            :class="{ 'pointer-events-none': isLastPage }" class="relative inline-flex items-center rounded-r-md p-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            @click.prevent="nextPage"
          >
            <span class="sr-only">Следующие</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>
