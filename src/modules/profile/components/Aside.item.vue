<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <li>
        <router-link :to="data.slug"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-cerulean-100 dark:hover:bg-gray-700 group">
            <img class="w-5 h-5" :src="imageBuilderUrl(String(data.imageUrl))"/>
            <span class="ms-3">{{ $t(String(data?.label)) }}</span>
        </router-link>
    </li>
</template>

<script setup lang="ts">
import { imageBuilderUrl } from '@/core/services/utils/util.string';
import type { TUrl } from '@/modules/admin-branch/models/type';

defineProps<{
    data: TUrl
}>()
</script>
