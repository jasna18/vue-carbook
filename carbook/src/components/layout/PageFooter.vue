<template>
  <div class="bg-black text-white p-4 md:p-20 py-10">
    <div>
      <div class="flex flex-col md:flex-row justify-between gap-10  ">
        <div class="md:w-1/5 space-y-6">
          <h1 class="text-xl font-bold cursor-pointer">
            <span class="text-white">CAR</span>
            <span class="text-green-500">BOOK</span>
          </h1>
          <p class="text-gray-200 text-base mb-4">
            Lorem ipsum dolor sit amet,
            <br> consectetur adipiscing elit

          </p>
          <div class="flex items-center justify-between text-2xl  w-1/2">
            <FaBandsXTwitter />
            <CgFacebook />
            <BsInstagram />
          </div>
        </div>
        <FooterLinks title="Information" :links="informationLinks" />
        <FooterLinks title="Customer Support" :links="customerSupportLinks" />
        <div class="md:w-1/5">

          <h2 class="text-xl font-semibold mb-2">
            Have a question?
          </h2>
          <div class="flex flex-col space-y-4 mt-2">
            <div v-for="(info, index) in contactInfo" :key="index" class="flex items-start space-x-2 mb-2">
              <div>
              <component :is="info.icon" class="text-md text-white" /></div>
               <p class="text-gray-200 text-md">{{ info.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="text-gray-200 text-md text-center mt-16">Copyright ©2025 Made with love by Jasna M Naz ❤️</p>
      </div>
    </div>

  </div>

</template>

<script setup>

import { CgFacebook, FaBandsXTwitter, BsInstagram, AkLocation, AnOutlinedMail, BsTelephoneFill } from '@kalimahapps/vue-icons';
import FooterLinks from "../composobles/FooterLinks.vue";
const informationLinks = [
  "About",
  "Services",
  "Terms and Conditions",
  "Best Price",
  "Guarantee",
  "Privacy & Cookies Policy",
];

const customerSupportLinks = [
  "FAQ",
  "Payment Option",
  "Booking Tips",
  "Cancellation Policy",
  "How it Works",
  "Contact Us",
];

const contactInfo = [
  {
    icon: AkLocation,
    text: "203 Fake St. Mountain View, San Francisco, California, USA",
  },
  { icon: AnOutlinedMail, text: "+2 392 3929 210" },
  { icon: BsTelephoneFill, text: "info@yourdomain.com" },
];
</script>

<style></style>
