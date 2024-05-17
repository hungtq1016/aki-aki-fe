<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="ml-auto max-w-md">
    <div class="mb-2.5 rounded-2xl rounded-br-none bg-cerulean-600 py-3 px-5">
      <p class="font-medium text-white">{{ data.message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

import type { TChat } from '@/modules/include/models/type';

defineProps<{
  data: TChat
}>()


</script>

<style scoped></style>
