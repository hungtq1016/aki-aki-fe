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
                  <div class="flex items-center gap-x-2 rounded border border-zinc-200 bg-zinc-200">
                    <button type="button" class="focus:outline-none">
                      <MagnifyingGlassIcon class="w-5 h-5 ml-4" />
                    </button>
                    <input type="text" v-model="search"
                      class="p-2 w-full bg-zinc-200 focus:outline-none focus:ring-0 focus:border-transparent rounded"
                      :placeholder="$t('form.place_holder.search')" />
                    <select v-model="indexName" class="focuse:ring-0 focus:outline-none bg-zinc-200">
                      <option v-for="idb in indexNames" :value="idb" :key="idb.value">{{ $t(idb.name) }}</option>
                    </select>
                  </div>
                  <DialogTitle as="h3" class="text-lg leading-6 text-gray-900 my-3 font-bold">
                    {{ $t(indexName.name) }}
                  </DialogTitle>
                  <ul class="bg-white divide-y-[1px] divide-gray-500 w-full mt-2 ">
                    <div v-if="updatedData.length === 0">Not found</div>
                    <template v-else>
                      <li v-for="item in updatedData" :key="item._id"
                      class="px-2 py-1 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
                      <a href="#" class="justify-between flex">
                        <span v-if="item._source.fullName" v-html="item._source?.fullName?.toLowerCase().replace(search, `<b>${search}</b>`)"></span>
                        <span v-if="item._source.title" v-html="item._source?.title?.toLowerCase().replace(search, `<b>${search}</b>`)"></span>
                        <span v-if="item._source.name" v-html="item._source?.name?.toLowerCase().replace(search, `<b>${search}</b>`)"></span>
                        <span v-if="item._source.label" v-html="item._source?.label?.toLowerCase().replace(search, `<b>${search}</b>`)"></span>
                        <RouterLink :to="`${indexName.route}/${item._id}` || '/admin'" class="capitalize text-sky-700">{{ item._index }}</RouterLink>
                      </a>
                    </li>
                    </template>
                    
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
import axios from 'axios';
import type { IHit } from '@/core/models/interface';
import type { TOption } from '@/core/models/type';

const search = ref<string>('')

const indexNames: TOption[] = [
  {
    'name': 'content.schedule',
    'value': 'schedule',
    'route': '/admin/schedules'
  },
  {
    'name': 'content.invoice',
    'value': 'invoice',
    'route': '/admin/invoices'
  },
  {
    'name': 'content.blog',
    'value': 'blog',
    'route': '/admin/blogs'
  },
  {
    'name': 'content.permission',
    'value': 'permission',
    'route': '/admin/permissions'
  },
  {
    'name': 'content.user',
    'value': 'user',
    'route': '/admin/users'
  },
  {
    'name': 'content.role',
    'value': 'role',
    'route': '/admin/roles'
  }
]

const indexName = ref<TOption>(indexNames[0])

const url = computed(() => {
  return `https://569b078b13854844bd8bd2af60d20e6c.us-central1.gcp.cloud.es.io/${indexName.value.value}/_search`
})

const data = ref<IHit<any>[]>([])

const debouncedFn = useDebounceFn(async () => {
  await fetch()
}, 500, {maxWait:4000})
watch(() => search.value, () => {
  debouncedFn()
})

const fetch = async () => {
  data.value = []
  const username = import.meta.env.VITE_ELASTICSEARCH_USERNAME;
  const password = import.meta.env.VITE_ELASTICSEARCH_PASSWORD;

  try {

    const response = await axios.post(url.value, {
      "query": {
        "query_string": {
          "query": `*${search.value}*`,
          "default_field": "*"
        }
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
      auth: {
        username,
        password
      }
    },);
    data.value = response.data.hits.hits
  } catch (error) {
    console.error('Error:', error);
  }
};

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