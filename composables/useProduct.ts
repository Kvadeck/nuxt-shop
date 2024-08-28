import { ref } from 'vue'
import { useRoute } from 'vue-router'
import type { Product, ProductResponse } from '~/types/product'

export function useProduct() {
  const route = useRoute()
  const error = ref<string | null>(null)
  const product = ref<Product | null>(null)

  const getProduct = async () => {
    try {
      const { data } = await useAsyncData<ProductResponse>(() =>
        $fetch(`/api/product?id=${route.params.id}`),
      )
      product.value = data.value?.item || null
    }
    catch (err) {
      error.value = err instanceof Error ? err.message : String(err)
    }
  }

  return {
    product,
    error,
    getProduct,
  }
}
