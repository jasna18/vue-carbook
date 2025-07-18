<template>
    <div>
        <SectionHeading title="Recent Blog" description="Blogs" />
        <section class="flex flex-col justify-center gap-10 p-10 md:flex-row md:py-20">
            <BlogCard v-for="(blog, index) in blogs" :key="index" :id="blog.id" :date="blog.date" :title="blog.title"
                :image="blog.image" :author="blog.author" :comments="blog.comments" :description="blog.description"
                :class="'md:w-80'" />
        </section>
    </div>
</template>

<script setup>
import SectionHeading from "../composobles/SectionHeading.vue";
import BlogCard from "../cards/BlogCard.vue";
import { blogs } from "../../data/blogData.js";
</script>

<style></style>