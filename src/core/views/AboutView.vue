<template>
  <router-view></router-view>
  <BookingView />
  <FaQView />
</template>

<script setup lang="ts">
import BookingView from '@/modules/reuse/views/BookingView.vue'
import FaQView from '@/modules/reuse/views/FaQView.vue'
</script>
