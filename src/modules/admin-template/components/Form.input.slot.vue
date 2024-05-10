<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white">
      <slot name="label">
        {{ $t('form.default_title') }}
      </slot>
    </label>
    <div class="border border-gray-200 dark:border-zinc-900 dark:bg-zinc-900" :class="{ '!border-red-600': hasError }">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps < {
  hasError: boolean
} > ()
</script>