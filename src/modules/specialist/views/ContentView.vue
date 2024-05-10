<template>
  <div v-if="data?.content == undefined">{{ $t('message.not_available') }}</div>
  <div v-html="data?.content" v-else />
</template>

<script setup lang="ts">
import { mockdata } from '../services/data/data'
import { useRoute } from 'vue-router'
const route = useRoute()

const data = mockdata.find((item) => item.slug === route.path)
</script>
