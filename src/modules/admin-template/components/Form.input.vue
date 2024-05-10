<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <label
      class="text-black-1000 mb-3 block text-sm font-medium dark:text-white"
    >
      <slot>
        {{$t('form.default_title')}}
      </slot>
    </label>
    <input
      v-model="model"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      :class="{ '!border-red-600': hasError }" 
      class="dark:border-zinc-900 dark:bg-zinc-950 dark:text-white dark:disabled:!bg-black-950 dark:disabled:!text-gray-100 text-black-1000 w-full rounded-lg border border-gray-200 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-100 disabled:!text-gray-600"
    />
  </div>
</template>

<script setup lang="ts">
import { i18n } from '@/core/services/base/translation';
import type { ModelRef, PropType } from 'vue';
import type { BaseInputType } from '@/core/models/type';

defineProps({
  hasError: {
        type: Boolean,
        default: false,
  },
  disabled : {
    type: Boolean,
    default: false
  },
  placeholder : {
    type: String,
    default: i18n.global.t('form.place_holder.default')
  },
  type : {
    type: String as PropType<BaseInputType>,
    default: 'text'
  }
})

const model:ModelRef<any> = defineModel({required:true})

</script>
