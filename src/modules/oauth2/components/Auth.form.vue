<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form @submit.prevent="submit" class="w-full">
    <div>
      <div class="py-5">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <slot/>
        </div>
      </div>
    </div>

    <div class="pb-10 flex items-center justify-end gap-x-6">
      <button type="submit" :disabled="!pass"
        class="rounded-md bg-cerulean-600 px-3 py-2 text-sm font-semibold text-white shadow-sm disabled:bg-cerulean-100 disabled:text-zinc-300 hover:bg-cerulean-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cerulean-600">
        {{ $t('button.confirm') }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
defineProps<{
  submit: () => {},
  pass: boolean
}>()
</script>
