<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex flex-col items-center px-6 text-center sm:text-left sm:flex-row sm:px-0 about-item js-hover">
            <div class="w-40 sm:w-60 min-w-40 sm:min-w-60">
                <router-link :to="data.slug">
                    <img class="w-40 h-40 sm:w-60 sm:h-60 transition-all rounded-full"
                        :src="data.imageUrl"
                        :alt="data.title">
                </router-link>
            </div>
            <div class="flex flex-col ml-0 text-left sm:ml-6">
                <component :is="data.icon" class="mt-4 sm:w-9 sm:m-0 text-cerulean-600"/>
                <router-link :to="data.slug"
                    class="mt-3 text-base text-cerulean-600 capitalize sm:text-2xl hover:text-cerulean-500">
                    {{ data.title }}
                </router-link>
                <p class="mt-2 text-xs text-gray-600 sm:mt-4 sm:text-sm text-justify line-clamp-3">
                    {{ data.desc }}
                </p>
            </div>
        </div>
</template>

<script setup lang="ts">
import type { TAboutThumb } from '../models/type';

    defineProps<{
        data: TAboutThumb
    }>()
</script>
