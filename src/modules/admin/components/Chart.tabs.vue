<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <TabGroup >
        <TabList class="inline-flex items-center rounded-md bg-zircon-50 p-1.5 dark:bg-oxford-blue-900">
          <Tab
            v-for="category in categories"
            
            as="template"
            :key="category.value"
            v-slot="{ selected }"
          >
            <label :for="category.value"
              :class="[
                'capitalize rounded py-1 px-3 text-xs font-medium text-slate-950 focus:ring-0 focus:outline-none',
                selected
                  ? 'bg-white shadow-card hover:bg-white hover:shadow-card dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-950'
                  : '  hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-zinc-950',
              ]"
            >
            <input type="radio" v-model="model" :id="category.value" 
            :value="category.value" class="hidden">
              {{ $t(category.label) }}
            </label>
          </Tab>
        </TabList>
      </TabGroup>
  </template>
  
  <script setup lang="ts">
  import { TabGroup, TabList, Tab } from '@headlessui/vue'
  import type { ModelRef } from 'vue';

  const model: ModelRef<string> = defineModel({required:true})
  const categories = [
    {
        value: 'week',
        label: 'table.week'
    },
    {
        value: 'month',
        label: 'table.month'
    },
    {
        value: 'quarter',
        label: 'table.quarter'
    },
    {
        value: 'year',
        label: 'table.year'
    }
];
  </script>
  