<template>
  <section class="pb-10 bg-cerulean-500">
    <div class="max-w-screen-xl m-auto">
      <div class="py-5 md:py-10 md:px-5">
        <div class="grid grid-cols-2">
          <div>
            <h1
              class="text-2xl leading-[45px] uppercase text-center font-semibold mb-10 text-white relative after:contents-[''] after:h-pxafter:w-32 after:absolute after:left-1/2 after:-bottom-3 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-white"
            >
              {{ blog.title }}
            </h1>
            <p class="text-white text-justify" v-html="formatText(blog.desc)"/>
            <div class="py-5">
              <GalleryList />
            </div>
          </div>
          <div class="relative">
            <img
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px]"
              :src="imageBuilderUrl(blog.imageUrl)"
              :alt="blog.title"
            />
          </div>
        </div>
        <GalleryFlick />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import GalleryFlick from '../components/Gallery.flick.vue'
import GalleryList from '../components/Gallery.list.vue'

import { onMounted, ref, type Ref } from 'vue'
import type { TBlog } from '../models/type'
import { get } from '@/core/services/helpers/fetcher.helper'
import { imageBuilderUrl } from '@/core/services/utils/util.string'

const blog: Ref<TBlog> = ref({} as TBlog)

onMounted(() => {
  get<TBlog>('/api/blogs/slug/chuyen-mon-cua-chung-toi?show=true').then((res) => {
    if (res?.data) {
      blog.value = res.data
    }
  })
})
const formatText = (text:string) => {
    if (text === undefined || text === null) {
      return ''; // Return empty string if text is undefined or null
    }
    return text.replace(/\n/g, '<br>');
};

</script>
