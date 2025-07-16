<template>
  <div class="max-w-80 bg-white roumded-sm overflow-hidden shadow-md">
    <img :src="getImage(image)" :alt="name" class="w-full h-56 object-cover"/>
    <div class="p-6 space-y-2">
      <h3 class="text-xl font-medium text-gray-800">{{ name }}</h3>
      <div class="flex justify-between items-center">
        <p class="text-md text-gray-400">{{ brand }}</p>
        <p class="text-md text-blue-400 font-semibold">{{ price }}
          <span class="text-gray-400 text-sm font-light">/day</span>
        </p>
      </div>
      <div class="flex justify-between">
        <!-- adding props from button  -->
    <ButtonComponent text="Book Now"/>
    <ButtonComponent text="Details" bg-color="bg-green-500"/>
      </div>
    </div>
  </div>
</template>
<!-- props taken fron cardata -->
<script setup>
import { defineProps } from "vue";
import ButtonComponent from "../composobles/ButtonComponent.vue";
defineProps({
  id: Number,
  name: String,
  brand: String,
  price: String,
  image: String,
});
const getImage = (imageName) => {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
};
</script>

<style></style>
