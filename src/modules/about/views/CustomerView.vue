<template>
    <section class="pb-10">
        <div class="max-w-screen-xl m-auto">
            <div class="grid grid-cols-1 gap-8 py-10 lg:grid-cols-2">
                <CustomerItem v-for="data in quotes" :key="data.author" :data="data" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import CustomerItem from '../components/Customer.item.vue';
import { quotes } from '../services/data/data'
</script>

