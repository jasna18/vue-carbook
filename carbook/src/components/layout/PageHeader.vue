<template>
<header>
    <div>    
        <PageLogo/>
        <nav>
            <router-link
                v-for="link in links"
                :key="link.path"
                :to="link.path"
                :class="{'active-link': $route.path === link.path}"
            >
                {{ link.name }}
            </router-link>
        </nav>
   </div>
</header>
</template>

<script setup>
import {useRoute} from 'vue-router';
import PageLogo from '../composobles/PageLogo.vue';

const route = useRoute();

const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Cars', path: '/cars' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
];

// export default {
//     components: {
//         PageLogo
//     },
// }
</script>

<style>

</style>