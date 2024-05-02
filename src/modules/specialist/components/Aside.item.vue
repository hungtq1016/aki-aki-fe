<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <li class="text-lg leading-5 text-gray-600 px-6 py-4 border border-t-0 border-gray-450 hover:text-cerulean-600">
        <router-link :to="`/${parentSlug}/${data.slug}`">{{ data.title }}</router-link>
    </li>
</template>

<script setup lang="ts">
import type { TAsideItem } from '../models/type';

defineProps<{
    data: TAsideItem,
    parentSlug: string
}>()
</script>

<style scoped>
.router-link-active.router-link-exact-active{
    @apply text-cerulean-600
}
</style>