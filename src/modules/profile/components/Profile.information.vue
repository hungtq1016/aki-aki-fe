<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form @submit.prevent="submit">
    <div class="mb-5.5 grid grid-cols-1 gap-5.5 sm:grid-cols-2">
      <div>
        <label class="mb-3 block text-sm font-medium text-black-900 dark:text-gray-50" for="fullName">{{
          $t('form.fullname') }}</label>
        <div class="relative">
          <span class="absolute left-4.5 top-4">
            <UserIcon class="w-5 h-5" />
          </span>
          <input
            class="w-full rounded border py-3 pl-11.5 pr-4.5 dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 border-gray-100 !bg-gray-50 bg-transparent font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50"
            type="text" v-model="state.fullName" id="fullName" :placeholder="$t('form.place_holder.fullname')" />
        </div>
      </div>
      <div>
        <label class="mb-3 block text-sm font-medium text-black-900 dark:text-gray-50" for="phoneNumber">{{
          $t('form.phone') }}</label>
        <div class="relative">
          <span class="absolute left-4.5 top-4">
            <DevicePhoneMobileIcon class="w-5 h-5" />
          </span>
          <input @keyup="formatToPhone" @keydown="enforceFormat"
            class="w-full rounded border py-3 pl-11.5 pr-4.5 dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 border-gray-100 !bg-gray-50 bg-transparent font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50"
            type="text" v-model="state.phoneNumber" id="phoneNumber" :placeholder="$t('form.place_holder.phone')" />
        </div>

      </div>
      <div>
        <label class="mb-3 block text-sm font-medium text-black-900 dark:text-gray-50" for="email">{{ $t('form.email')
          }}</label>
        <div class="relative">
          <span class="absolute left-4.5 top-4">
            <EnvelopeIcon class="w-5 h-5" />
          </span>
          <input
            class="w-full rounded border py-3 pl-11.5 pr-4.5 dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 border-gray-100 !bg-gray-50 bg-transparent font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50"
            type="text" disabled :value="state.email" id="email" :placeholder="$t('form.place_holder.email')" />
        </div>
      </div>
      <div class="col-span-2" >
          <label class="mb-3 block text-sm font-medium text-black-900 dark:text-gray-50" for="address">
            {{ $t('form.address')}}
          </label>
          <div class="relative">
            <span class="absolute left-4.5 top-4">
              <HomeIcon class="w-5 h-5" />
            </span>
            <textarea id="address"
              class="w-full rounded border py-3 pl-11.5 pr-4.5 dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 border-gray-100 !bg-gray-50 bg-transparent font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50"
              v-model="state.address" 
              :placeholder="$t('form.place_holder.address')" />
          </div>
        </div>
    </div>

    <div class="flex justify-end gap-4.5">
      <button :disabled="isChange"
        class="bg-cerulean-600 text-cerulean-100 flex justify-center rounded px-6 py-2 font-medium hover:bg-opacity-90 dark:bg-cerulean-500 dark:text-cerulean-50 disabled:!bg-cerulean-100 disabled:!text-cerulean-600"
        type="submit">
        Save
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import {  onMounted, ref, watch } from 'vue'
import { DevicePhoneMobileIcon, EnvelopeIcon, HomeIcon, UserIcon } from '@heroicons/vue/24/outline'

import { i18n } from '@/core/services/base/translation'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { get, put } from '@/core/services/helpers/fetcher.helper'
import { enforceFormat, formatToPhone } from '@/core/services/utils/util.number'
import { useUserstore } from '@/core/stores/user'

import type { Ref } from 'vue'
import type { TUser, TUserRequest } from '@/modules/admin-oauth2/models/type'

const state: Ref<TUser> = ref({} as TUser)
const { user, updateData } = useUserstore()

const isChange: Ref<boolean> = ref(false)

onMounted(async () => {
  await fetch()
})

const fetch = async () => {
  await get<TUser>('/api/authenticate/user').then(response => {
    if (response?.data) {
      state.value = response.data
    }
  })
}

const submit = async (): Promise<void> => {
  put<TUserRequest, TUser>('/api/users/' + user.id, state.value).then((response) => {
    if (response?.data) {
      updateData(response.data)
      successNotification(i18n.global.t('message.update_success'))
    }
  })
}

watch(state,(newValue)=>{
  isChange.value =JSON.stringify(user) === JSON.stringify(newValue)
},{deep:true})
</script>
