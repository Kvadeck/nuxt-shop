import { ref } from 'vue'
import { useRoute } from 'vue-router'
import type { Ref } from 'vue'
import type { Product, ProductResponse } from '~/types/product'

export function useProduct() {
  const route = useRoute()
  const error: Ref<string | null> = ref(null)
  const product: Ref<Product | null> = ref(null)

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

  getProduct().then(() => {})

  return {
    product,
    error,
  }
}
