<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <aside>
        <ul class="w-full p-0 m-0 overflow-hidden rounded tracking-[0.05em]">
            <li class="text-lg font-bold leading-5 text-white px-6 py-[14px] bg-cerulean-400">{{ data.title }}</li>
            <AsideItem v-for="item in data.list" :key="item.title" :data="item" :parent-slug="data.slug"/>
        </ul>
    </aside>
</template>

<script setup lang="ts">
import type { TAside } from '../models/type';
import AsideItem from './Aside.item.vue';

defineProps<{
    data : TAside
}>()

</script>

