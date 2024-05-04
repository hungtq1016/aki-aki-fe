<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div class="mt-5 flex justify-center">
            <RadioGroup v-model="frequency"
                class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-black-haze-5000">
                <RadioGroupLabel class="sr-only">Payment frequency</RadioGroupLabel>
                <RadioGroupOption as="template" v-for="option in frequencies" :key="option.value" :value="option"
                    v-slot="{ checked }">
                    <div
                        :class="[checked ? 'bg-cerulean-600 text-white' : 'text-gray-500', 'cursor-pointer rounded-full px-2.5 py-1']">
                        <span>{{ option.title }}</span>
                    </div>
                </RadioGroupOption>
            </RadioGroup>
        </div>
        <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <InsuranceItem v-for="data in tiers" :key="data.id" :data="data" :frequency="frequency"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { frequencies, tiers } from '../services/data/data'
import { ref } from 'vue';
import type { TRrequency } from '../models/type';
import InsuranceItem from './Insurance.item.vue';

const frequency = ref<TRrequency>(frequencies.value[0])

</script>