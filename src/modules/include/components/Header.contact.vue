<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <li class="text-white">
        <div class="flex gap-x-4 items-center bg-persian-red-600 h-14 p-2 rounded-full">
            <div class="p-1 bg-white rounded-full">
                <component :is="data.icon" class="w-6 h-6 text-persian-red-600 m-1" />
            </div>
            <router-link v-if="data.tag === 'router'"
            :to="`${data.type}${data.url}`" class="uppercase text-lg relative pr-4 font-semibold">
                {{ $t(data.label) }}
            </router-link>
            <a v-else class="uppercase text-lg relative pr-4 font-semibold"
            :href="`${data.type}${data.url}`">
                {{ data.label }}
            </a>
        </div>
    </li>
</template> 

<script setup lang="ts">

import { defineProps } from 'vue';
import type { TContact } from '../models/type';

defineProps<{
    data: TContact
}>()


</script>
