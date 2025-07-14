import {createRouter, createWebHistory} from 'vue-router'
import DefaultLayout from '../components/layout/DefaultLayout.vue'
import HomePage from '../page/HomePage.vue'
import AboutPage from '../page/AboutPage.vue'
import CarsPage from '../page/CarsPage.vue'
import BlogPage from '../page/BlogPage.vue'
import PricingPage from '../page/PricingPage.vue'
import ServicesPage from '../page/ServicesPage.vue'
import ContactPage from '../page/ContactPage.vue'


const routes = [
    {
        path:"/",
        component:DefaultLayout,
        children:[
            {
            path:"",
            name:"home",
            component: HomePage
            },
               {
            path:"/about",
            name:"about",
            component: AboutPage
            },
             {
            path:"/blog",
            name:"blog",
            component: BlogPage
            },
             {
            path:"/cars",
            name:"cars",
            component: CarsPage
            },
             {
            path:"/pricing",
            name:"Pricing",
            component: PricingPage
            },
             {
            path:"/services",
            name:"services",
            component: ServicesPage
            },
             {
            path:"/contact",
            name:"contact",
            component: ContactPage
            },
],
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;