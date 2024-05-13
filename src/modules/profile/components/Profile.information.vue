<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <form @submit.prevent="submit">
        <div class="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
            <div class="w-full sm:w-1/2">
                <label class="mb-3 block text-sm font-medium text-black-900 dark:text-gray-50"
                    for="fullName">{{ $t('form.full_name') }}</label>
                <div class="relative">
                    <span class="absolute left-4.5 top-4">
                        <UserIcon class="w-5 h-5" />
                    </span>
                    <input
                        class="w-full rounded border py-3 pl-11.5 pr-4.5 dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 border-gray-100 !bg-gray-50 bg-transparent font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50"
                        type="text" v-model="state.fullName" id="fullName" :placeholder="$t('form.place_hoder.full_name')"></div>
            </div>
            <div class="w-full sm:w-1/2"><label class="mb-3 block text-sm font-medium text-black-900 dark:text-gray-50"
                    for="phoneNumber">{{$t('form.phone')}}</label>
                    <div class="relative">
                    <span class="absolute left-4.5 top-4">
                        <DevicePhoneMobileIcon class="w-5 h-5" />
                    </span>
                    <input
                    class="w-full rounded border py-3 pl-11.5 pr-4.5 dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 border-gray-100 !bg-gray-50 bg-transparent font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50"
                        type="text" v-model="state.phoneNumber" id="phoneNumber" :placeholder="$t('form.place_holder.phone')"></div>
                </div>
        </div>
        <div class="mb-5.5"><label class="mb-3 block text-sm font-medium text-black-900 dark:text-gray-50"
                for="emailAddress">{{$t('form.email')}}</label>
            <div class="relative">
                <span class="absolute left-4.5 top-4">
                    <EnvelopeIcon class="w-5 h-5" />
                </span>
                <input
                class="w-full rounded border py-3 pl-11.5 pr-4.5 dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 border-gray-100 !bg-gray-50 bg-transparent font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50"
                    type="email" v-model="state.email" id="emailAddress" :placeholder="$t('form.place_holder.email')"></div>
        </div>
        
       
        <div class="flex justify-end gap-4.5">
            <button :disabled="isChange"
                class="bg-cerulean-600 text-cerulean-100 flex justify-center rounded px-6 py-2 font-medium hover:bg-opacity-90 dark:bg-cerulean-500 dark:text-cerulean-50 disabled:!bg-cerulean-100 disabled:!text-cerulean-600"
                type="submit"> Save </button></div>
                {{ isChange }}
    </form>
</template>

<script setup lang="ts">
import { i18n } from '@/core/services/base/translation';
import { successNotification } from '@/core/services/helpers/alert.helper';
import { put } from '@/core/services/helpers/fetcher.helper';
import { useUserstore } from '@/core/stores/user';
import type { TUser, TUserRequest } from '@/modules/admin-oauth2/models/type';
import { DevicePhoneMobileIcon, EnvelopeIcon, UserIcon } from '@heroicons/vue/24/outline';
import { computed, onMounted, ref, type ComputedRef, type Ref } from 'vue';

const state: Ref<TUser> = ref({} as TUser)
const { user, updateData } = useUserstore()

const isChange: ComputedRef<boolean> = computed(()=>JSON.stringify(user) === JSON.stringify(state.value))

onMounted((): void=>{
    state.value ={...user}
})

const submit = async (): Promise<void> => {
    put<TUserRequest,TUser>('/api/users/'+user.id,state.value).then(response => {
        if(response?.data) {
            updateData(response.data)
            successNotification(i18n.global.t('message.update_success'))
        }
    })
}

</script>
