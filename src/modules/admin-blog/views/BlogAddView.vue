<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form @submit.prevent="submit">
    <div class="grid grid-cols-1 gap-9 sm:grid-cols-2">
      <div class="flex flex-col gap-9">
        <HeadingView v-model="state" :is-error="Boolean(errorFields?.title?.length)"/>
        <div class="dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border border-gray-200 bg-white shadow"
        :class="{ '!border-green-600': !errorFields?.categoryId?.length }">
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
                <select :disabled="categories.length == 0" v-model="state.categoryId"
                  :class="{ '!border-red-600': errorFields?.categoryId?.length }" class=" dark:border-zinc-900 dark:bg-zinc-950 r
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
        <div class="dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border border-gray-200 bg-white shadow"
          :class="{ '!border-red-600': errorFields?.imageUrl?.length,'!border-green-600': !errorFields?.imageUrl?.length }">
          <div class="px-6.5 dark:border-zinc-900 border-b border-gray-200 py-4">
            <h3 class="text-black-1000 font-medium dark:text-white">{{ $t('form.image') }}</h3>
          </div>
          <div class="gap-5.5 p-6.5 flex flex-col">
            <div>
              <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white"> {{ $t('form.upload_image')
                }} </label>

              <div enctype="multipart/form-data" class="flex gap-x-2 items-center">

                <label for="image-upload" >
                  <input :disabled="hasImage"
                  id="image-upload" type="file" @change="handleFileChange" accept="image/*" ref="fileInput"
                    multiple class="hidden peer" />
                  <div 
                  class="bg-cerulean-600 flex justify-center rounded px-6 py-2 font-medium text-cerulean-100 cursor-pointer 
                    hover:bg-opacity-90 
                  dark:bg-cerulean-500 dark:text-cerulean-50
                  peer-disabled:!bg-cerulean-100 peer-disabled:!text-cerulean-600 peer-disabled:cursor-default">
                    <PlusIcon class="w-5 h-5" />
                  </div>
                </label>
                <button @click="removeImage" :disabled="!hasImage" 
                class="bg-cerulean-600 text-cerulean-100 flex justify-center rounded px-6 py-2 font-medium 
                  hover:bg-opacity-90 
                  dark:bg-cerulean-500 dark:text-cerulean-50
                  disabled:!bg-cerulean-100 disabled:!text-cerulean-600" type="button">
                  <XMarkIcon class="w-5 h-5" />
                </button>
                <button @click="uploadFile" :disabled="!hasImage" 
                  class="bg-cerulean-600 text-cerulean-100 flex justify-center rounded px-6 py-2 font-medium 
                  hover:bg-opacity-90 
                  dark:bg-cerulean-500 dark:text-cerulean-50
                  disabled:!bg-cerulean-100 disabled:!text-cerulean-600" type="button">
                  <ArrowUpTrayIcon class="w-5 h-5" />
                </button>
              </div>

              <div v-if="uploadProgress">Upload progress: {{ uploadProgress }}%</div>
            </div>
            <div v-if="hasImage">
              <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white">
                {{ $t('form.review_image') }}
              </label>
              <img :src="imageUrl" alt="review-image">
            </div>
          </div>

        </div>
      </div>

      <div class="flex flex-col-reverse gap-9 md:flex-col">
        <PublishView v-model="state.enable" :pass="pass"/>
        <div class="dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border border-gray-200 bg-white shadow"
          :class="{ '!border-green-600': !errorFields?.desc?.length && !errorFields?.content?.length }">
          <div class="px-6.5 dark:border-zinc-900 border-b border-gray-200 py-4">
            <h3 class="text-black-1000 font-medium dark:text-white">{{ $t('form.content') }}</h3>
          </div>
          <div class="gap-5.5 p-6.5 flex flex-col">
            <div>
              <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white"> {{ $t('form.desc') }}
              </label>
              <textarea rows="6" v-model="state.desc" 
              :class="{ '!border-red-600': errorFields?.desc?.length }"
                class="w-full cursor-pointer rounded-lg border border-gray-200 bg-transparent p-4 font-medium outline-none transition 
                dark:border-zinc-900 dark:bg-zinc-900
                disabled:cursor-default disabled:bg-gray-200"> </textarea>
            </div>
            <div>
              <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white"> {{ $t('form.content') }}
              </label>
              <div class="border border-gray-200 dark:border-zinc-900 dark:bg-zinc-900"
              :class="{ '!border-red-600': errorFields?.desc?.length }">
                <ckeditor
                :editor="editor" v-model="state.content" :config="editorConfig"></ckeditor>
              </div>
            </div>
          </div>
        </div>
        <div class="border-gray-200 dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border bg-white shadow">
          <div class="border-big-gray-200 px-6.5 dark:border-zinc-900 border-b py-4">
            <h3 class="text-black-1000 font-medium dark:text-white">{{ $t('form.tag') }}</h3>
          </div>
          <div class="gap-5.5 p-6.5 flex flex-col">
            <div>
              <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white">
                {{ $t('form.select_tag') }}
              </label>
              <Multiselect
                class="!text-black-1000 dark:border-zinc-900 w-full border-gray-200 bg-transparent font-normal outline-none transition disabled:cursor-default disabled:bg-gray-200 dark:text-white"
                v-model="selectedTags" deselect-label="Can't remove this value" track-by="title" label="title"
                :placeholder="$t('form.place_holder.select_tag')" :options="tags" :searchable="false"
                :allow-empty="false">
                <template v-slot:singleLabel="{ option }">
                  <span>{{ option.title }}</span>
                </template>
              </Multiselect>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>


<script setup lang="ts">
import { computed, onMounted, ref, type ComputedRef } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { RectangleGroupIcon } from '@heroicons/vue/24/outline';
import { ChevronDownIcon, EyeSlashIcon, EyeIcon, XMarkIcon, ArrowUpTrayIcon, PlusIcon } from '@heroicons/vue/24/solid';
import { Switch } from '@headlessui/vue';
import { categories, tags, selectedTags } from '../services/logictics/blog'
import { get } from '@/core/services/helpers/request.helper';
import type { TCategory, TTag } from '../models/type';
import { state, rules, submit, fileInput, uploadProgress, handleFileChange, uploadFile, imageUrl, removeImage } from '../services/logictics/blog';
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs';
import Multiselect from 'vue-multiselect'
import PublishView from '@/modules/admin-template/views/PublishView.vue'
import HeadingView from '@/modules/admin-template/views/HeadingView.vue';
const { pass, errorFields } = useAsyncValidator(state, rules);
const hasImage: ComputedRef<boolean> = computed(() => imageUrl.value.length !== 0)

const editor = ref(ClassicEditor)
const editorConfig = ref()

onMounted(() => {
  get<TCategory[]>("/api/categories").then(response => {
    categories.value = response?.data || []
  })

  get<TTag[]>("/api/tags").then(response => {
    tags.value = response?.data || []
  })
})

</script>
