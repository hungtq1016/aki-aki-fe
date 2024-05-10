<template>
  <BlogList :list="updateData" :title="String(route.params.slug)" />
  <BlogPagination />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import BlogList from '../components/Blog.list.vue'
import { data } from '../services/data/data'
import type { TBlog, TBlogItem } from '../models/type'
import { computed } from 'vue'
import BlogPagination from '../components/Blog.pagination.vue'
const route = useRoute()

function getValueByKey(obj: TBlog, key: string): TBlogItem[] {
  if (key in obj) {
    return obj[key]
  } else {
    return []
  }
}

const updateData = computed(() => getValueByKey(data, String(route.params.slug)))
</script>
