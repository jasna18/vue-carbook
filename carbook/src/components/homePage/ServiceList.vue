<template>
  <div>
    <SectionHeading title="Our Latest Services" description="Services" />
    <div
      class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 py-20 md:py20"
    >
      <div v-for="(event, index) in events" :key="index" class="w-full md:w-60">
        <div
          class="bg-blue-600 w-20 h-20 rounded-full flex justify-center items-center md:h-24 md:w-24 mx-auto mb-4"
        >
          <component :is="event.icon" class="text-white text-2xl md:text-4xl" />
        </div>
        <div class="text-center p-4">
          <h2 class="text-lg md:text-xl font-semibold text-gray-800 mt-2">
            {{ event.title }}
          </h2>
          <p class="text-gray-400 text-md mt-2">
            {{ event.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionHeading from "../composobles/SectionHeading.vue";
import { ref } from "vue";
import { AkHeart, IcCity, MaAirport } from "@kalimahapps/vue-icons";

const events = ref([
  {
    title: "Wedding Ceremony",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    icon: AkHeart,
  },
  {
    title: "City Transfer",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    icon: IcCity,
  },
  {
    title: "Airport Transfer",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    icon: MaAirport,
  },
  {
    title: "Whole City Tour",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    icon: IcCity,
  },
]);
</script>

<style></style>
