<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="ml-auto max-w-md">
    <div class="mb-2.5 rounded-2xl rounded-br-none bg-cerulean-600 py-3 px-5">
      <p class="font-medium text-white">{{ message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  message: string
}>()


</script>

<style scoped></style>
