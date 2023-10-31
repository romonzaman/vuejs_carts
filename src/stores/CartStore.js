import { defineStore } from "pinia";

export const useCartStore = defineStore('store', {
    state: ()=>({
        products: [],
        shipping: 5,
        tax: 10
    }),
    persist: true,
    getters: {
        totalItem(state) {
            return this.products.length
        },
        totalPrice(state) {
            return this.products.reduce((total, product)=>{
                 return (total + (product.count*product.data.price))
            }, 0)
        },
        getTax(state) {
            return (this.totalPrice*this.tax/100)
        },
        totalCost(state) {
            return (this.totalPrice + this.shipping + this.getTax )
        }
        
    },
    actions: {
        async add_to_cart(product){
            const item = {
                count: 1,
                data: product
            }
            this.products.push(item)
        }
    }
})