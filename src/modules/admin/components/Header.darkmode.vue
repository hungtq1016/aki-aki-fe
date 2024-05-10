<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'
import { useDarkModeStore } from '../stores/darkmode'

const darkModeStore = useDarkModeStore()
</script>

<template>
  <li>
    <label
      class="relative m-0 block h-7.5 w-14 rounded-full bg-gray-200 dark:bg-cerulean-600"
      @click="darkModeStore.toggleDarkMode"
    >
      <input
        type="checkbox"
        class="absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
      />
      <span
        class="absolute top-1/2 left-1 flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear dark:right-1 dark:translate-x-full"
      >
        <SunIcon class="w-4 h-5 dark:hidden" />
        <MoonIcon class="w-4 h-5 hidden dark:inline-block" />
      </span>
    </label>
  </li>
</template>
