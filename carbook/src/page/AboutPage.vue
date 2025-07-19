<template>
    <div>
        <BgContainer title="About" bgImage="bg_3.jpg" :links="[
            {text: 'Home', to: '/' },
            {text: 'About Us', to: '/about'}
        ]" />
        <AboutUs />
        <ServiceList />
    <CalltoAction />
    <TestimonySection/>
    <BlogSection />
    <StatisticSection />
    </div>
</template>

<script setup>
import BgContainer from '../components/composobles/BgContainer.vue';
import  AboutUs from '../components/composobles/AboutUs.vue';
import ServiceList from "../components/composobles/ServiceList.vue";
import CalltoAction from "../components/composobles/CalltoAction.vue";
import TestimonySection from "../components/homePage/TestimonySection.vue";
import BlogSection from "../components/homePage/BlogSection.vue";
import StatisticSection from "../components/composobles/StatisticSection.vue";

</script>
