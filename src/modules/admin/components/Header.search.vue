<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <button type="button" @click="openModal" class="">
        <MagnifyingGlassIcon class="w-5 h-5" />
    </button>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-50">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex justify-center h-screen p-4 md:p-10 text-center bg-black/70">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">

                        <DialogPanel
                            class="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                            <!-- component -->
                            <div class="w-full">
                                <div class="inline-flex w-full flex-col justify-center relative text-gray-500">
                                    <div class="flex items-center gap-x-2 rounded border border-black-haze-500 ">
                                        <button type="button" class="focus:outline-none">
                                            <MagnifyingGlassIcon class="w-5 h-5 ml-4" />
                                        </button>
                                        <input type="text" v-model="search"
                                            class="p-2 w-full bg-black-haze-500 focus:bg-white focus:outline-none focus:ring-0 focus:border-transparent rounded"
                                            :placeholder="$t('form.place_holder.search')" />
                                        <select v-model="indexName" class="focuse:ring-0 focus:outline-none">
                                            <option v-for="idb in indexNames" :value="idb" :key="idb.value">
                                                {{ $t(idb.name) }}</option>
                                        </select>
                                    </div>
                                    <DialogTitle as="h3" class="text-lg leading-6 text-gray-900 my-3 font-bold">
                                        {{ $t(indexName.name) }}
                                    </DialogTitle>
                                    <ul class="bg-white divide-y-[1px] divide-gray-500 w-full mt-2 ">
                                        <li v-for="item in updatedData" :key="item._id"
                                            class="px-2 py-1 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
                                            <a href="#" class="justify-between flex">
                                                <span
                                                    v-html="item._source?.name.toLowerCase().replace(search, `<b>${search}</b>`)"></span>
                                                <RouterLink :to="'api.' + item._index"
                                                    class="capitalize text-sky-700">{{ item._index }}</RouterLink>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle, } from '@headlessui/vue'
import { computed, ref, watch } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { useDebounceFn } from '@vueuse/core';
import type { IHit, IRootObject } from '../models/interface';
import type { TOption } from '../models/type';
import axios from 'axios';

const search = ref<string>('')

const indexNames: TOption[] = [
    {
        'name': 'navigation.all',
        'value': '_all',
    },
    {
        'name': 'navigation.audio',
        'value': 'audio',
    },
    {
        'name': 'navigation.collection',
        'value': 'collection',
    }
]

const indexName = ref<TOption>(indexNames[0])

const url = computed(() => {
    return `http://localhost:9200/${indexName.value.value}/_search`
})
const data = ref<IHit<any>[]>([])
const debouncedFn = useDebounceFn(async () => {
    await fetch()
}, 1000)
watch(() => search.value, () => {
    debouncedFn()
})
const fetch = async () => {
    const response = await axios.post<IRootObject<any>>(url.value, {
        "query": {
            "query_string": {
                "query": `*${search.value}*`,
                "default_field": "*"
            }
        }
    })
    data.value = response.data.hits.hits
}
const updatedData = computed(() => {
    return data.value.map((item) => {
        return {
            ...item,
            _index: item._index,
            _id: item._id,
            _source: {
                ...item._source,
                name: item._source?.title || item._source?.name
            }
        }
    })
})

const isOpen = ref(false)

function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}
</script>