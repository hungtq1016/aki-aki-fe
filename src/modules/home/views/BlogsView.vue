<template>
  <section class="py-5">
    <div class="max-w-screen-xl m-auto">
      <div class="py-5 md:py-10 md:px-5">
        <h1
          class="text-2xl leading-[45px] uppercase text-center font-semibold mb-10 text-cerulean-400 relative after:contents-[''] after:h-px after:w-32 after:absolute after:left-1/2 after:-bottom-3 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-cerulean-400"
        >
          TIN TỨC - HOẠT ĐỘNG
        </h1>
      </div>
      <BlogFlick />
    </div>
  </section>
</template>

<script setup lang="ts">
import BlogFlick from '../components/Blog.flick.vue'
</script>
