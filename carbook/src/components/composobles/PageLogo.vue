<template>
  <router-link to="/">
    <h1 class="text-xl font-bold cursor-pointer">
      <span :class="carClass">CAR</span>
      <span class="text-green-500">BOOK</span>
    </h1>
  </router-link>
</template>

<script>
import { computed, onBeforeMount, onMounted, ref } from "vue";
export default {
  setup() {
    const isScrolled = ref(false);
    const isMobile = ref(window.innerWidth < 760);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };
    const handleResize = () => {
      isMobile.value = window.innerWidth < 760;
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
    });
    onBeforeMount(() => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    });
    const carClass = computed(() => {
      if (isMobile.value) return "text-black";
      return isScrolled.value ? "text-black" : "text-white";
    });
    return {
      carClass,
    };
  },
};
</script>

<style></style>
b
