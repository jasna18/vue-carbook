<template>
  <div class="min-h-screen flex flex-col relative">
    <!-- header -->
    <PageHeader />

    <!-- main  -->
    <main class="flex-grow">
      <router-view></router-view>
    </main>

    <!-- footer -->
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";
export default {
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>

<style></style>
