<template>
  <section class="pb-10">
    <div>
      <div class="text-xl font-bold leading-10 mb-2">{{ $t('content.related_articles') }}</div>
      <div v-if="!relate">{{ $t('message.not_available') }}</div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BlogItem v-for="data in updateData.slice(0, 3)" :key="data.title" :data="data" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BlogItem from '../components/Blog.item.vue'
import { blogs } from '../services/data/data'

const props = defineProps({
  relate: {
    type: String,
    require: false
  }
})

const updateData = computed(() => blogs.value.filter((item) => item.type == props.relate))
</script>
