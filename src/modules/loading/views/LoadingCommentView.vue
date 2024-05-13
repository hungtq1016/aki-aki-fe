<template>
  <section>
    <div class="max-w-screen-xl xl:mx-auto lg:mx-8 md:mx-6 mx-4 animate-pulse">
      <div class="flex flex-col gap-y-2">
        <div class="flex gap-x-3" v-for="i in count" :key="i">
          <svg
            class="w-10 h-10 text-gray-400 dark:text-zinc-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path
              d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
            />
          </svg>
          <div class="space-y-1 w-full">
            <div class="bg-gray-200 dark:bg-zinc-700 w-1/6 h-6 rounded-md"></div>
            <div class="bg-gray-100 dark:bg-zinc-800 w-4/5 h-12 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  count: {
    type: Number,
    default: 5,
    required: false
  }
})
</script>
