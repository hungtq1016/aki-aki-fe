<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="max-h-screen space-y-3.5 overflow-auto px-6 py-7.5">
    <template v-for="item in data.messages" :key="item.content">
      <MessageItemLeft 
      v-if="!item.fromSelf"
      :username="data.username"
      :data="item" />
      <MessageItemRight v-else
       :data="item" />
    </template>
  </div>
  <div
    class="sticky bottom-0 border-t border-zumthor-100 bg-white py-5 px-6 dark:border-oxford-blue-900 dark:bg-zinc-950">
    <form @submit.prevent="onSubmit"  class="flex items-center justify-between space-x-4.5">
      <div class="relative w-full">
        <input type="text" :placeholder="$t('form.place_holder.chat')" v-model="input"
          class="h-13 w-full rounded-md border border-zumthor-100 bg-zircon-50 pl-5 pr-19 font-medium text-black-1000 placeholder-body outline-none focus:border-cerulean-600 dark:border-oxford-blue-900 dark:bg-shark-950 dark:text-white" />
      </div>
      <button type="submit"
        class="flex h-13 w-full max-w-13 items-center justify-center rounded-md bg-cerulean-600 text-white hover:bg-opacity-90">
        <PaperAirplaneIcon class="w-6 h-6" />
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline';
import MessageItemRight from './Message.item.right.vue';
import { ref } from 'vue';
import MessageItemLeft from './Message.item.left.vue';

const props = defineProps<{
  data: any
}>()


const input = ref("");
const emit = defineEmits(['input']);

const onSubmit = () => {
  emit("input", input.value);
  input.value = "";
};

</script>
