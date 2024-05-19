<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <li>
    <div class="relative" ref="target">
      <button
        class="flex items-center gap-4"
        @click.prevent="dropdownOpen = !dropdownOpen"
      >
        <span class="hidden text-right lg:block">
          <span class="block text-sm font-medium text-slate-950 dark:text-white">{{
            $t('message.greeting', { name: user.fullName })
          }}</span>
        </span>

        <span class="h-12 w-12 rounded-full">
          <img :src="imageBuilderUrl(user?.imageUrl)" :alt="user.fullName" />
        </span>

        <ChevronDownIcon class="w-4 h-5" :class="dropdownOpen && 'rotate-180'" />
      </button>

      <!-- Dropdown Start -->
      <div
        v-show="dropdownOpen"
        class="absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-zumthor-100 bg-white shadow-default dark:border-oxford-blue-900 dark:bg-zinc-950"
      >
        <ul
          class="flex flex-col gap-5 border-b border-zumthor-100 px-6 py-7.5 dark:border-oxford-blue-900"
        >
          <li v-for="item in menuProfile.menuItems" :key="item.label">
            <router-link
              :to="item.slug"
              class="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-cerulean-600 lg:text-base"
            >
              <component :is="item.icon" class="w-5 h-5" />
              <span>{{ $t(item.label) }}</span>
            </router-link>
          </li>
        </ul>
        <button type="button" @click="logout"
          class="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-cerulean-600 lg:text-base"
        >
          <ArrowLeftStartOnRectangleIcon class="w-6 h-6" />
          <span>{{ $t('route.logout') }}</span>
        </button>
      </div>
      <!-- Dropdown End -->
    </div>
  </li>
</template>

<script setup lang="ts">
import { ArrowLeftStartOnRectangleIcon, UserIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

import { useUserStore } from '@/core/stores/user'
import { imageBuilderUrl } from '@/core/services/utils/util.string'

import type { TMenu } from '../models/type'

const target = ref(null)
const dropdownOpen = ref(false)
const { user,logout } = useUserStore()

onClickOutside(target, () => {
  dropdownOpen.value = false
})

const menuProfile: TMenu = {
  name: 'route.profile',
  menuItems: [{
    label: 'route.profile',
    slug: '/profile',
    icon: UserIcon,
    show: true
  }]
}
</script>
