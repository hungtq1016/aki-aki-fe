<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="max-w-md">
   
    <div class="mb-2.5 rounded-2xl rounded-tl-none bg-zircon-50 py-3 px-5 dark:bg-shark-950">
      <p class="font-medium">{{ data.message }}</p>
    </div>

  </div>
</template>

<script setup lang="ts">

import type { TChat } from '@/modules/include/models/type'

defineProps<{
  data: TChat
}>()


</script>

<style scoped></style>
