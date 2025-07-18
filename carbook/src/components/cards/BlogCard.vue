<template>
    <div class="space-y-2 pt-5">
    <img :src="getImage(image)" :alt="date"  class="object-cover h-56 w-full"/>
  
        <p class="text-sm text-blue-500">
            {{ date }}
            {{ author }}
            {{ comments?.length }} {{ comments > 1 ? 'comments' : 'comment' }}
         </p>
         <h2 class="text-xl font-medium text-gray-800 mt-2">{{ title }}</h2>
         <ButtonComponent text="Read More" />
    </div>

</template>

<script setup>
import { defineProps } from "vue";
import ButtonComponent from "../composobles/ButtonComponent.vue";
defineProps({
  id: Number,
  date: String,
  title: String,
  image: String,
  author: String,
 comments: Number,

});

const getImage = (imageName) => {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
};
</script>

<style>

</style>