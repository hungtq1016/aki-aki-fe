<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <label :for="id" class="block text-sm font-medium leading-6 text-gray-900">
            <slot>{{ $t('form.default') }}</slot>
        </label>
        <div class="mt-2">
            <input :id="id" v-model="model" 
                :type="type"
                :placeholder="placeholder"
                :disabled="disabled"
                :class="{ '!ring-red-600': hasError }"
                @keyup="$emit('keyup',$event)"
                @keydown="$emit('keydown', $event)"
                class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-inset focus:ring-cerulean-600 sm:text-sm sm:leading-6" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { BaseInputType } from '@/core/models/type';
import { i18n } from '@/core/services/base/translation';
import { v4 } from 'uuid';
import type { ModelRef, PropType } from 'vue';

const props = defineProps({
  hasError: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: i18n.global.t('form.place_holder.default')
  },
  type: {
    type: String as PropType<BaseInputType>,
    default: 'text'
  }
})

const id = props.type + v4()

const model: ModelRef<string> = defineModel({required:true})
  const emits: (event: 'keyup' | 'keydown', ...args: any[]) => void = defineEmits(['keyup', 'keydown']);

</script>

