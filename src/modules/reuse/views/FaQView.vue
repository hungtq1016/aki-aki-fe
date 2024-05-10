<template>
  <section class="pb-10">
    <div class="m-auto max-w-screen-xl">
      <div class="text-center pb-6">
        <h2
          class="text-5xl text-cerulean-400 leading-[55px] md:leading-[72px] capitalize text-center"
        >
          FaQ
        </h2>
        <HeartIcon class="w-5 h-5 block mx-auto mt-3 text-cerulean-300" />
      </div>
      <FaQDropdown />
    </div>
  </section>
</template>

<script setup lang="ts">
import { HeartIcon } from '@heroicons/vue/24/solid'
import FaQDropdown from '../components/FaQ.dropdown.vue'
</script>
