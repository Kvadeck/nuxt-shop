import { ref, watch } from 'vue'
import type { PaginatedResponse } from '~/types/pagination'
import type { Product } from '~/types/product'

export function useWatchedPagination() {
  const LIMIT = 8

  const currentPage = ref(1)
  const totalPages = ref(1)
  const products = ref<Product[]>([])
  const error = ref<string | null>(null)

  watch(
    currentPage,
    async () => {
      try {
        const data = await $fetch<PaginatedResponse>(`/api/products?page=${currentPage.value}&limit=${LIMIT}`)

        if (data) {
          products.value = data.items
          currentPage.value = data.page
          totalPages.value = data.totalPages
        }
      }
      catch (err) {
        error.value = err instanceof Error ? err.message : String(err)
      }
    },
    { immediate: true },
  )

  return {
    products,
    error,
    currentPage,
    totalPages,
  }
}
