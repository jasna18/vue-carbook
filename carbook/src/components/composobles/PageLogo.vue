<template>
  <router-link to="/">
    <h1 class="text-xl font-bold cursor-pointer">
        <span :class="carClass">CAR</span>
        <span>BOOK</span>
    </h1>
    </router-link>
</template>

<script>
import { computed, onBeforeMount,onMounted,ref } from 'vue';
export default {
    setup() {
        const isScrolled = ref(false);
        const isMobile = ref(window.innerWidth < 760);
        const handleScroll = () => {
            isScrolled.value = window.scrollY > 50;
        };
        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
            });
            onBeforeMount(() => {
            window.removeEventListener('scroll', handleScroll);
            });
            const carClass = computed( () =>{
                if(isMobile.value) return "text-black";
                return isScrolled.value ? "text-black" : "text-white";

            });
            return {
                carClass
            }
    
    }
}
</script>

<style>

</style>                                                       b 