<template>
    <div class="relative w-full h-96 flex items-center">
        <div class="absolute inset-0">
            <img src="../../assets/images/bg_3.jpg" alt="Call to Action Background"
                class="w-full h-full object-cover object-top" />
            <div class="absolute inset-0 bg-black/50"></div>

        </div>
        <div class="absolute right-2xl md:right-40 px-4">
            <h1 class="text-white text-2xl md:text-4xl font-bold mb-4 ">
                    Do you want to earn with us?
                   <br> Don't wait, join us now!
            </h1>
            <ButtonComponent text="Drive A Car" />
        </div>
        <div class="md:absolute inset-0 bg-[#01d28e] clip-slant w-1/2"></div>
    </div>
</template>

<script setup>

import ButtonComponent from './ButtonComponent.vue';

</script>

<style>
.clip-slant {
    clip-path: polygon(0 0, 90% 0, 70% 100%, 0 100%);
}</style>