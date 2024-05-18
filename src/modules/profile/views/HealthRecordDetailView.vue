<template>
    <div class="container mx-auto p-6">
        <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-bold mb-4">{{$t('content.patient_record')}}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">{{$t('content.full_name')}}</label>
                        <p class="text-gray-700">{{ state?.user?.fullName }}</p>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">{{$t('content.birth_day')}}</label>
                        <p class="text-gray-700">{{ state?.birthDay }}</p>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">{{$t('content.gender')}}</label>
                        <p class="text-gray-700">{{ state?.gender }}</p>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">{{$t('content.phone_number')}}</label>
                        <p class="text-gray-700">{{ state?.user?.phoneNumber }}</p>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">{{$t('content.address')}}</label>
                        <p class="text-gray-700">{{ state?.user?.address }}</p>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">{{$t('content.height')}}</label>
                        <p class="text-gray-700">{{ state.height }}</p>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">{{$t('content.weight')}}</label>
                        <p class="text-gray-700">{{ state.weight }}</p>
                    </div>
                </div>
                <div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">{{$t('content.id')}}</label>
                        <p class="text-gray-700">{{ state.id }}</p>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">{{$t('content.temperature')}}</label>
                        <p class="text-gray-700">{{ state.temperature }}</p>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">{{$t('content.heart_beat')}}</label>
                        <p class="text-gray-700">{{ state.heartBeat }}</p>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">{{$t('content.blood_pressure')}}</label>
                        <p class="text-gray-700">{{ state.bloodPressure }}</p>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">{{$t('content.anamnesis')}}</label>
                        <p class="text-gray-700">{{ state.anamnesis }}</p>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">{{$t('content.diagnosis')}}</label>
                        <p class="text-gray-700">{{ state.diagnosis }}</p>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">{{$t('content.invoices')}}</label>
                        <p v-for="item in state.invoices" :key="item.id"
                        class="text-gray-700 flex items-center gap-x-1">
                            <ChevronRightIcon class="w-3 h-3 text-gray-600"/>
                            <router-link :to="`/profile/invoice/${item.id}`">
                                {{ item.id }}
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetch, state } from '../services/logictics/record.detail';
import { currency } from '@/core/services/utils/util.number';
import { format } from 'date-fns';
import { ChevronRightIcon } from '@heroicons/vue/24/solid';

const route = useRoute()
const router = useRouter()

onMounted(async () => {

    const response = await fetch(String(route.params.id))

})
</script>
