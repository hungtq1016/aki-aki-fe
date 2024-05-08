<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import ChatItem from '../components/Chat.item.vue';
import { chatData } from '../services/data/chat'
</script>

<template>
    <div
        class="col-span-12 rounded-sm border border-zumthor-100 bg-white py-6 shadow-default dark:border-oxford-blue-900 dark:bg-zinc-950  xl:col-span-4">
        <h4 class="mb-6 px-[30px] text-xl font-semibold text-slate-950 dark:text-white">Chats</h4>

        <div>
            <ChatItem v-for="data in chatData" :key="data.name" :data="data" />
        </div>
    </div>
</template>
