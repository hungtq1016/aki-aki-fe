<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="dark:border-zinc-950 dark:bg-zinc-950/90 rounded-sm border border-gray-100 bg-white shadow"
    :class="{ '!border-green-600': areTrue }"
  >
    <div class="px-6.5 py-4 border-b border-gray-100 dark:border-zinc-950 dark:!bg-zinc-950">
      <h3 class="text-black-1000 font-medium dark:text-white">
        <slot name="heading">
          {{ $t('form.default_title') }}
        </slot>
      </h3>
    </div>
    <div class="gap-5.5 p-6.5 flex flex-col">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps<{
  hasError: boolean[]
}>()

const areTrue = computed(()=>props.hasError.every(item=>item===false))

</script>
