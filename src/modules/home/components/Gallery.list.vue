<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <ul class="grid grid-cols-3 divide-x-2">
        <GalleryItem v-for="data in counts" :key="data.title" :data="data" />
    </ul>
</template>

<script setup lang="ts">
import GalleryItem from './Gallery.item.vue';
import { counts } from '../services/data/data'

</script>
