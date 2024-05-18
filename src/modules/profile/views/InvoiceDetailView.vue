<template>
    <div class="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
    <h1 class="font-bold text-2xl my-4 text-center text-blue-600">KRP Services</h1>
    <hr class="mb-2">
    <div class="flex justify-between mb-6">
        <h1 class="text-lg font-bold">Invoice</h1>
        <div class="text-gray-700">
            <div>Date: 01/05/2023</div>
            <div>Invoice #: INV12345</div>
        </div>
    </div>
    <div class="mb-8">
        <h2 class="text-lg font-bold mb-4">Bill To:</h2>
        <div class="text-gray-700 mb-2">John Doe</div>
        <div class="text-gray-700 mb-2">123 Main St.</div>
        <div class="text-gray-700 mb-2">Anytown, USA 12345</div>
        <div class="text-gray-700">johndoe@example.com</div>
    </div>
    <table class="w-full mb-8">
        <thead>
            <tr>
                <th class="text-left font-bold text-gray-700">{{$t('content.desc')}}</th>
                <th class="text-right font-bold text-gray-700">{{$t('content.amount')}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in state.invoiceDetails" :key="item.id">
                <td class="text-left text-gray-700">{{ item.servicePrice.label }}</td>
                <td class="text-right text-gray-700">{{ currency(item.servicePrice.price) }}</td>
            </tr>
        </tbody>
        <tfoot class="border-t mt-2">
            <tr>
                <td class="text-left text-gray-700">{{ $t('content.tax')}}</td>
                <td class="text-right text-gray-700">{{ currency(state.tax) }}</td>
            </tr>
            <tr>
                <td class="text-left font-bold text-gray-700">{{ $t('content.total')}}</td>
                <td class="text-right font-bold text-gray-700">{{ currency(state.total) }}</td>
            </tr>
        </tfoot>
    </table>
    <div class="text-gray-700 mb-2">Thank you for your business!</div>
    <div class="text-gray-700 text-sm">Please remit payment within 30 days.</div>
</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetch, state } from '../services/logictics/invoice.detail';
import { currency } from '@/core/services/utils/util.number';

const route = useRoute()

onMounted(async()=>{
    await fetch(String(route.params.id))
})

</script>