<template>
  <div class="fixed bottom-2 right-2">
    <button
      class="flex w-10 h-10 bg-gray-100 rounded-full items-center justify-center text-gray-600 hover:bg-black-haze-500 hover:text-gray-700 duration-500"
      @click="scroll"
    >
      <ChevronUpIcon class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ChevronUpIcon } from '@heroicons/vue/24/solid'

const scroll = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
