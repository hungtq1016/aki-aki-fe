<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-col gap-9" :class="{ 'flex-col-reverse': reverse }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  reverse: {
    type: Boolean,
    default: false,
    required: false
  }
})
</script>
