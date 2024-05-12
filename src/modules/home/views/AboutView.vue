<template>
  <section class="pb-10">
    <div class="max-w-screen-xl mx-auto">
      <div class="text-center">
        <div class="flex justify-between gap-x-8">
          <div class="basis-3/5">
            <div class="">
              <iframe v-html="blog.videoEmbed"></iframe>
            </div>
          </div>
          <div class="">
            <h1
              class="text-2xl leading-[45px] uppercase text-center font-semibold mb-10 text-cerulean-400 relative after:contents-[''] after:h-px after:w-32 after:absolute after:left-1/2 after:-bottom-3 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-cerulean-400"
              v-html="$t('about.title')"
            />

            <div class="text-justify text-gray-600">
              <p style="font-size: 1rem" v-html="$t('about.content')" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import type { TBlog } from '../models/type';
import { get } from '@/core/services/helpers/request.helper';

const blog: Ref<TBlog> = ref({} as TBlog)

onMounted(()=>{
  get<TBlog>('/api/blogs/ea1767a2-7e03-48e7-b874-0e16ac1b592d').then(res=>{
    if (res?.data) {
      blog.value = res.data
    }
  })
})
</script>