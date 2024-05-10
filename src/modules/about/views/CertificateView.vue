<template>
  <section class="pb-10">
    <div class="text-center pb-6">
      <h2 class="text-5xl text-cerulean-400 leading-[55px] md:leading-[72px] capitalize">
        Các Chứng Nhận
      </h2>
      <HeartIcon class="w-5 h-5 block mx-auto mt-3 text-cerulean-300" />
    </div>
    <div class="bg-cerulean-600 text-white">
      <div class="max-w-screen-xl m-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="data in certificates"
            :key="data.label"
            class="flex flex-col items-center justify-center pt-8 pb-14 text-2xl text-center capitalize md:pt-11"
          >
            <span class="text-[64px] leading-[96px] observer visible">{{
              new Intl.NumberFormat('en-En', { maximumSignificantDigits: 3 }).format(data.number)
            }}</span>
            {{ data.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { HeartIcon } from '@heroicons/vue/24/solid'
import { certificates } from '../services/data/data'
</script>
