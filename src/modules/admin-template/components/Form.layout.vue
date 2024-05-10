<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form @submit.prevent="submit" class="min-h-screen">
    <div class="grid grid-cols-1 gap-9 sm:grid-cols-2">
      <slot></slot>
    </div>
  </form>
</template>

<script setup lang="ts">
defineProps<{
  submit: () => Promise<void>
}>()
</script>
