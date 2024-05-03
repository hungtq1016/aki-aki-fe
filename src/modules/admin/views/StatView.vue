<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import StatItem from '../components/Stat.item.vue';
import { cardItems } from '../services/data/stat'
</script>

<template>
    <StatItem v-for="data in cardItems" :key="data.title" :data="data"/>
</template>
