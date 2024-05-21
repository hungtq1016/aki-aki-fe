<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="max-w-md">
    <p class="text-sm text-gray-60">{{ username }}</p>
    <div class="mb-2.5 rounded-2xl rounded-tl-none bg-zircon-50 py-3 px-5 dark:bg-shark-950">
      <p class="font-medium">{{ data.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  data: any
  username: string
}>()


</script>

<style scoped></style>
