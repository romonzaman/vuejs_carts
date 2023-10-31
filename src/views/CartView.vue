<script setup>
import { ref, reactive } from 'vue'

import { useCartStore } from '../stores/CartStore';
const cartStore = useCartStore()

import UserLayout from '../components/userlayout.vue'

document.title = "Cart"

import { useRouter } from 'vue-router';
const router = useRouter()

const goto_checkout = () => {
    router.push("/checkout")
}

</script>


<template>
    <UserLayout>
        <h1 class="text-2xl px-10 pt-5">Shopping Cart</h1>
        <div class="flex items-start justify-start">
            <div class="w-2/3">
                <div class="border m-10 p-5 bg-gray-100 flex justify-evenly items-center space-x-5"
                    v-for="(product, index) in cartStore.products" :key="index">
                    <!-- {{ product.count }} -->
                    <div>
                        <img :src="product.data.thumbnail" alt="" class="w-32 h-auto">
                    </div>
                    <div>
                        <p class="text-lg font-bold">{{ product.data.title }}</p>
                        <p>{{ product.data.price }} $</p>
                        <div class="flex justify-around items-center mt-5">
                            <button class="bg-blue-800 text-white text-md px-2" @click="product.count--"
                                :disabled="product.count == 0">-</button>
                            <input type="number" v-model="product.count" class="w-[50px] text-center">
                            <button class="bg-blue-800 text-white text-md px-2" @click="product.count++">+</button>
                        </div>
                    </div>

                </div>
            </div>
            <div class="w-1/3 bg-gray-200 m-10 p-5">
                <h2 class="text-lg">Order Summary</h2>
                <div class="flex justify-between items-center border-b-2 border-gray-300 border-spacing-x-6 mt-2">
                    <span>Sub Total:</span>
                    <span>{{ cartStore.totalPrice }} $</span>
                </div>
                <div class="flex justify-between items-center border-b-2 border-gray-300 border-spacing-x-6 mt-2">
                    <span>Shipping Charge:</span>
                    <span>{{ cartStore.shipping }} $</span>
                </div>
                <div class="flex justify-between items-center border-b-2 border-gray-300 border-spacing-x-6 mt-2">
                    <span>Vat + Tax:</span>
                    <span>{{ cartStore.getTax }} $</span>
                </div>

                <div class="flex justify-between items-center border-b-2 border-gray-300 border-spacing-x-6 mt-10">
                    <span>Total:</span>
                    <span>{{ cartStore.totalCost }} $</span>
                </div>
                <button class="w-full bg-blue-600 text-white px-5 py-2 mt-10" @click="goto_checkout()">Checkout</button>
            </div>
        </div>
    </UserLayout>
</template>

<style scoped></style>