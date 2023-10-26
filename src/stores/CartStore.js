import { defineStore } from "pinia";

export const useCartStore = defineStore('store', {
    state: ()=>({
        products: []
    }),
    persist: true,
    getters: {
        totalItem(state) {
            return this.products.length
        }
    },
    actions: {
        async add_to_cart(product){
            this.products.push(product)
        }
    }
})