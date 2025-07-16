<template>
  <div>
    <SectionHeading description="what we offer" title="Featured Vehicles" />
    <div v-for="(car, index) in cars" :key="index">
      <!-- props from carcard -->
      <CarCard
        :id="car.id"
        :name="car.name"
        :brand="car.brand"
        :price="car.price"
        :image="car.image"
      />
    </div>
    <!-- Removed extra CarCards component outside the loop -->
  </div>
</template>

<script setup>
import SectionHeading from "../composobles/SectionHeading.vue";
import CarCard from "../cards/CarCard.vue";
import { cars } from "../../data/carsData.js";
</script>

<style></style>
