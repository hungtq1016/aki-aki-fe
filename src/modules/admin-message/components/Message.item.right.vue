<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="ml-auto max-w-md">
    <p class="text-sm text-gray-60 text-right">{{ $t('content.me') }}</p>

    <div class="mb-2.5 rounded-2xl rounded-br-none bg-cerulean-600 py-3 px-5">
      <p class="font-medium text-white">{{ data.content  }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  data: any
}>()


</script>

<style scoped></style>
