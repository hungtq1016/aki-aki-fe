<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="pb-10">
        <div class="py-4">
            <div class="font-bold text-ebony-clay-950">{{ $t('content.assistance_contact') }}:</div>
            <div class="flex pl-2 gap-y-2 flex-col mt-2">
                <div v-for="data in socials" :key="data.title">
                    <div class="flex gap-x-1 items-center">
                        <ChevronRightIcon class="w-3 h-3" />
                        <span class="font-medium">{{ data.lable }} :</span>
                        <a :href="data.type + data.url" class="text-gray-600">{{ data.title }}</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-4">
            <div class="font-bold text-ebony-clay-950">{{ $t('content.directly_contact') }}:</div>
            <div class="flex pl-2 gap-y-2 flex-col mt-2">
                <div v-for="(data,index) in branchs" :key="data.name">
                    <div class="flex gap-x-1 items-center">
                        <InformationCircleIcon class="w-5 h-5" />
                        <span class="font-medium text-cerulean-500">{{ `${$t('content.branch')} ${index+1}` }} </span>
                    </div>
                    <div class="mt-2 pl-2 flex flex-col gap-1">
                        <div class="flex gap-x-2 items-center">
                            <MapPinIcon class="w-3 h-3 text-rose-500"/>
                            <span>{{ `${data.address1} ${data.address2}` }}</span>
                        </div>
                        <div class="flex gap-x-2 items-center">
                            <PhoneIcon class="w-3 h-3 text-green-600"/>
                            <span>{{ data.phone1 }}</span>
                            <span v-if="data.phone2">- {{ data.phone2 }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon, InformationCircleIcon } from '@heroicons/vue/24/outline';
import { socials, branchs } from '../services/data/contact'
import { MapPinIcon, PhoneIcon } from '@heroicons/vue/24/solid';
</script>
