<template>
    <div class="dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border border-gray-200 bg-white shadow"
        :class="{ '!border-green-600': !isError }">

          <div class="px-6.5 dark:border-zinc-900 border-b border-gray-200 py-4">
            <h3 class="text-black-1000 font-medium dark:text-white">{{ $t('form.heading') }}</h3>
          </div>
          <div class="p-6.5 flex flex-col gap-4">
            <div>
              <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white"> {{ $t('form.title') }}
              </label>
              <input v-model="model.title" type="text" :placeholder="$t('form.place_holder.title')"
                :class="{ '!border-red-600': isError }"
                class="text-black-1000 bg-gray-50 w-full rounded-lg border border-gray-200 bg-transparent px-5 py-3 font-normal outline-none transition 
                dark:border-zinc-800 dark:bg-zinc-900 dark:text-white" />
            </div>
            <div>
              <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white"> {{ $t('form.slug') }}
              </label>
              <input v-model="model.slug" type="text" :placeholder="$t('form.place_holder.slug')" disabled="true" 
              class=" dark:border-zinc-900 dark:bg-zinc-950 dark:text-white
              dark:disabled:!bg-black-950 dark:disabled:!text-gray-100
                text-black-1000 w-full rounded-lg border border-gray-200 bg-transparent px-5 py-3 font-normal outline-none transition 
                disabled:cursor-default disabled:!bg-gray-100 disabled:!text-gray-600" />
            </div>
          </div>
        </div>
</template>

<script setup lang="ts">
import type { ModelRef } from 'vue';

const model:ModelRef<any> = defineModel({required:true})

defineProps<{
  isError: Boolean
}>()
</script>

<style scoped>

</style>