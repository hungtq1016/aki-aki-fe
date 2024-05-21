<template>
  <button @click="isOpen = !isOpen"
    class="fixed right-2 bottom-26 w-10 h-10 rounded-full flex items-center justify-center bg-cerulean-600">
    <ChatBubbleLeftRightIcon class="w-5 h-5 text-cerulean-100" v-if="!isOpen" />
    <XMarkIcon class="w-5 h-5 text-cerulean-100" v-else />
  </button>
  
  <div class="fixed right-14 bottom-2 w-full max-w-sm z-50" v-show="isOpen">
    <div v-if="!usernameAlreadySelected">
        <form @submit.prevent="()=>onUsernameSelection(name)">
          <input 
          v-model="name"
          type="text" 
          placeholder="yourname">
        <button type="submit">Send</button>
      </form>
    </div>
    <div v-else class="flex h-[500px] flex-col border border-zumthor-100 dark:border-oxford-blue-900">
      <div
        class="flex items-center justify-between border-b border-zumthor-100 px-6 py-4.5 dark:border-oxford-blue-900 bg-white z-50">
        <div class="flex items-center bg-white">
          <div>{{selectedUser}}</div>

          <div class="mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full">
            <img src="/bot.png" alt="avatar" class="h-full w-full object-cover object-center" />
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
        <button @click="isOpen = !isOpen  ">
          <XMarkIcon class="w-6 h-6"/>
        </button>
      </div>

      <MessageChat 
        v-if="selectedUser"
        :data="selectedUser"
        @input="onMessage"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { socket } from '@/core/services/helpers/socket.helper';
import MessageChat from '@/modules/admin-message/components/Message.chat.vue';

const name =ref('')
const usernameAlreadySelected = ref(false);
const isOpen = ref(false)

function onUsernameSelection(username: string) {
      usernameAlreadySelected.value = true;
      console.log("hello")
      socket.auth = { username };
      socket.connect();
}
const handleConnectError = (err: any) => {
  if (err.message === "invalid username") {
    usernameAlreadySelected.value = false;
  }
};
// const selectedUser = ref<any>(user.va);
const users = ref<any>([]);
const selectedUser = computed(()=>users.value.find((user:any) => user.fullname == name.value))
const onMessage = (content:any) => {
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


const initReactiveProperties = (user:any) => {
  user.connected = true;
  user.messages = [];
  user.hasNewMessages = false;
};

onMounted(() => {
  socket.on("connect", () => {
    users.value.forEach((user:any) => {
      if (user.self) {
        user.connected = true;
      }
    });
  });

  socket.on("disconnect", () => {
    users.value.forEach((user:any) => {
      if (user.self) {
        user.connected = false;
      }
    });
  });

  socket.on("users", (usersList) => {
    usersList.forEach((user:any) => {
      user.self = user.userID === socket.id;
      initReactiveProperties(user);
    });
    users.value = usersList.sort((a:any, b:any) => {
      if (a.self) return -1;
      if (b.self) return 1;
      if (a.username < b.username) return -1;
      return a.username > b.username ? 1 : 0;
    });
  });

  socket.on("user connected", (user:any) => {
    initReactiveProperties(user);
    users.value.push(user);
  });

  socket.on("user disconnected", (id) => {
    const user = users.value.find((user:any) => user.userID === id);
    if (user) {
      user.connected = false;
    }
  });

  socket.on("private message", ({ content, from }) => {
    const user = users.value.find((user:any) => user.userID === from);
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
});

onBeforeUnmount(() => {
  socket.off("connect");
  socket.off("disconnect");
  socket.off("users");
  socket.off("user connected");
  socket.off("user disconnected");
  socket.off("private message");
});

onMounted(() => {
  socket.on("connect_error", handleConnectError);
});

onBeforeUnmount(() => {
  socket.off("connect_error", handleConnectError);
});

</script>
