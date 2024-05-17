<template>
  <HeaderView />
  <main class="overflow-hidden z-0">
    <BreadcrumbView v-if="route.name !== 'home'" />
    <RouterView />
  </main>
  <FooterView />
</template>

<script setup lang="ts">
import BreadcrumbView from '@/modules/include/views/BreadcrumbView.vue'
import FooterView from '@/modules/include/views/FooterView.vue'
import HeaderView from '@/modules/include/views/HeaderView.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped></style>
