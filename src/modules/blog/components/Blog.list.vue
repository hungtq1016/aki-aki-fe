<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex justify-between items-center">
        <div
        class="uppercase bg-cerulean-600 text-base w-fit font-bold text-center rounded-md text-white py-3 px-6 mb-11 mt-12">
        {{ title }}
    </div>
    <router-link v-if="route.name == 'blogs'"
    class="text-cerulean-400 hover:text-cerulean-600"
    :to="`/blogs/${title}`">More</router-link>
    </div>
    <div class="grid gap-6 gap-y-[54px] md:grid-cols-2 lg:grid-cols-3">
        <BlogItem v-for="data in list" :key="data.title" :data="data"/>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import type { TBlogItem } from '../models/type';
import BlogItem from './Blog.item.vue';
const route = useRoute()
defineProps<{
    list: Array<TBlogItem>
    title: string
}>()
</script>
