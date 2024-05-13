<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="py-5 md:py-10 md:px-5">
    <Flicking :options="slickOptions" :plugins="plugins">
      <BlogItem v-for="(data, index) in blogs" :key="index" :data="data" />
      <template #viewport>
        <span class="flicking-arrow-prev"></span>
        <span class="flicking-arrow-next"></span>
      </template>
    </Flicking>
  </div>
</template>

<script setup lang="ts">
import '@egjs/flicking-plugins/dist/arrow.css'

import Flicking from '@egjs/vue3-flicking'
import { blogs as data } from '../services/data/data'
import { Arrow } from '@egjs/flicking-plugins'
import { slickOptions } from '../services/data/options'
import BlogItem from './Blog.item.vue'
import { onMounted, ref } from 'vue'
import type { TBlog } from '@/modules/admin-blog/models/type'
import { get } from '@/core/services/helpers/fetcher.helper'
import type { TPaginationResponse } from '@/core/models/type'

const plugins = [new Arrow()]

const blogs = ref<TBlog[]>(data.value)

onMounted(() => {
  get<TPaginationResponse<TBlog>>('/api/blogs/page').then((res) => {
    if (res?.data) {
      blogs.value = res.data.data
    }
  })
})
</script>
