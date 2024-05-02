<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <a target="_blank" :href="data.url">
        <img class="w-12 "
        :alt="data.type" :src="data.imageUrl">
    </a>
</template>

<script setup lang="ts">
import type { TSocial } from '../models/type';

defineProps<{
    data: TSocial
}>()

</script>
