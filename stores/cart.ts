import {defineStore} from 'pinia';
import {getLocalStorage, setLocalStorage} from '~/utils';
import type {Product} from "~/types/product.js";

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: getLocalStorage('cart', []),
        cartItemsCount: getLocalStorage('cartCount', 0),
        cartTotalPrice: getLocalStorage('totalPriceCount', 0),
    }),
    getters: {
        hasItems: (state) => state.cart.length > 0,
    },
    actions: {
        updateLocalStorage() {
            setLocalStorage('cart', this.cart);
            // Refactor this later...
            this.cartItemsCount = this.cart.reduce((total: number, item: Product) => total + item.quantity, 0);
            this.cartTotalPrice = this.cart.reduce((totalPrice: number, item: Product) => totalPrice + (item.price * item.quantity), 0);
            setLocalStorage('cartCount', this.cartItemsCount);
            setLocalStorage('totalPriceCount', this.cartTotalPrice);
        },
        addToCart(item: Product) {
            const existingItem: Product | undefined = this.cart.find((cartItem: Product) => cartItem.id === item.id);
            // Typescript errors fix this later...
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                this.cart.push({...item, quantity: item.quantity});
            }
            this.updateLocalStorage();
        },
        removeFromCart(itemId: number) {
            // Refactor this later...
            if (window.confirm('Вы уверены, что хотите удалить этот товар из корзины?')) {
                this.cart = this.cart.filter((item: Product) => item.id !== itemId);
                this.updateLocalStorage();
            }
        },
    }
});