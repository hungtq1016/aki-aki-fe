<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <aside id="profile-sidebar"
    class="w-64 h-auto transition-transform -translate-x-full sm:translate-x-0 border-r-[.5px]" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-cerulean-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <AsideItem v-for="data in aside" :data="data" :key="data.id" />
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import AsideItem from './Aside.item.vue'
import { UserIcon, ClockIcon, ClipboardDocumentListIcon, CircleStackIcon } from '@heroicons/vue/24/outline'
const aside = [
  {
    id: '1',
    label: 'route.profile',
    slug: '/profile',
    icon: UserIcon
  },
  {
    id: '2',
    label: 'route.schedule',
    slug: '/profile/schedule',
    icon: ClockIcon
  },
  {
    id: '3',
    label: 'route.health_record',
    slug: '/profile/health-record',
    icon: ClipboardDocumentListIcon
  },
  {
    id: '4',
    label: 'route.invoice',
    slug: '/profile/invoice',
    icon: CircleStackIcon
  }
]
</script>
