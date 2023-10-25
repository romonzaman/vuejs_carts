<script setup>
import { ref } from 'vue';

import { useProfileStore } from '../stores/ProfileStore'
const profileStore = useProfileStore()

const show_profile = ref(false)

const toggle_profile = () => {
    console.log(show_profile.value)
    if (show_profile.value == true) {
        show_profile.value = false
    } else {
        show_profile.value = true
    }
}
</script>


<template>
    <div
        class="flex h-32 w-full bg-white justify-between items-center border-b-2 border-purple-950 shadow-md shadow-purple-500">
        <div>
            <div class="flex justify-start items-center bg-white px-6 w-full">
                <img class="w-6 sm:w-10 h-auto m-2 rounded-full" src="/img/logo_lwmk.png" alt="Logo">
                <!-- <span class="text-sm sm:text-lg">IMS</span> -->
            </div>
        </div>
        <div>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" @click="toggle_profile()"
                class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                <img class="w-10 h-10 rounded-full" :src="profileStore.avatar_url" alt="">
                <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                </svg>
            </button>
            <!-- Dropdown menu -->
            <div id="dropdownNavbar"
                class="z-10 hiddenX font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                :class="show_profile == false ? 'hidden' : ''">
                <div class="relative">
                    <span
                        class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full">
                    </span>
                </div>
                <div class="flex w-3/4">
                    <!-- <h1>{{ authStore.username }}</h1> -->
                    <h1 class="pl-4">{{ profileStore.GetProfileName }}</h1>

                </div>
                <div class="py-1">
                    <RouterLink
                        class=" block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                        :to="{ name: 'Logout' }">Logout
                    </RouterLink>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped></style>
