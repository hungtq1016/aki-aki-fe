<template>
  <HeaderView />
  <main class="overflow-hidden">
    <BreadcrumbView v-if="route.name !== 'home'"/>
    <RouterView />
  </main>
  <FooterView />
</template>

<script setup lang="ts">
import HeaderView from './modules/include/views/HeaderView.vue';
import FooterView from './modules/include/views/FooterView.vue';
import BreadcrumbView from './modules/include/views/BreadcrumbView.vue';
import { useRoute } from 'vue-router'

const route = useRoute()
</script>