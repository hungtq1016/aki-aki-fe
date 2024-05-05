<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section class="py-2 bg-black-1000">
            <div class="max-w-screen-xl m-auto">
                <div class="flex gap-x-2 md:gap-x-4">
                    <HeaderAdminItem v-for="data in adminNavigations" :key="data.name" :data="data"/>
                </div>
            </div>
    </section>
</template>

<script setup lang="ts">
import { adminNavigations } from '../services/data/header.data'
import HeaderAdminItem from './Header.admin.item.vue'
</script>
