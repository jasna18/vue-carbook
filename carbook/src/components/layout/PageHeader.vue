<template>
<header class="flex justify-center px-6 z-50 fixed w-full top-0 p-2">
    <div class="flex justify-between items-center w-full md:w-5/6 md-relative z-50">    
        <PageLogo/>
        <nav class="space-x-6 hidden md-flex">
            <router-link
                v-for="link in links"
                :key="link.path"
                :to="link.path"
                :class="{'active-link': $route.path === link.path}"
            >
                {{ link.name }}
            </router-link>
        </nav>
        <!-- mobile hamberger menu -->
         <div class="flex md:hidden">
            <button @click="toggleMenu">
                <FaBarsStaggered/>
            </button>
            <div v-if="menuVisible" class="absolute top-16 left-0 bg-white shadow-lg w-full p-4
            flex flex-col space-y-6">
                <router-link v-for="link in links" 
                :key="link.path"
                :to="link.path"
                :class="{ 'active-link': $route.path === link.path }"
                @click="menuVisible = false"
                >
                {{ link.name }}
                </router-link>
                </div>
         </div>
   </div>
</header>
</template>

<script setup>
import {useRoute} from 'vue-router';
import PageLogo from '../composobles/PageLogo.vue';
import { computed, onBeforeMount,onMounted,ref } from 'vue';
import { FaBarsStaggered } from '@kalimahapps/vue-icons';

const route = useRoute();
const isScrolled = ref(false)
const menuVisible = ref(false)

const toggleMenu = () => {
    menuVisible.value = !menuVisible.value;
};
const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Cars', path: '/cars' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
];

const headerClass = computed(() => ({
    "sm:bg-transparent": !isScrolled.value,     
    "sm:bg-white": isScrolled.value,  
    "shadow-md": isScrolled.value,  
    "p-4":true,
    "sm:py-10":!isScrolled.value

}));
 const handleScroll = () => {
    isScrolled.value = window.scrollY > 50; 
 } 
 onMounted(() => {
    window.addEventListener('scroll', handleScroll);
 });
 onBeforeMount(() => {
    window.removeEventListener('scroll', handleScroll);
 });
</script>

<style>
nav a{
    color:white;
    transition: color 0.3s ease;
}
nav a.active-link{
    color: #10b981; /* Tailwind's indigo-600 */
    font-weight: bold;
}
</style>