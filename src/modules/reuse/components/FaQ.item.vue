<template>
    <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
            class="flex w-full justify-between rounded-lg bg-cerulean-100 px-4 py-2 text-left text-sm font-medium text-cerulean-900 hover:bg-cerulean-200 focus:outline-none focus-visible:ring focus-visible:ring-cerulean-500/75">
            <span>{{ data.title }}</span>
            <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-cerulean-500" />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-gray-500">
            {{ data.answer }}
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
import type { TFaQ } from '../models/type';

defineProps<{
    data: TFaQ
}>()
</script>
