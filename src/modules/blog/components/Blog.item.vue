<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="border border-gray-200 rounded-md h-full flex flex-col">
            <router-link :to="data.slug">
                <img class="w-full rounded-t-md flex-shrink-0 h-60 object-cover"
                    :src="data.imageUrl"
                    :alt="data.title">

            </router-link>
            <div class="relative h-full px-3 pb-6 flex flex-col">

                <router-link :to="data.slug">
                    <div class="mx-height text-lg line-clamp-2 font-bold pt-4 flex-1">
                        {{data.title}}
                    </div>
                </router-link>
                <div class="text-sm flex-shrink-0 line-clamp-3">
                   {{ data.desc }}
                </div>
                <div class="flex-shrink-0 pt-3 text-center">
                    <router-link class="text-sm underline underline-offset-[4px] text-cerulean-400"
                        :to="data.slug">
                        {{ $t('content.more') }}
                    </router-link>
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
import type { TBlogItem } from '../models/type';

defineProps<{
    data: TBlogItem
}>()
</script>
