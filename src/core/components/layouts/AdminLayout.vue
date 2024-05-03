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
        <main>
          <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
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
import HeaderView from '@/modules/admin/views/HeaderView.vue';


</script>
