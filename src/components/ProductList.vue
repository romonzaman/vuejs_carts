<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import { RouterLink, useRouter } from 'vue-router';

import UserLayout from '../components/userlayout.vue'

document.title = "Products"

import { useAuthStore } from '../stores/AuthStore'
const authStore = useAuthStore()

if (authStore.accessToken == null) {
    authStore.router.push("/login")
}

import { useCartStore } from '../stores/CartStore';
const cartStore = useCartStore()

//https://fakestoreapi.com/products/

const router = useRouter()

const products = ref([])

const page_loading = ref(false)

onMounted(async () => {
    page_loading.value = true
    // const resp = await axios.get('https://fakestoreapi.com/products/')
    const resp = await axios.get('https://dummyjson.com/products/?limit=10')
    products.value = resp.data.products
    console.log(products.value)
    page_loading.value = false
})

const show_details = (id) => {
    router.push({ path: '/product/' + id })
}

</script>


<template>
    <UserLayout :activeMenu="1">
        <div>
            <div class="w-1/3">

            </div>
            <div class="w-2/3">
                <div class="text-4xl ml-5 underline underline-offset-8 text-blue-600 w-full flex justify-around">
                    <span>
                        Product Lists
                    </span>
                    <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        v-show="page_loading" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor" />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill" />
                    </svg>

                </div>
                <div class="w-full">
                    <div v-for="product, index in products" :key="index"
                        class="mt-10 flex justify-center items-center  border border-gray-50 w-full">
                        <div class="border border-gray-50 w-1/3 m-4">
                            <router-link :to="'/product/' + product['id']">
                                <img class="h-auto text-2xl hover:ring-8 hover:border-2 hover:border-purple-600"
                                    :src="product['thumbnail']" alt="product['title']">
                            </router-link>
                        </div>
                        <div class="ml-2 py-2 px-5 border w-2/3">
                            <div class="flex flex-col justify-start items-start">
                                <router-link class="text-2xl hover:text-purple-600" :to="'/product/' + product['id']">
                                    {{ product['title'] }}
                                </router-link>
                                <h1 class="text-xs font-bold mt-2">{{ product['brand'] }}</h1>
                                <h1 class="text-lg font-bold mt-4">$ {{ product['price'] }}</h1>
                                <div class="flex">
                                    <span class="text-sm">
                                        Rating: {{ product['rating'] }}
                                    </span>
                                    <!-- <span class="ml-10 text-sm text-blue-700">
                                    Reviews: ({{ product['rating']['count'] }})
                                </span> -->
                                </div>
                                <!-- <div>
                                Available: {{ product['stock'] }}
                            </div> -->
                            </div>
                            <p class="text-sm my-2">{{ product['description'] }}</p>
                            <!-- <router-link :to="'/product/' + product['id']"
                            class="text-white border bg-blue-700 px-2 py-1 rounded-md">More
                            Detail</router-link> -->
                            <button @click="cartStore.add_to_cart(product)"
                                class="bg-blue-700 text-white font-bold px-2 py-1 rounded-lg text-sm">Add to
                                Cart</button>
                        </div>

                    </div>
                    <!-- <div v-for="product, index in products" :key="index" class="">
            {{ product }}
            <h1>{{ product['title'] }}</h1>

        </div> -->
                </div>
            </div>

        </div>
    </UserLayout>
</template>

<style scoped></style>
