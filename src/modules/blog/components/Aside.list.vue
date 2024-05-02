<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <aside>
        <ul class="pl-2">
            <AsideItem v-for="data in aside" :key="data.title" :data="data"/>
        </ul>
    </aside>
</template>

<script setup lang="ts">
import AsideItem from './Aside.item.vue';
import { aside } from '../services/data/data'

</script>
