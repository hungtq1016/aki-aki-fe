<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <StatItem v-for="data in routes" :key="data.label" :data="data" />
</template>

<script setup lang="ts">
import { BookOpenIcon, CurrencyDollarIcon, UserIcon } from '@heroicons/vue/24/outline';
import StatItem from '../components/Stat.item.vue'
import type { TStat } from '../models/type';

const routes: TStat[] = [
  {
    slug: '/api/blogs/count',
    label: 'Blogs today',
    default: 'currentweek',
    icon: BookOpenIcon
  },
  {
    slug: '/api/users/count',
    label: 'Customer',
    default: 'all',
    icon: UserIcon
  },
  {
    slug: '/api/invoices/total',
    label: 'Total',
    default: 'currentday',
    icon: CurrencyDollarIcon,
    format: true
  }
]

</script>
