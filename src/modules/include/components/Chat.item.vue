<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="max-h-screen space-y-3.5 overflow-auto px-6 py-7.5">
    <template v-for="(item,index) in data.messages" :key="item.content">
      <!-- <MessageItemLeft v-if="data.author !== user" :data="data" /> -->
      <div v-if="displaySender(item, index)" :class="{'text-right':item.fromSelf}">
          {{ item.fromSelf ? "(yourself)" : data.username }}
      </div>
      <MessageItemLeft v-if="!item.fromSelf"
      :message="item.content" />
      <MessageItemRight v-else
       :message="item.content" />
    </template>
  </div>
  <div
    class="sticky bottom-0 border-t border-zumthor-100 bg-white py-5 px-6 dark:border-oxford-blue-900 dark:bg-zinc-950">
    <form @submit.prevent="onSubmit"  class="flex items-center justify-between space-x-4.5">
      <div class="relative w-full">
        <input type="text" :placeholder="$t('form.place_holder.chat')" v-model="input"
          class="h-13 w-full rounded-md border border-zumthor-100 bg-zircon-50 pl-5 pr-19 font-medium text-black-1000 placeholder-body outline-none focus:border-cerulean-600 dark:border-oxford-blue-900 dark:bg-shark-950 dark:text-white" />
        <div class="absolute right-5 top-1/2 inline-flex -translate-y-1/2 items-center justify-end space-x-4">
          <button type="button" class="hover:text-cerulean-600">
            <PaperClipIcon class="w-4.5 h-4.5" />
          </button>
          <button type="button" class="hover:text-cerulean-600">
            <FaceSmileIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
      <button type="submit"
        class="flex h-13 w-full max-w-13 items-center justify-center rounded-md bg-cerulean-600 text-white hover:bg-opacity-90">
        <PaperAirplaneIcon class="w-6 h-6" />
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import MessageItemLeft from '@/modules/admin-message/components/Message.item.left.vue';
import MessageItemRight from '@/modules/admin-message/components/Message.item.right.vue';
import { FaceSmileIcon, PaperAirplaneIcon, PaperClipIcon } from '@heroicons/vue/24/outline';
import { computed, ref } from 'vue';

const props = defineProps<{
  data: any
}>()


const input = ref("");
const emit = defineEmits(['input']);

const onSubmit = () => {
  emit("input", input.value);
  input.value = "";
};

const displaySender = (message:string, index:number) => {
  return (
    index === 0 ||
    props.data.messages[index - 1].fromSelf !==
    props.data.messages[index].fromSelf
  );
};

const isValid = computed(() => input.value.length > 0);

</script>
