<template>
  <div>
    <SectionHeading description="what we offer" title="Featured Vehicles" />
    <div class="w-full h-full px-50 py-10 md:py-20">
      <swiper
      :modules ="[Autoplay]"
      :space-between="100"
      navigation
      loop
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :breakpoints="{
        640: {
          slidesPerView: 2,
        },
        // 768: {
        //   slidesPerView: 2,
        // },
        1024: {
          slidesPerView: 3,
        },
      }"
      class="custom-swiper w-4/5 drop-shadow-2xl"
      >
        <swiper-slide v-for="(car, index) in cars" :key="index">
          <CarCard
            :id="car.id"
            :name="car.name"
            :brand="car.brand"
            :price="car.price"
            :image="car.image"
          />
        </swiper-slide>
      </swiper>

    </div>
    <!-- Removed extra CarCards component outside the loop -->
  </div>
</template>

<script setup>
import SectionHeading from "../composobles/SectionHeading.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/swiper-bundle.css";
import {Autoplay } from 'swiper/modules';
import  "swiper/css/autoplay";
import CarCard from "../cards/CarCard.vue";
import { cars } from "../../data/carsData.js";
</script>

<style>
.custom-swiper {
  position: relative;
  padding: 0 20px; /* Add some padding to prevent arrows from being cut off */
}

.custom-swiper .swiper-button-prev {
  left: -10px !important; /* Adjust this value to move the left arrow further left */
}

.custom-swiper .swiper-button-next {
  right: -10px !important; /* Keep or adjust the right arrow as needed */
}

/* Optional: Style the arrows */
.custom-swiper .swiper-button-prev,
.custom-swiper .swiper-button-next {
  color: #000; /* Arrow color */
  background: rgba(255, 255, 255, 0.8);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.custom-swiper .swiper-button-prev::after,
.custom-swiper .swiper-button-next::after {
  font-size: 20px; /* Arrow size */
  font-weight: bold;
}
</style>
