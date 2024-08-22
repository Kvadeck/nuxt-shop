import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import type { PaginatedResponse } from '~/types/pagination'
import type { Product } from '~/types/product' // Adjust this import based on your actual types

export function useWatchedPagination() {
  const LIMIT = 8

  // Define types for the reactive references
  const currentPage: Ref<number> = ref(1)
  const totalPages: Ref<number> = ref(1)
  const products: Ref<Product[]> = ref([])
  const error: Ref<string | null> = ref(null)

  watch(
    currentPage,
    async () => {
      try {
        // Use useFetch with the appropriate type
        const { data } = await useFetch<PaginatedResponse>(
          `/api/products?page=${currentPage.value}&limit=${LIMIT}`,
        )

        products.value = data.value?.items || []
        currentPage.value = data.value?.page ?? 1
        totalPages.value = data.value?.totalPages ?? 1
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
