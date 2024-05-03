<template>
  <div class="text-lg">
    <span class="font-medium">{{ $t('content.search-result') }}:</span> <span class="text-gray-600">{{ route.query.q }}</span>
  </div>

  <BlogList :list="updateData" title="search" />
  <BlogPagination />

</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import BlogList from '../components/Blog.list.vue';
import { data } from '../services/data/data'
import type { TBlog, TBlogItem } from '../models/type';
import { computed } from 'vue';
import BlogPagination from '../components/Blog.pagination.vue';
const route = useRoute()

function getValueByKey(obj: TBlog, key: string): TBlogItem[] {
  if (key in obj) {
    return obj[key];
  } else {
    return [];
  }
}

const updateData = computed(() => getValueByKey(data, String(route.params.slug)))

</script>
