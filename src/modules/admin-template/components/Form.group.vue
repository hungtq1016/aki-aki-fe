<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border border-gray-200 bg-white shadow"
        :class="{ '!border-green-600': allTrue }">
        <div class="px-6.5 dark:border-zinc-900 border-b border-gray-200 py-4">
            <h3 class="text-black-1000 font-medium dark:text-white">
                <slot name="heading">
                    {{$t('form.default_title')}}
                </slot>
            </h3>
        </div>
        <div class="gap-5.5 p-6.5 flex flex-col">
            <slot name="content" ></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, type ComputedRef, type Ref } from 'vue';

const props = defineProps<{
    hasError: boolean[]
}>()

const array: Ref<boolean[]> = ref(props.hasError)
const allTrue: ComputedRef<boolean> = computed(()=>!array.value.some(item => !item));
  console.log(allTrue.value)
</script>
