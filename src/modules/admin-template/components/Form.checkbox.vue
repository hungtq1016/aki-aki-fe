<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <label class="text-black-900 py-1 block text-sm font-medium dark:text-gray-50">
    <slot>{{ $t('form.select_default') }} </slot>
  </label>

  <ul class="flex flex-col gap-2">
    <li v-for="(item, index) in list" :key="index">
      <label :for="`checkbox-${index}`">
        <div class="border border-gray-100 relative dark:border-zinc-900 rounded-md">
          <input :checked="isChecked(item)" @change="toggleRole(item)" :disabled="disabled"
            class="absolute top-2 right-4 w-4 h-4 peer text-cerulean-600 bg-gray-100 border-gray-300 rounded checked:accent-cerulean-600"
            type="checkbox" :value="item" :id="`checkbox-${index}`" />
          <div
            class="flex justify-between px-4 py-2 bg-gray-100 peer-checked:bg-cerulean-100 dark:peer-checked:!bg-slate-950 dark:bg-zinc-950">
            <div class="flex gap-x-1 items-center capitalize text-gray-950 text-sm font-semibold dark:text-gray-50">
              {{ item.name || item.label || item.fullName }}
            </div>
          </div>
          <div
            class="border-t border-gray-100 bg-gray-50 px-4 dark:border-zinc-900 py-2 text-xs text-gray-600 peer-checked:bg-cerulean-50 dark:bg-zinc-800 dark:text-gray-300 dark:peer-checked:!bg-slate-900">
            {{ item.note || item.price || item.email }}
          </div>
        </div>
      </label>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  list: {
    type: [Array,Object],
    required: true
  },
  fetchedData: {
    type: Array,
    required: false,
    default: () => []
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
});

const emit = defineEmits(['update:modelValue']);

const fetched = ref(props.fetchedData);

const isChecked = (item: any) => fetched.value.some((data: any) => data.id === item.id);

function toggleRole(item: any) {
  const index = fetched.value.findIndex((data: any) => data.id === item.id);
  if (index !== -1) {
    fetched.value.splice(index, 1); // Remove item if it exists
  } else {
    fetched.value.push(item); // Add item if it doesn't exist
  }
  emit('update:modelValue', fetched.value);
}

watch(
  () => props.fetchedData,
  (newValue) => {
    if (newValue) {
      fetched.value = [...newValue];
    }
  },
  { deep: true }
);
</script>
