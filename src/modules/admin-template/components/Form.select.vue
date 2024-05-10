<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <label class="text-black-900 mb-3 block text-sm font-medium dark:text-gray-50">
      <slot>{{ $t('form.select_default') }} </slot>
    </label>
    <div class="dark:bg-zinc-950 relative z-20 bg-white">
      <span class="absolute left-4 top-1/2 z-30 -translate-y-1/2">
        <RectangleGroupIcon class="h-5 w-5" />
      </span>
      <select
        :disabled="list?.length === 0"
        v-model="model"
        :class="{ '!border-red-600': hasError }"
        class="dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 w-full rounded-lg border border-gray-100 bg-transparent appearance-none px-12 py-3 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-100 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50"
      >
        <option value="-1">{{ placeholder }}</option>
        <option
          v-for="(data, index) in list"
          :key="index"
          class="text-gray-900 dark:text-gray-100"
          :value="data.id"
        >
          {{ data.title || data.label || data.name || data.email || data.userName }}
        </option>
      </select>
      <span class="absolute right-4 top-1/2 z-10 -translate-y-1/2">
        <ChevronDownIcon class="h-6 w-6" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ModelRef, PropType } from 'vue'
import { ChevronDownIcon, RectangleGroupIcon } from '@heroicons/vue/24/solid'
import { i18n } from '@/core/services/base/translation'

const model: ModelRef<any> = defineModel({ required: true })

defineProps({
  hasError: {
    type: Boolean,
    default: false
  },
  list: {
    type: Array as PropType<any[]>,
    require: true
  },
  placeholder: {
    type: String,
    default: i18n.global.t('form.place_holder.default')
  }
})
</script>
