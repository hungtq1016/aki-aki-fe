<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <label class="text-black-900 mb-3 block text-sm font-medium dark:text-gray-50">
      <slot>{{ $t('form.multiple_select_default') }}</slot>
    </label>
    <Multiselect
      class="!text-black-1000 dark:border-zinc-900 w-full border-gray-200 bg-transparent font-normal outline-none transition disabled:cursor-default disabled:bg-gray-200 dark:text-white"
      v-model="model"
      deselect-label="Can't remove this value"
      track-by="title"
      label="title"
      :placeholder="placeholder"
      :options="list"
      :searchable="false"
      :allow-empty="false"
    >
      <template v-slot:singleLabel="{ option }">
        <span>{{ option.title }}</span>
      </template>
    </Multiselect>
  </div>
</template>

<script setup lang="ts">
import { i18n } from '@/core/services/base/translation'
import type { ModelRef, PropType } from 'vue'
import Multiselect from 'vue-multiselect'
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
    default: i18n.global.t('form.place_holder.multiple_select_default')
  }
})
</script>
