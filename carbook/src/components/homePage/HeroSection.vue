<script setup>
import bgImage from "../../assets/images/bg_1.png";
</script>

<template>
    <section class="bg-cover relative h-screen" :style="{ backgroundImage: `url(${bgImage})` }">
<div class="container">
    <h1 class="text-center">Welcome to my website</h1>
        <p class="text-center">This is a simple hero section with a background image.</p>
</div>
    </section>
</template>