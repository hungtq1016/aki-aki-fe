<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="flex gap-x-1 items-center p-2 border border-cerulean-600 rounded-md bg-cerulean-600 text-cerulean-50">
        <div class="uppercase text-sm relative font-semibold pl-2">
          <span class="text-cerulean-50">{{ user.fullName }}</span>
        </div>
        <ChevronDownIcon class="w-4 h-4 text-cerulean-50 my-1" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems
        class="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-cerulean-100 rounded-md bg-cerulean-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <MenuItem v-slot="{ active }" v-for="(data,index) in navigations" :key="index">
          <router-link :to="data.slug"
            :class="[active ? 'bg-cerulean-100 text-cerulean-900' : 'text-cerulean-950', 'block px-4 py-2 text-sm']">{{ $t(data.label) }}</router-link>
          </MenuItem>
        </div>

        <div class="py-1">
          <MenuItem v-slot="{ active }">
          <button type="button" @click="logout"
            class="w-full text-left"
            :class="[active ? 'bg-cerulean-100 text-cerulean-900' : 'text-cerulean-950', 'block px-4 py-2 text-sm']">{{ $t('route.logout') }}</button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { useUserstore } from '@/core/stores/user';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const { user, logout } = useUserstore()

const navigations = [
  {
    label:'route.profile',
    slug: '/profile'
  },
  {
    label:'route.schedule',
    slug: '/profile/schedule'
  }
]

</script>