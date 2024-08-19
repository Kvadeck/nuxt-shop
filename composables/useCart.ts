import {ref} from 'vue';
import {getLocalStorage, setLocalStorage} from '~/utils';
import type {Product} from "~/types/product";

export function useCart() {
    const cart = ref<Product[]>(getLocalStorage('cart', []));

    function addToCart(item: Product) {
        const existingItem = cart.value.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            cart.value.push(item);
        }
        setLocalStorage('cart', cart.value);
    }

    function removeFromCart(itemId: number) {
        cart.value = cart.value.filter(item => item.id !== itemId);
        setLocalStorage('cart', cart.value);
    }

    const cartItemCount = computed(() => {
        if (cart.value) {
            return cart.value.reduce((total, item) => total + item.quantity, 0);
        }
    });

    return {
        cart,
        addToCart,
        cartItemCount,
        removeFromCart
    };
}