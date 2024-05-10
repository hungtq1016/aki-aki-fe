<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section v-if="isAdmin" class="px-4 md:px-2 lg:px-0 py-2 bg-black-1000">
    <div class="max-w-screen-xl m-auto">
      <div class="flex gap-x-2 md:gap-x-4">
        <HeaderAdminItem v-for="data in adminNavigations" :key="data.label" :data="data" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { adminNavigations } from '../services/data/header.data'
import HeaderAdminItem from './Header.admin.item.vue'
import { hasPermission } from '@/core/services/hooks/usePermission'

const isAdmin = ref<boolean>(false)
onMounted(async () => (isAdmin.value = await hasPermission('admin.view')))
</script>
