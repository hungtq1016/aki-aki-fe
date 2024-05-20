<template>
    <div class="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8 relative">
        <h1 class="font-bold text-2xl my-4 text-center text-cerulean-800">{{ $t('content.invoice') }}</h1>
        <hr class="mb-2">
        <div class="flex justify-between mb-6">
            <div class="text-gray-700">
                <div>{{ $t('content.date') }}: {{ format(new Date(state?.createdAt || '01/01/2000'), "dd/MM/yyyy") }}
                </div>
                <div>{{ $t('table.status') }}: <span :class="[stat.classes, '!bg-transparent']">{{ $t(stat.label) }}</span></div>
            </div>
        </div>
        <div class="mb-4">
            <h2 class="text-lg font-bold mb-4">{{ $t('content.information') }}:</h2>
            <div class="text-gray-700 mb-2">{{ state?.patient?.fullName }}</div>
            <div class="text-gray-700 mb-2">{{ state?.patient?.phoneNumber }}</div>
            <div class="text-gray-700 mb-2">{{ state?.patient?.address }}</div>
            <div class="text-gray-700">{{ state?.patient?.email }}</div>
        </div>
        <div class="mb-8 flex items-end flex-col">
            <h2 class="text-lg font-bold mb-4">{{ $t('content.nurse') }}</h2>
            <div class="text-gray-700 mb-2">{{ state?.nurse?.fullName }}</div>
        </div>
        <table class="w-full mb-8">
            <thead>
                <tr>
                    <th class="text-left font-bold text-gray-700">{{ $t('content.service') }}</th>
                    <th class="text-right font-bold text-gray-700">{{ $t('content.amount') }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in state?.invoiceDetails" :key="item.id">
                    <td class="text-left text-gray-700">{{ item.servicePrice.label }}</td>
                    <td class="text-right text-gray-700">{{ currency(item.servicePrice.price) }}</td>
                </tr>
            </tbody>
            <tfoot class="border-t mt-2">
                <tr>
                    <td class="text-left text-gray-700">{{ $t('content.tax') }}</td>
                    <td class="text-right text-gray-700">{{ currency(state?.tax || 0) }}</td>
                </tr>
                <tr>
                    <td class="text-left font-bold text-gray-700">{{ $t('content.total') }}</td>
                    <td class="text-right font-bold text-gray-700">{{ currency(state?.total || 0) }}</td>
                </tr>
            </tfoot>
        </table>
        <div class="text-gray-700 mb-2">{{ $t('message.ty_order') }}</div>
        <div class="text-gray-700 text-sm">{{ $t('message.check_email') }}</div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetch, state } from '../services/logictics/invoice.detail';
import { currency } from '@/core/services/utils/util.number';
import { format } from 'date-fns';
import { status } from '@/core/services/data/status';

const route = useRoute()

onMounted(async () => {
    await fetch(String(route.params.id))
})


const stat = computed(()=>{
  const result = status.find(item => item.value == state.value.status) || status[0]
  return result
})

</script>