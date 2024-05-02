<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div
        :class="[data.mostPopular ? 'ring-2 ring-cerulean-600' : 'ring-1 ring-gray-200', 'rounded-3xl p-8 xl:p-10']">
        <div class="flex items-center justify-between gap-x-4">
            <h3 :id="data.id"
                :class="[data.mostPopular ? 'text-cerulean-600' : 'text-gray-900', 'text-lg font-semibold leading-8']">
                {{ data.name }}</h3>
            <p v-if="data.mostPopular"
                class="rounded-full bg-cerulean-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-cerulean-600">
                Most popular</p>
        </div>
        <p class="mt-4 text-sm leading-6 text-gray-600">{{ data.desc }}</p>
        <p class="mt-6 flex items-baseline gap-x-1">
            <span class="text-4xl font-bold tracking-tight text-gray-900">{{ data.price[frequency.value]
                }}</span>
            <span class="text-sm font-semibold leading-6 text-gray-600">{{ frequency.suffix }}</span>
        </p>
        <a :href="data.slug" :aria-describedby="data.id"
            :class="[data.mostPopular ? 'bg-cerulean-600 text-white shadow-sm hover:bg-cerulean-500' : 'text-cerulean-600 ring-1 ring-inset ring-cerulean-200 hover:ring-cerulean-300', 'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cerulean-600']">Buy
            plan</a>
        <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
            <li v-for="feature in data.features" :key="feature" class="flex gap-x-3">
                <CheckIcon class="h-6 w-5 flex-none text-cerulean-600" aria-hidden="true" />
                {{ feature }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { TRrequency, TTier } from '../models/type';
import { CheckIcon } from '@heroicons/vue/20/solid'

defineProps<{
    data: TTier,
    frequency: TRrequency
}>()
</script>
