<template>
  <div>
    <img :src="getImage(image)" :alt="name"  class="" />
    <p>{{ comment }}</p>
    <h2>{{ name }}</h2>
    <p>{{ position }}</p>
  </div>
</template>


<script setup >
defineProps({
  name: String,
  position:String,
  image:String,
  comment:String
});
const getImage = (imageName) => {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
};
</script>

<style>

</style>