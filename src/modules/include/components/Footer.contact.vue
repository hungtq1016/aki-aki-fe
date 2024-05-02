<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <li class="text-white">
        <div class="flex gap-x-4 items-center">
            <component :is="data.icon" class="w-8 h-8" />
            <a :href="`${data.type}${data.url}`" class="uppercase text-[22px] relative">
                {{ data.name }}
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
