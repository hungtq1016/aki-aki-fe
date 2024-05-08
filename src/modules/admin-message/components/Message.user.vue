<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex cursor-pointer items-center rounded py-2 px-4 hover:bg-gray-100 dark:hover:bg-zinc-950">
        <div class="relative mr-3.5 h-11 w-full max-w-11 rounded-full"><img :src="data.imageUrl"
                :alt="`profile-${data.fullName}`" class="h-full w-full object-cover object-center">
            <span class="absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-gray-2 bg-green-600" />
        </div>
        <div class="w-full">
            <h5 class="text-sm font-medium text-black-1000 dark:text-white">{{ data.fullName }}</h5>
            <p class="text-sm font-medium line-clamp-1">{{ data.message }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TUser } from '../models/type';

defineProps<{
    data: TUser
}>()
</script>
