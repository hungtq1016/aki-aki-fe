<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex justify-between items-center">
    <div
      class="uppercase bg-cerulean-600 text-base w-fit font-bold text-center rounded-md text-white py-3 px-6 my-5"
    >
      {{ data.title }}
    </div>
    <router-link
      v-if="route.name == 'blogs'"
      class="text-cerulean-400 hover:text-cerulean-600"
      :to="`/blogs/${data.slug}`"
      >{{ $t('content.more') }}</router-link
    >
  </div>
  <div class="grid gap-6 gap-y-[54px] md:grid-cols-2 lg:grid-cols-3">
    <BlogItem v-for="blog in blogs" :key="blog.id" :data="blog" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import BlogItem from './Blog.item.vue'
import type { TBlog, TCategoryResponse } from '@/modules/admin-blog/models/type';

const route = useRoute()

defineProps<{
  data: TCategoryResponse,
  blogs: TBlog[],
}>()
</script>
