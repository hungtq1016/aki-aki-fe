<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <router-link :to="data.url" class="text-xs md:text-sm text-white dark:text-gray-100">
        <div class="flex gap-1 items-center">
            <component :is="data.icon" class="w-4 h-4"/>
            <span>{{ $t(data.name) }}</span>
        </div>
    </router-link>
</template>

<script setup lang="ts">
import { TContact } from '../models/type'
defineProps<{
    data : TContact
}>()
</script>
