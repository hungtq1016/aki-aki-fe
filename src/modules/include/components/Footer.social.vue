<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a target="_blank" :href="data.slug">
    <img class="w-12" :alt="data.type" :src="data.imageUrl" />
  </a>
</template>

<script setup lang="ts">
import type { TUrl } from '@/modules/admin-branch/models/type';

defineProps<{
  data: TUrl
}>()
</script>
