<script setup>
import bgImage from "../../assets/images/bg_1.png";
</script>

<template>
    <section class="bg-cover relative h-screen" :style="{ backgroundImage: `url(${bgImage})` }">
<div class="absolute inset-0 bg-black opacity-25"></div>
    <div class="relative flex items-center justify-center h-full text-center text-white px-4">
      <div class="w-full md:w-3/5">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Fast & Easy way to rent a car</h1>
        <p class="text-md md:text-xl mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
             sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    </section>
</template>
<style scoped>
section.bg-cover {
    /* Custom CSS for fallback or extra styles */
    background-size: cover;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    width: 100vw;
}
</style>