<template>
  <button @click="isOpen = !isOpen"
    class="fixed right-2 bottom-26 w-10 h-10 rounded-full flex items-center justify-center bg-cerulean-600">
    <ChatBubbleLeftRightIcon class="w-5 h-5 text-cerulean-100" v-if="!isOpen" />
    <XMarkIcon class="w-5 h-5 text-cerulean-100" v-else />
  </button>

  <div class="fixed right-14 bottom-2 w-full max-w-sm z-50" v-show="isOpen">
    <div class="flex h-[500px] bg-white flex-col justify-between border border-zumthor-100 dark:border-oxford-blue-900">
      <div
        class="flex items-center justify-between border-b border-zumthor-100 px-6 py-4.5 dark:border-oxford-blue-900 bg-white z-50">
        <div class="flex items-center bg-white">
          <div class="mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full">
            <img src="/support.png" alt="avatar" class="h-full w-full object-cover object-center" />
          </div>
          <div>
            <h5 class="font-medium text-black-1000 dark:text-white text-left">{{ $t('content.chat_admin') }}</h5>
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
        <button @click="isOpen = !isOpen">
          <XMarkIcon class="w-6 h-6" />
        </button>
      </div>
      <div v-if="!usernameAlreadySelected" class="p-2 ">
        <form @submit.prevent="onUsernameSelection" class="flex items-center justify-between space-x-4.5">
          <div class="relative w-full">
            <input type="text" :placeholder="$t('form.place_holder.name_to_chat')" v-model="name"
              class="h-13 w-full rounded-md border border-zumthor-100 bg-zircon-50 pl-5 pr-19 font-medium text-black-1000 placeholder-body outline-none focus:border-cerulean-600 dark:border-oxford-blue-900 dark:bg-shark-950 dark:text-white" />
          </div>
          <button type="submit"
            class="flex h-13 w-full max-w-13 items-center justify-center rounded-md bg-cerulean-600 text-white hover:bg-opacity-90">
            <PaperAirplaneIcon class="w-6 h-6" />
          </button>
        </form>
      </div>
      <template v-else>
        <MessageChat v-if="selectedUser" :data="selectedUser" @input="onMessage" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ChatBubbleLeftRightIcon, PaperAirplaneIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { socket } from '@/core/services/helpers/socket.helper';
import MessageChat from '@/modules/admin-message/components/Message.chat.vue';

const name = ref('');
const usernameAlreadySelected = ref(false);
const isOpen = ref(false);
const users = ref<any>([]);

const selectedUser = computed(() => users.value.find((user: any) => user.username === "admin"));

const onUsernameSelection = () => {
  usernameAlreadySelected.value = true;
  const username = name.value;
  socket.auth = { username };
  socket.connect();
};

const handleConnectError = (err: any) => {
  if (err.message === "invalid username") {
    usernameAlreadySelected.value = false;
  }
};

const onMessage = (content: any) => {
  if (selectedUser.value) {
    socket.emit("private message", {
      content,
      to: selectedUser.value.userID,
    });
    selectedUser.value.messages.push({
      content,
      fromSelf: true,
    });
  }
};

const initReactiveProperties = (user: any) => {
  user.connected = true;
  user.messages = [];
  user.hasNewMessages = false;
};

const setupSocketListeners = () => {
  socket.on("connect", () => {
    users.value.forEach((user: any) => {
      if (user.self) {
        user.connected = true;
      }
    });
  });

  socket.on("disconnect", () => {
    users.value.forEach((user: any) => {
      if (user.self) {
        user.connected = false;
      }
    });
  });

  socket.on("users", (usersList) => {
    usersList.forEach((user: any) => {
      user.self = user.userID === socket.id;
      initReactiveProperties(user);
    });
    users.value = usersList.sort((a: any, b: any) => {
      if (a.self) return -1;
      if (b.self) return 1;
      return a.username.localeCompare(b.username);
    });
  });

  socket.on("user connected", (user: any) => {
    initReactiveProperties(user);
    users.value.push(user);
  });

  socket.on("user disconnected", (id) => {
    const user = users.value.find((user: any) => user.userID === id);
    if (user) {
      user.connected = false;
    }
  });

  socket.on("private message", ({ content, from }) => {
    const user = users.value.find((user: any) => user.userID === from);
    if (user) {
      user.messages.push({
        content,
        fromSelf: false,
      });
      if (user !== selectedUser.value) {
        user.hasNewMessages = true;
      }
    }
  });
};

onMounted(() => {
  socket.on("connect_error", handleConnectError);
  setupSocketListeners();
});

onBeforeUnmount(() => {
  socket.off("connect_error", handleConnectError);
  socket.off("connect");
  socket.off("disconnect");
  socket.off("users");
  socket.off("user connected");
  socket.off("user disconnected");
  socket.off("private message");
});
</script>
