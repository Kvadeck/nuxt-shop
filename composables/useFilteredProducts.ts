import type {Ref} from 'vue';
import type {Product} from '~/types/product';
import type {FilterOptions} from '~/types/filter';

export function useFilteredProducts(products: Ref<Product[]>, filters: Ref<FilterOptions>) {
    const filteredProducts = computed(() => {
        return products.value.filter((product: Product) => {
            return (
                filters.value.filterBy.length === 0 ||
                filters.value.filterBy.includes(product.color) ||
                filters.value.filterBy.includes(product.smell) ||
                filters.value.filterBy.includes(product.thickness)
            );
        });
    });

    return {
        filteredProducts,
    };
}