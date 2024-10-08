import type { Ref } from 'vue'
import type { Product } from '~/types/product'
import type { FilterOptions } from '~/types/filter'

export function useFilteredProducts(products: Ref<Product[]>) {
  const filters = ref<FilterOptions>({
    filterBy: [],
  })

  const filteredProducts = computed(() => {
    return products.value.filter((product: Product) => {
      return (
        !filters.value.filterBy.length
        || filters.value.filterBy.includes(product.color)
        || filters.value.filterBy.includes(product.smell)
        || filters.value.filterBy.includes(product.thickness)
      )
    })
  })
  function updateFilter(filter: string): void {
    if (filters.value.filterBy.includes(filter)) {
      filters.value.filterBy = filters.value.filterBy.filter(c => c !== filter)
    }
    else {
      filters.value.filterBy.push(filter)
    }
  }
  return {
    filteredProducts,
    updateFilter,
  }
}
