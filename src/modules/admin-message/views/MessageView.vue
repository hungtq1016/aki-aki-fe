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
        <div
          class="sticky flex items-center justify-between border-b border-zumthor-100 px-6 py-4.5 dark:border-oxford-blue-900">
          <div class="flex items-center">
            <div class="mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full">
              <img src="/user/user-01.png" alt="avatar" class="h-full w-full object-cover object-center" />
            </div>
            <div>
              <h5 class="font-medium text-black-1000 dark:text-white">Henry Dholi</h5>
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
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton class="inline-flex w-full justify-center">
                <EllipsisHorizontalIcon class="-mr-1 ml-2 h-8 w-8 text-gray-400 hover:text-gray-500"
                  aria-hidden="true" />
              </MenuButton>
            </div>

            <transition enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0">
              <MenuItems
                class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black-1000/5 focus:outline-none">
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                  <button :class="[
                    active ? 'bg-cerulean-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm'
                  ]">
                    <PencilIcon :active="active" class="mr-2 h-5 w-5 text-cerulean-400" aria-hidden="true" />
                    Edit
                  </button>
                  </MenuItem>
    
                </div>
              </MenuItems>
            </transition>
          </Menu>
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
import { EllipsisHorizontalIcon, MagnifyingGlassIcon, PencilIcon } from '@heroicons/vue/24/solid'

import MessageItem from '../components/Message.user.vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

import { onBeforeUnmount, onMounted, ref } from 'vue'
import { socket } from '@/core/services/helpers/socket.helper'
import MessageChat from '../components/Message.chat.vue'

const usernameAlreadySelected = ref(false);

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
const selectedUser = ref<any>(null);
const users = ref<any>([]);

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

const onSelectUser = (user:any) => {
  selectedUser.value = user;
  user.hasNewMessages = false;
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
  onUsernameSelection("admin")
  socket.on("connect_error", handleConnectError);
});

onBeforeUnmount(() => {
  socket.off("connect_error", handleConnectError);
});

</script>
