import {defineStore} from 'pinia';
import {getLocalStorage, setLocalStorage, removeFromLocalStorage} from '~/utils';
import type {Product} from "~/types/product.js";

interface State {
    cart: Product[],
}

export const useCartStore = defineStore('cart', {
    state: (): State => ({
        cart: getLocalStorage('cart', []),
    }),
    getters: {
        hasItems: (state) => state.cart.length > 0,
        totalItems: (state) => state.cart.reduce((total, item: Product) => total + item.quantity, 0),
        totalPrice: (state) => state.cart.reduce((totalPrice, item: Product) => totalPrice + (item.price * item.quantity), 0),
    },
    actions: {
        updateLocalStorage() {
            setLocalStorage('cart', this.cart);
        },
        addToCart(item: Product) {
            const existingItem: Product | undefined = this.cart.find((cartItem: Product) => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                this.cart.push({...item});
            }
            this.updateLocalStorage();
        },
        removeFromCart(itemId: number) {
            this.cart = this.cart.filter((item: Product) => item.id !== itemId);
            this.updateLocalStorage();
        },
        clearCart() {
            removeFromLocalStorage('cart')
            this.cart = [];
        }
    }
});