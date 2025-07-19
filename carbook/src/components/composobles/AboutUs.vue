<template>
    <div class="relative w-full md:h-screen">
        <div class="sm:absolute bg-[#10b981] w-full sm:w-2/3 md:h-[92%] top-0 right-0 sm:top-0">
            <div class="sm:absolute -inset-x-1/5 inset-y-20 mb-4 md:mb-0">
                <img src="../../assets/images/bg_3.jpg" alt="" class="md:max-w-[32rem] h-auto object-cover">
            </div>
            <div class="text-white px-4 sm:absolute right-1/5 sm:w-2/4 sm:transform sm:top-2/4
            sm:-translate-y-2/3">
                <h2 class="text-sm font-semibold mb-4 uppercase tracking-wide">About Us </h2>
                <h1 class="text-2xl md:text-4xl font-semibold mb-4">Welcome to Carbook</h1>
                <p class="text-base mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris</p>
                <p class="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris</p>
                <ButtonComponent text="Search Vehicle"/>

            </div>
        </div>
    </div>
</template>

<script setup>
import ButtonComponent from './ButtonComponent.vue'

</script>

<style></style>