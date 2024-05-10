<template>
  <section class="pb-10">
    <div class="max-w-screen-xl m-auto">
      <template v-for="data in equipments" :key="data.title">
        <div class="flex gap-6 py-8 w-full pt-8 odd:flex-row-reverse">
          <div class="basis-2/5">
            <img class="w-full" :src="data.imageUrl" :alt="data.title" />
          </div>
          <div class="flex items-center pb-5 basis-3/5 lg:pb-0">
            <div class="lg:py-5">
              <h2 class="text-4xl mb-4 text-cerulean-400 capitalize">{{ data.title }}</h2>
              <p class="text-justify">{{ data.desc }}</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { equipments } from '../services/data/data'
</script>
