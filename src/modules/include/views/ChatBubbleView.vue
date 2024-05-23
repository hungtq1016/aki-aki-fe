<template>
  <button @click="isOpen = !isOpen"
    class="fixed right-2 bottom-14 w-10 h-10 rounded-full flex items-center justify-center bg-green-600">
    <ChatBubbleOvalLeftIcon class="w-5 h-5 text-green-100 animate-bounce" v-if="!isOpen" />
    <XMarkIcon class="w-5 h-5 text-green-100" v-else />
  </button>
  <div class="fixed right-14 bottom-2 w-full max-w-sm z-50" v-show="isOpen">
    <div class="flex h-[500px] flex-col border border-zumthor-100 dark:border-oxford-blue-900">
      <div
        class="flex items-center justify-between border-b border-zumthor-100 px-6 py-4.5 dark:border-oxford-blue-900 bg-white z-50">
        <div class="flex items-center bg-white">
          <div class="mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full">
            <img src="/bot.png" alt="avatar" class="h-full w-full object-cover object-center" />
          </div>
          <div>
            <h5 class="font-medium text-black-1000 dark:text-white text-left">{{ $t('content.doctor_ai') }}</h5>
            <p v-if="true" class="text-sm font-medium flex gap-x-2 items-center">
              <span class="block h-3 w-3 rounded-full border-2 border-gray-2 bg-green-600" />
              <span>{{ $t('content.online') }}</span>
            </p>
            <p v-else class="text-sm font-medium flex gap-x-2 items-center">
              <span class="block h-3 w-3 rounded-full border-2 border-gray-2 bg-red-600" />
              <span>{{ $t('content.offline') }}</span>
            </p>
          </div>
        </div>
        <button @click="isOpen = !isOpen  ">
          <XMarkIcon class="w-6 h-6"/>
        </button>
      </div>
      <div class="max-h-[320px] h-full space-y-3.5 overflow-y-auto px-6 py-7.5 !bg-white">
        <template v-for="data in messages" :key="data.content">
          <MessageItemLeft 
          v-if="data.isBot" 
          :data="data" 
          username="Doctor"/>
          <MessageItemRight v-else 
          :data="data" />
        </template>
      </div>
      <div
        class=" border-t border-zumthor-100 py-5 px-6 dark:border-oxford-blue-900 dark:bg-zinc-950 bg-white z-50">
        <form @submit.prevent="submitChat" class="flex items-center justify-between space-x-4.5">
          <div class="relative w-full">
            <input type="text" v-model="content" :disabled="isLoading"
            :placeholder="$t('form.place_holder.chat')"
              class="h-13 w-full rounded-md border border-zumthor-100 bg-zircon-50 pl-5 pr-19 font-medium text-black-1000 placeholder-body outline-none focus:border-cerulean-600 dark:border-oxford-blue-900 dark:bg-shark-950 dark:text-white" />

          </div>
          <button type="submit" :disabled="isLoading"
            class="flex h-13 w-full max-w-13 items-center justify-center rounded-md bg-cerulean-600 text-white hover:bg-opacity-90">
            <ArrowPathIcon v-if="isLoading" class="w-6 h-6 animate-spin" />
            <PaperAirplaneIcon v-else class="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MessageItemLeft from '@/modules/admin-message/components/Message.item.left.vue';
import MessageItemRight from '@/modules/admin-message/components/Message.item.right.vue';
import { ArrowPathIcon, ChatBubbleOvalLeftIcon, PaperAirplaneIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { content, isLoading, isOpen, messages, submitChat } from '../services/logictics/ai';


</script>
