<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Listbox as="div" v-model="selected" multiple 
    @update:modelValue="value => emit('update:modelValue', value)"
    >
      <div class="relative mt-2">
        <ListboxButton
          class="relative cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-alabaster-500 focus:outline-none focus:ring-2 focus:ring-cerulean-500 sm:text-sm sm:leading-6">
          <span class="flex items-center">
            {{ totalSelected ? $t('table.selected', { count: totalSelected }) : $t('table.select_header') }}
          </span>
          <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>
  
        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
          leave-to-class="opacity-0">
          <ListboxOptions
            class="absolute z-[10] mt-1 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-ebony-clay-950 ring-opacity-5 focus:outline-none sm:text-sm">
            <ListboxOption as="template" v-for="item in options" :key="item.value" :value="item"
              v-slot="{ active }">
              <li
                :class="[active ? 'bg-cerulean-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                <div class="flex items-center">
                  <span :class="[isSelected(item) ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                    {{ $t(item.text) }}
                  </span>
                </div>
  
                <span v-if="isSelected(item)"
                  :class="[active ? 'text-white' : 'text-cerulean-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </template>
  
  <script setup lang="ts">
  import { computed, ref } from 'vue'
  import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
  import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
  import type { Header } from "vue3-easy-data-table";
  
  const props = defineProps<{
    options: Header[],
    value: Header[]
  }>()
  
  const selected = ref<Header[]>(props.value)
  
  const isSelected = (item: any) => {
    return selected.value.includes(item)
  }
  
  const totalSelected = computed(() => selected.value.length)
  const emit = defineEmits(['update:modelValue'])
  
  </script>