<template>
    <div class="dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border border-gray-200 bg-white shadow"
        :class="{ '!border-green-600': !isError }">
          <div class="border-gray-200 px-6.5 dark:border-zinc-900 border-b py-4">
            <h3 class="text-black-1000 font-medium dark:text-white">{{ $t('form.category') }}</h3>
          </div>
          <div class="gap-5.5 p-6.5 flex flex-col">
            <div>
              <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white"> {{
                $t('form.select_category') }} </label>
              <div class="dark:bg-zinc-950 relative z-20 bg-white">
                <span class="absolute left-4 top-1/2 z-30 -translate-y-1/2">
                  <RectangleGroupIcon class="h-5 w-5" />
                </span>
                <select :disabled="categories.length == 0" v-model="model.categoryId"
                  :class="{ '!border-red-600': isError }" class=" dark:border-zinc-900 dark:bg-zinc-950 r
                    elative z-20 w-full appearance-none rounded border bg-transparent px-12 py-3 outline-none transition border-gray-200
                    disabled:!bg-gray-600 disabled:!text-gray-100 capitalize">
                  <option value="-1">{{ $t('form.select_category') }}</option>
                  <option v-for="(data, index) in categories" :key="index" class="text-gray-900 dark:text-gray-100"
                    :value="data.id">{{ data.title }}</option>
                </select>
                <span class="absolute right-4 top-1/2 z-10 -translate-y-1/2">
                  <ChevronDownIcon class="h-6 w-6" />
                </span>
              </div>
            </div>
          </div>
        </div>
</template>

<script setup lang="ts">
import { get } from '@/core/services/helpers/request.helper';
import type { TCategory } from '@/modules/admin-blog/models/type';
import type { ModelRef, Ref } from 'vue';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/24/solid';

const model:ModelRef<any> = defineModel({required:true})
const categories: Ref<TCategory[]> = ref([])
defineProps<{
  isError: Boolean
}>()

onMounted(() => {
  get<TCategory[]>("/api/categories").then(response => {
    categories.value = response?.data || []
  })
})
</script>
