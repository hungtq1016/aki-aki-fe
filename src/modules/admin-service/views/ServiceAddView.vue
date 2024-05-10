<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form @submit.prevent="submit">
    <div class="grid grid-cols-1 gap-9 sm:grid-cols-2">
      <div class="flex flex-col gap-9">
        <div
          class="dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border border-gray-200 bg-white shadow"
        >
          <div class="px-6.5 dark:border-zinc-900 border-b border-gray-200 py-4">
            <h3 class="text-black-1000 font-medium dark:text-white">{{ $t('form.heading') }}</h3>
          </div>
          <div class="p-6.5 flex flex-col gap-4">
            <div>
              <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white">
                {{ $t('form.title') }}
              </label>
              <input
                v-model="state.title"
                type="text"
                :placeholder="$t('form.place_holder.title')"
                class="text-black-1000 dark:border-zinc-900 dark:bg-zinc-950 w-full rounded-lg border-[1.5px] border-gray-200 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:bg-gray-200 dark:text-white"
              />
            </div>
            <div>
              <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white">
                {{ $t('form.slug') }}
              </label>
              <input
                v-model="state.slug"
                type="text"
                :placeholder="$t('form.place_holder.slug')"
                disabled="true"
                class="text-black-1000 dark:border-zinc-900 dark:bg-zinc-950 w-full rounded-lg border-[1.5px] border-gray-200 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:bg-gray-200 dark:text-white dark:disabled:bg-black"
              />
            </div>
          </div>
        </div>
        <div
          class="dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border border-gray-200 bg-white shadow"
        >
          <div class="border-big-gray-200 px-6.5 dark:border-zinc-900 border-b py-4">
            <h3 class="text-black-1000 font-medium dark:text-white">{{ $t('form.category') }}</h3>
          </div>
          <div class="gap-5.5 p-6.5 flex flex-col">
            <div>
              <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white">
                {{ $t('form.select_category') }}
              </label>
              <div class="dark:bg-zinc-950 relative z-20 bg-white">
                <span class="absolute left-4 top-1/2 z-30 -translate-y-1/2">
                  <RectangleGroupIcon class="h-5 w-5" />
                </span>
                <select
                  v-model="state.categoryId"
                  class="border-big-gray-200 dark:border-zinc-900 dark:bg-zinc-950 relative z-20 w-full appearance-none rounded border bg-transparent px-12 py-3 outline-none transition"
                >
                  <option :value="null">{{ $t('form.select_category') }}</option>
                  <option class="text-body dark:text-bodydark" value="USA">USA</option>
                  <option class="text-body dark:text-bodydark" value="UK">UK</option>
                  <option class="text-body dark:text-bodydark" value="Canada">Canada</option>
                </select>
                <span class="absolute right-4 top-1/2 z-10 -translate-y-1/2">
                  <ChevronDownIcon class="h-6 w-6" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border border-gray-200 bg-white shadow"
        >
          <div class="px-6.5 dark:border-zinc-900 border-b border-gray-200 py-4">
            <h3 class="text-black-1000 font-medium dark:text-white">{{ $t('form.image') }}</h3>
          </div>
          <div class="gap-5.5 p-6.5 flex flex-col">
            <div>
              <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white">
                {{ $t('form.upload_image') }}
              </label>
              <input
                type="file"
                class="file:hover:bg-zinc-950 dark:border-zinc-900 dark:bg-zinc-950 dark:file:border-zinc-900 w-full cursor-pointer rounded-lg border-[1.5px] border-gray-200 bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-200 file:px-5 file:py-3 file:hover:bg-opacity-10 disabled:cursor-default disabled:bg-gray-200 dark:file:bg-white/30 dark:file:text-white"
              />
            </div>
            <div>
              <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white">
                {{ $t('form.review_image') }}
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col-reverse gap-9 md:flex-col">
        <div
          class="dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border border-gray-200 bg-white shadow"
        >
          <div class="border-big-gray-200 px-6.5 dark:border-zinc-900 border-b py-4">
            <h3 class="font-medium text-black dark:text-white">{{ $t('form.publish') }}</h3>
          </div>
          <div class="gap-5.5 p-6.5 flex flex-col">
            <div class="flex items-center justify-between">
              <div>
                <Switch
                  v-model="state.enable"
                  :class="state.enable ? 'bg-green-200' : 'bg-red-200'"
                  class="h-9.5 w-18.5 relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                  <span class="sr-only">Enble</span>
                  <span
                    aria-hidden="true"
                    :class="state.enable ? 'translate-x-9' : 'translate-x-0'"
                    class="h-8.5 w-8.5 pointer-events-none inline-flex transform items-center justify-center rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                  >
                    <EyeIcon v-if="state.enable" class="h-4 w-4 text-green-600" />
                    <EyeSlashIcon v-else class="h-4 w-4 text-red-600" />
                  </span>
                </Switch>
              </div>
              <div>
                <button
                  class="bg-cerulean-600 flex justify-center rounded px-6 py-2 font-medium text-gray-100 hover:bg-opacity-90"
                  type="submit"
                >
                  {{ $t('button.publish') }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border border-gray-200 bg-white shadow"
        >
          <div class="px-6.5 dark:border-zinc-900 border-b border-gray-200 py-4">
            <h3 class="text-black-1000 font-medium dark:text-white">{{ $t('form.content') }}</h3>
          </div>
          <div class="gap-5.5 p-6.5 flex flex-col">
            <div>
              <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white">
                {{ $t('form.desc') }}
              </label>
              <textarea
                rows="6"
                v-model="state.description"
                class="file:hover:bg-zinc-950 dark:border-zinc-900 dark:bg-zinc-950 dark:file:border-zinc-900 w-full cursor-pointer rounded-lg border-[1.5px] border-gray-200 bg-transparent p-4 font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-200 file:px-5 file:py-3 file:hover:bg-opacity-10 disabled:cursor-default disabled:bg-gray-200 dark:file:bg-white/30 dark:file:text-white"
              >
              </textarea>
            </div>
            <div>
              <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white">
                {{ $t('form.content') }}
              </label>

              <ckeditor :editor="editor" v-model="state.content" :config="editorConfig"></ckeditor>
            </div>
          </div>
        </div>
        <div
          class="border-gray-200 dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border bg-white shadow"
        >
          <div class="border-big-gray-200 px-6.5 dark:border-zinc-900 border-b py-4">
            <h3 class="text-black-1000 font-medium dark:text-white">{{ $t('form.tag') }}</h3>
          </div>
          <div class="gap-5.5 p-6.5 flex flex-col">
            <div>
              <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white">
                {{ $t('form.select_tag') }}
              </label>
              <Combobox v-model="selected" multiple>
                <div class="relative mt-1">
                  <div class="relative">
                    <ComboboxInput
                      class="border-big-gray-200 text-black-1000 dark:border-zinc-900 dark:bg-zinc-950 relative w-full appearance-none rounded border bg-transparent px-2 py-3 outline-none transition"
                      :displayValue="(item: any) => item.name"
                      @change="query = $event.target.value"
                    />

                    <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </ComboboxButton>
                  </div>
                  <TransitionRoot
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    @after-leave="query = ''"
                  >
                    <ComboboxOptions
                      class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
                    >
                      <div
                        v-if="filteredData.length === 0 && query !== ''"
                        class="relative cursor-default select-none px-4 py-2 text-gray-700"
                      >
                        Nothing found.
                      </div>

                      <ComboboxOption
                        v-for="item in filteredData"
                        as="template"
                        :key="item.id"
                        :value="item"
                        v-slot="{ selected, active }"
                      >
                        <li
                          class="relative cursor-default select-none py-2 pl-10 pr-4"
                          :class="{
                            'bg-teal-600 text-white': active,
                            'text-gray-900': !active
                          }"
                        >
                          <span
                            class="block truncate"
                            :class="{ 'font-medium': selected, 'font-normal': !selected }"
                          >
                            {{ item.name }}
                          </span>
                          <span
                            v-if="selected"
                            class="absolute inset-y-0 left-0 flex items-center pl-3"
                            :class="{ 'text-white': active, 'text-teal-600': !active }"
                          >
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                          </span>
                        </li>
                      </ComboboxOption>
                    </ComboboxOptions>
                  </TransitionRoot>
                  <ul class="py-2 flex gap-x-1 items-center flex-wrap" v-if="selected.length > 0">
                    <li
                      class="bg-gray-100 text-sm text-gray-600 py-px px-2 rounded flex items-center gap-x-1 group"
                      v-for="(item, index) in selected"
                      :key="item.id"
                    >
                      <span>{{ item.name }}</span>
                      <button @click="selected.splice(index, 1)">
                        <XMarkIcon class="w-4 h-4 text-gray-900 hidden group-hover:inline" />
                      </button>
                    </li>
                  </ul>
                </div>
              </Combobox>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { RectangleGroupIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon, EyeSlashIcon, EyeIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import { Switch } from '@headlessui/vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import { i18n } from '@/core/services/base/translation'
import { v4 as Guid } from 'uuid'
import { watch } from 'vue'
import { slugify } from '@/core/services/utils/util.string'

const data = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' }
]

const selected = ref([data[0], data[1]])
let query = ref('')

let filteredData = computed(() =>
  query.value === ''
    ? data
    : data.filter((item) =>
        item.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      )
)
const editor = ref(ClassicEditor)
const editorConfig = ref()

const state = ref({
  id: Guid(),
  enable: true,
  content: `<p>${i18n.global.t('form.place_holder.content')}</p>`,
  description: i18n.global.t('form.place_holder.desc'),
  categoryId: null,
  imageUrl: '',
  title: '',
  slug: ''
})

watch(
  state,
  (newValue) => {
    state.value.slug = slugify(newValue.title)
  },
  { deep: true }
)

const submit = () => {
  const imageId = Guid()
}
</script>
