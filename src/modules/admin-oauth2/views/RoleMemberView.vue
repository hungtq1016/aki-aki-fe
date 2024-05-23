<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section class="bg-white py-10">
        <div class="text-black-900 py-1 text-sm font-medium dark:text-gray-50 flex justify-between max-w-lg m-auto items-center">
            <span for="search">{{ $t('form.permssions') }}</span>
    
        </div>
    <div class="py-4 max-w-lg m-auto">
        <div class="flex gap-2">
            <input 
                id="search"
                v-model="search" type="text" 
                :placeholder="$t('form.place_holder.search')"
                class="dark:!border-zinc-950 dark:!bg-zinc-900 dark:text-gray-50 text-gray-900 w-full rounded-lg border border-gray-100 !bg-gray-100 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50" />
            <MemberSearch 
            :fetched-data="users" 
            @on-submit="async(e)=>await handleSubmit(e)"/>
        </div>
    </div>
    <div class="">
        <ul class="flex flex-col gap-2 max-w-lg m-auto">
            <li v-for="(item, index) in users" :key="index">
            <label :for="`checkbox-${index}`">
                <div class="border border-gray-100 relative dark:border-zinc-900 rounded-md">
                <div
                    class="flex justify-between px-4 py-2 bg-gray-100 peer-checked:bg-cerulean-100 dark:peer-checked:!bg-slate-950 dark:bg-zinc-950">
                    <div class="flex gap-x-1 items-center capitalize text-gray-950 text-sm font-semibold dark:text-gray-50">
                    {{ item.fullName }} 
                    </div>
                    <button @click="()=>handleDelete(index)">
                        <XMarkIcon class="w-5 h-5 text-red-600"/>
                    </button>
                </div>
                <div
                    class="border-t border-gray-100 bg-gray-50 px-4 dark:border-zinc-900 py-2 text-xs text-gray-600 peer-checked:bg-cerulean-50 dark:bg-zinc-800 dark:text-gray-300 dark:peer-checked:!bg-slate-900">
                    {{ item.email }}
                </div>
                </div>
            </label>
            </li>
        </ul>
    </div>
    </section>
</template>

<script setup lang="ts">

import { onMounted } from 'vue';
import { search, fetch, users, submitGroups, remove } from '../services/logictics/role.member';
import { useRoute } from 'vue-router';
import MemberSearch from '../components/Member.search.vue';
import { XMarkIcon } from '@heroicons/vue/24/solid';
import Swal from 'sweetalert2'
import { i18n } from '@/core/services/base/translation';

const route = useRoute()

const handleSubmit = async (e:any) => {
    await submitGroups(e,String(route.params.id))
}

const handleDelete = (index: number) => {
    Swal.fire({
        title: "Bạn có chắc chắn xóa?",
        showCancelButton: true,
        confirmButtonText: i18n.global.t('button.confirm'),
        cancelButtonText: i18n.global.t('button.cancel')
    }).then(async (result) => {
        if (result.isConfirmed) {
            await remove(index)
        } 
    })
}

onMounted(async () => {
    await fetch(String(route.params.id))
})

</script>