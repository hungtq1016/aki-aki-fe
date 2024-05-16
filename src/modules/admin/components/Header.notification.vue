<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { socket } from '@/core/services/helpers/socket.helper';
import { BellIcon } from '@heroicons/vue/24/outline'
import { onClickOutside } from '@vueuse/core'
import { ref, type Ref } from 'vue'

const target = ref(null)
const dropdownOpen = ref(false)
const notifying = ref(false)


socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  if(Object.keys(message)[0] == "schedule")
    notificationItems.value.push(message);
}

onClickOutside(target, () => {
  dropdownOpen.value = false
})

const notificationItems :Ref<any>= ref([
  
])
</script>

<template>
  <li class="relative" ref="target">
    <button class="relative flex h-['34px'] w-['34px'] items-center justify-center rounded-full border-[0.5px] border-zumthor-100 bg-zircon-50 hover:text-cerulean-600 dark:border-oxford-blue-900 dark:bg-oxford-blue-900 dark:text-white"
      @click.prevent="(dropdownOpen = !dropdownOpen), (notifying = false)"
    >
      <span
        :class="!notifying && 'hidden'"
        class="absolute -top-px right-0 z-[1] h-2 w-2 rounded-full bg-red-ribbon-600"
      >
        <span
          class="absolute -z-[1] inline-flex h-full w-full animate-ping rounded-full bg-red-ribbon-600 opacity-75"
        ></span>
      </span>
      <BellIcon class="w-5 h-5 duration-300 ease-in-out" />
    </button>

    <!-- Dropdown Start -->
    <div
      v-show="dropdownOpen"
      class="absolute -right-[108px] mt-2.5 flex h-[360px] w-[300px] flex-col rounded-sm border border-zumthor-100 bg-white shadow-default dark:border-oxford-blue-900 dark:bg-zinc-950 sm:right-0 sm:w-80"
    >
      <div class="px-[18px] py-3">
        <h5 class="text-sm font-medium text-regent-gray-600">{{ $t('route.notifcation') }}</h5>
      </div>

      <ul class="flex h-auto flex-col overflow-y-auto">
        <template v-for="(item, index) in notificationItems" :key="index">
          <li>
            <div
              class="flex flex-col gap-2.5 border-t border-zumthor-100 px-[18px] py-3 hover:bg-black-haze-50 dark:border-oxford-blue-900 dark:hover:bg-oxford-blue-900"
              
            >
              <p class="text-sm">
                <span class="text-slate-950 dark:text-white">{{ item.email }}</span>
                {{ item.desc }}
              </p>

              <p class="text-xs">{{ item.time }}</p>
            </div>
          </li>
        </template>
      </ul>
      <div class="px-[18px] py-3">
        <router-link to="/admin/notification" class="text-sm font-medium text-regent-gray-600">{{
          $t('content.go_to_notification')
        }}</router-link>
      </div>
    </div>
    <!-- Dropdown End -->
  </li>
</template>
