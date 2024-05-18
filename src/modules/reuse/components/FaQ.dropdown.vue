<template>
  <div class="w-full">
    <FaQItem v-for="data in state" :key="data.id" :data="data" />
  </div>
</template>

<script setup lang="ts">
import FaQItem from './FaQ.item.vue'
import { faqs } from '../services/data/data'
import { onMounted, ref } from 'vue';
import type { TFaq } from '@/modules/admin-faq/models/type';
import { get } from '@/core/services/helpers/fetcher.helper';
import { useRoute } from 'vue-router';

const state = ref<TFaq[]>(faqs.value)

const route = useRoute()

const path = route.path.split('/')[1]

onMounted(()=>{
  get<TFaq[]>('/api/faqs/src/'+path).then(response => {
    if(response?.data) state.value = response.data
  })
})
</script>
