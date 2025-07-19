<template>
    <section class = "flex flex-col md:flex-row justify-between" ref="statSection">
          <div
          v-for="(item , index) in stats"
          :key="index"
          :class="['p-6 h-36 md:h-72 w-full md:w-1/4 flex items-center md:justify-center gap-4' ,index===0 ? 'bg-blue-300/90' : 'bg-gray-100/60']">
  <h1 class ="text-5xl font-light text-blue-500">{{ item.count }}</h1>
  <p class="text-lg w-10 text-gray-900 leading-tight">{{ item.label }}</p>
  </div>

    </section>

</template>

<script setup>
import {ref} from 'vue';
import { onMounted } from 'vue';
const stats = ref([
{to: 60, label: "Years Experienced", count: 0},
{to: 1090, label: "Cars Sold", count: 0}, 
{to: 2590, label: "Happy Customers", count: 0},
 {to: 67, label: "Total Branches", count: 0}
])

const statSection = ref(null);
const startCounting = () => {
  stats.value.forEach((stat) => {
    let start = 0;
    const increment = stat.to /(2000/16);
    const timer =setInterval(() =>{
        start += increment;
        if (start >= stat.to) {
            start = stat.to;
            clearInterval(timer);
            }
            else {
            stat.count = Math.floor(start);
            }
    },16)
  })
}
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounting();
        observer.unobserve(statSection.value)
      }
    });
  }, { threshold: 0.5 });

  if(statSection.value){
  observer.observe(statSection.value);
  }
});
</script>

<style>

</style>