<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <GridItem v-for="data in abouts" :key="data.title" :data="data"/>
    </div>
</template>

<script setup lang="ts">
import GridItem from './Grid.item.vue';
import { abouts } from '../services/data/data'
</script>
