<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="grid grid-cols-12 border-b border-zumthor-100 py-3.5 pl-5 pr-6 dark:border-oxford-blue-900"
  >
    <div class="col-span-3">
      <p class="font-medium">{{ data.medicine?.title }}</p>
    </div>
    <div class="col-span-4">
      <p class="font-medium">{{ data.medicine?.brand }}</p>
    </div>
    <div class="col-span-2">
      <p class="font-medium">{{ data.quantity }}</p>
    </div>
    <div class="col-span-2">
      <p class="font-medium">{{ data.usage }}</p>
    </div>
    <div class="col-span-1 inline-flex justify-center items-center">
      <button>
        <TrashIcon class="w-5 h-5 text-red-600" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/outline'
import type { TPrescriptionDetailRequest } from '../models/type';

defineProps<{
  data: TPrescriptionDetailRequest
}>()
</script>
