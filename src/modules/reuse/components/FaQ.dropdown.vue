<template>
  <div class="w-full">
    <FaQItem v-for="data in faqs" :key="data.title" :data="data" />
  </div>
</template>

<script setup lang="ts">
import FaQItem from './FaQ.item.vue';
import { faqs } from '../services/data/data'

</script>