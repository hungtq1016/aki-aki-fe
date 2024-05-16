<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <li class="text-white">
        <div v-if="!isLogin"
        class="flex gap-x-1 items-center p-2 border border-cerulean-600 rounded-md bg-cerulean-600 text-white">
            <ArrowRightEndOnRectangleIcon class="w-4 h-4 text-white m-1" />
            <router-link to="/oauth2" class="uppercase text-sm relative pr-2 font-semibold">
                <span class="text-cerulean-50">{{ $t('route.login') }}</span>
            </router-link>
        </div>
        <HeaderUser v-else/>
    </li>
</template>

<script setup lang="ts">
import { useUserstore } from '@/core/stores/user';
import HeaderUser from './Header.user.vue';
import { ArrowRightEndOnRectangleIcon } from '@heroicons/vue/24/outline';
import { storeToRefs } from 'pinia'

const store = useUserstore()

const { isLogin } = storeToRefs(store)

</script>
