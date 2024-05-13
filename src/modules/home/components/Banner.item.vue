<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="relative">
    <img
      class="relative z-0 w-full object-cover"
      :src="imageBuilderUrl(data.imageUrl)"
      :alt="data.label"
    />
  </div>
</template>

<script setup lang="ts">
import { imageBuilderUrl } from '@/core/services/utils/util.string'
import type { TUrl } from '@/modules/admin-branch/models/type'

defineProps<{
  data: TUrl
}>()
</script>
