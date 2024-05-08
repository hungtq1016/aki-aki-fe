<template>
    <!-- ===== Page Wrapper Start ===== -->
    <div class="flex h-screen overflow-hidden">
      <!-- ===== Sidebar Start ===== -->
      <AsideView/>
      <!-- ===== Sidebar End ===== -->
  
      <!-- ===== Content Area Start ===== -->
      <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <!-- ===== Header Start ===== -->
        <HeaderView />
        <!-- ===== Header End ===== -->
  
        <!-- ===== Main Content Start ===== -->
        <main class="bg-gray-50  dark:bg-gradient-to-br dark:from-shark-950 dark:to-black-800">
          <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <BreadcrumbView v-if="route.name !== 'admin'" :key="route.fullPath"/>
            <router-view></router-view>
          </div>
        </main>
        <!-- ===== Main Content End ===== -->
      </div>
    </div>
    <!-- ===== Page Wrapper End ===== -->
  </template>
<script setup lang="ts">
import AsideView from '@/modules/admin/views/AsideView.vue';
import BreadcrumbView from '@/modules/admin/views/BreadcrumbView.vue';
import HeaderView from '@/modules/admin/views/HeaderView.vue';

import { useRoute } from 'vue-router'

const route = useRoute()

</script>
