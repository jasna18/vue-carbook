<template>
  <div
    class="text-center pt-10 md:pt-20 content-wrapper"
    :class="{ 'animate-in': isVisible }"
    ref="content"
  >
    <p
      v-if="description"
      class="text-sm text-blue-500 uppercase tracking-wider font-medium"
    >
      {{ description }}
    </p>
    <h1 class="text-2xl md:text-4xl font-semibold text-gray-900">
      {{ title }}
    </h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
defineProps({
  title: String,
  description: String,
});
const isVisible = ref(false);
const content = ref(null);
onMounted(() => {
  // Check if the content is visible in the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    },
    { threshold: 0.3 }
  );

  if (content.value) {
    observer.observe(content.value);
  }
});
</script>

<style>
.content-wrapper {
  transform: translateY(100px);
  opacity: 0;
  transition: all 1s ease-in-out;
}
.content-wrapper.animate-in {
  transform: translateY(0);
  opacity: 1;
}
</style>
