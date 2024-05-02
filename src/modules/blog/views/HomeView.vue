<template>
    <BlogList v-for="([title,list],index) in Object.entries(data)" :key="index" :list="list.slice(0,3)" :title="title"/>
</template>

<script setup lang="ts">
import BlogList from '../components/Blog.list.vue';
import { data } from '../services/data/data'
</script>
