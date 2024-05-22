<template>
  <div class="h-[calc(100vh-186px)] overflow-hidden sm:h-[calc(100vh-174px)]">
    <div
      class="h-full rounded-sm border border-zumthor-100 bg-white shadow-default dark:border-oxford-blue-900 dark:bg-zinc-950 xl:flex">
      <div class="hidden h-full flex-col xl:flex xl:w-1/4">
        <div class="sticky border-b border-zumthor-100 px-6 py-7.5 dark:border-oxford-blue-900">
          <h3 class="text-lg font-medium text-black-1000 dark:text-white 2xl:text-xl">
            {{ $t('content.conversation') }}
            <span
              class="rounded-md border-[.5px] border-zumthor-100 bg-black-haze-50 py-0.5 px-2 text-base font-medium text-black-1000 dark:border-oxford-blue-900 dark:bg-shark-950 dark:text-white 2xl:ml-4">
              {{ users.length }}
            </span>
          </h3>
        </div>
        <div class="flex max-h-full flex-col overflow-auto p-5">
          <form class="sticky mb-7">
            <input type="text"
              class="w-full rounded border border-zumthor-100 bg-black-haze-50 py-2.5 pl-5 pr-10 text-sm outline-none focus:border-cerulean-600 dark:border-oxford-blue-900 dark:bg-shark-950"
              :placeholder="$t('form.place_holder.search')" />
            <button class="absolute top-1/2 right-4 -translate-y-1/2">
              <MagnifyingGlassIcon class="w-5 h-5" />
            </button>
          </form>
          <div class="max-h-full space-y-2.5 overflow-auto">
            <MessageItem v-for="user in users"
              :key="user.userID"
              :data="user"
              :selected="selectedUser === user"
              @select="onSelectUser(user)"/>
          </div>
        </div>
      </div>
      <div class="flex h-full flex-col border-l border-zumthor-100 dark:border-oxford-blue-900 xl:w-3/4 justify-between">
        <div v-if="selectedUser"
          class="sticky flex items-center justify-between border-b border-zumthor-100 px-6 py-4.5 dark:border-oxford-blue-900">
          <div  class="flex items-center">
            <div class="mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full">
              <img src="/dummy-user.png" alt="avatar" class="h-full w-full object-cover object-center" />
            </div>
            <div>
              <h5 class="font-medium text-black-1000 dark:text-white">{{ selectedUser?.username }}</h5>
            </div>
          </div>
        </div>
        <MessageChat 
        v-if="selectedUser"
        :data="selectedUser"
        @input="onMessage"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import MessageItem from '../components/Message.user.vue'
import MessageChat from '../components/Message.chat.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { socket } from '@/core/services/helpers/socket.helper'

const usernameAlreadySelected = ref(false);
const selectedUser = ref<any>(null);
const users = ref<any>([]);

const onUsernameSelection = (username: string) => {
  usernameAlreadySelected.value = true;
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

const onSelectUser = (user: any) => {
  selectedUser.value = user;
  user.hasNewMessages = false;
};

const initReactiveProperties = (user: any) => {
  user.connected = true;
  user.messages = [];
  user.hasNewMessages = false;
};

const handleSocketEvents = () => {
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

  socket.on("connect_error", handleConnectError);
};

const checkAdminExistence = () => {
  const adminExists = users.value.some((user: any) => user.username === "admin");
  if (adminExists) {
    onUsernameSelection("admin");
  } else {
    onUsernameSelection("admin")
    // Code to create new admin or handle the case where admin doesn't exist
  }
};

onMounted(() => {
  handleSocketEvents();
  checkAdminExistence();
});

onBeforeUnmount(() => {
  socket.off("connect");
  socket.off("disconnect");
  socket.off("users");
  socket.off("user connected");
  socket.off("user disconnected");
  socket.off("private message");
  socket.off("connect_error", handleConnectError);
});

</script>
