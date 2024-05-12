<template>
  <section class="pb-10">
    <div>
      <div class="text-xl font-bold leading-10 mb-2">{{ $t('content.related_articles') }}</div>
      <div v-if="!props">{{ $t('message.not_available') }}</div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BlogItem v-for="data in blogs" :key="data.id" :data="data" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, type Ref } from 'vue';
import BlogItem from '../components/Blog.item.vue'
import type { TPaginationResponse } from '@/core/models/type';
import type { TBlog } from '@/modules/admin-blog/models/type';
import { get } from '@/core/services/helpers/fetcher.helper';

const props = defineProps<{
  slug: string
}>()

const blogs: Ref<TBlog[]> = ref([])

watch(()=>props.slug,(newValue)=>{
    if(newValue !== undefined)
    get<TPaginationResponse<TBlog>>('/api/blogs/category/'+props.slug+'?pageSize=3').then(res=>{
    if (res?.data) {
      blogs.value = res.data.data
    }
  })
})

</script>
