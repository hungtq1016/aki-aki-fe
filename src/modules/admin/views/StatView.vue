<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <StatItem v-for="data in routes" :key="data.label" :data="data" />
</template>

<script setup lang="ts">
import { BookOpenIcon, ClockIcon, CurrencyDollarIcon, UserIcon } from '@heroicons/vue/24/outline';
import StatItem from '../components/Stat.item.vue'
import type { TStat } from '../models/type';

const routes: TStat[] = [
  {
    slug: '/api/blogs/count',
    label: 'Bài viết',
    default: 'all',
    icon: BookOpenIcon
  },
  {
    slug: '/api/users/count',
    label: 'Khách hàng',
    default: 'all',
    icon: UserIcon
  },
  {
    slug: '/api/invoices/total',
    label: 'Tổng tiền',
    default: 'currentday',
    icon: CurrencyDollarIcon,
    format: true
  },
  {
    slug: '/api/schedules/count',
    label: 'Lịch hẹn',
    default: 'currentday',
    icon: ClockIcon
  }
]

</script>
