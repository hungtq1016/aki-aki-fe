<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="px-5">
        <div>
            <div class="w-full pt-[70%] relative overflow-hidden bg-white rounded mb-2">
                    <div class="bg-image-show lazy_block bg-[50%] bg-cover bg-no-repeat absolute inset-0 block"
                        :style="{ 'background-image': `url(${data.imageUrl})` }">
                    </div>
                </div>
            <h3 class="text-center text-gray-600 capitalize">{{ data.title }}</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TCertificate } from '../models/type';

defineProps<{
    data: TCertificate
}>()


</script>
