<template>
  <div class="flex flex-col gap-10">
    <div>
      <form @submit.prevent="submit">
        <div class="grid grid-cols-1 gap-9 sm:grid-cols-2">
          <div class="flex flex-col gap-9">
            <div
              class="dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border border-gray-200 bg-white shadow"
            >
              <div class="border-big-gray-200 px-6.5 dark:border-zinc-900 border-b py-4">
                <h3 class="text-black-1000 font-medium dark:text-white">
                  {{ $t('form.medicine') }}
                </h3>
              </div>
              <div class="gap-5.5 p-6.5 flex flex-col-reverse">
                <div>
                  <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white">
                    {{ $t('form.quantity') }}
                  </label>
                  <input
                    v-model="state.quantity"
                    type="number"
                    :placeholder="$t('form.place_holder.quantity')"
                    class="text-black-1000 dark:border-zinc-900 dark:bg-zinc-950 w-full rounded-lg border-[1.5px] border-gray-200 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:bg-gray-200 dark:text-white"
                  />
                </div>
                <div>
                  <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white">
                    {{ $t('form.select_medicine') }}
                  </label>
                  <div class="dark:bg-zinc-950 relative z-20 bg-white">
                    <span class="absolute left-4 top-1/2 z-30 -translate-y-1/2">
                      <RectangleGroupIcon class="h-5 w-5" />
                    </span>
                    <select
                      v-model="state.medicineId"
                      class="border-big-gray-200 dark:border-zinc-900 dark:bg-zinc-950 relative z-20 w-full appearance-none rounded border bg-transparent px-12 py-3 outline-none transition"
                    >
                      <option :value="null">{{ $t('form.select_medicine') }}</option>
                      <option
                        v-for="item in medicines"
                        :key="item.id"
                        class="text-gray-900 dark:text-gray-100"
                        :value="item.id"
                      >
                        {{ item.title }}
                      </option>
                    </select>
                    <span class="absolute right-4 top-1/2 z-10 -translate-y-1/2">
                      <ChevronDownIcon class="h-6 w-6" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-9">
            <div
              class="dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border border-gray-200 bg-white shadow"
            >
              <div class="px-6.5 dark:border-zinc-900 border-b border-gray-200 py-4">
                <h3 class="text-black-1000 font-medium dark:text-white">
                  {{ $t('form.content') }}
                </h3>
              </div>
              <div class="gap-5.5 p-6.5 flex flex-col">
                <div>
                  <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white">
                    {{ $t('form.usage') }}
                  </label>
                  <textarea
                    rows="6"
                    v-model="state.usage"
                    :placeholder="$t('form.place_holder.usage')"
                    class="file:hover:bg-zinc-950 dark:border-zinc-900 dark:bg-zinc-950 dark:file:border-zinc-900 w-full cursor-pointer rounded-lg border-[1.5px] border-gray-200 bg-transparent p-4 font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-200 file:px-5 file:py-3 file:hover:bg-opacity-10 disabled:cursor-default disabled:bg-gray-200 dark:file:bg-white/30 dark:file:text-white"
                  >
                  </textarea>
                </div>
              </div>
            </div>
            <div
              class="dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border border-gray-200 bg-white shadow"
            >
              <div class="border-big-gray-200 px-6.5 dark:border-zinc-900 border-b py-4">
                <h3 class="font-medium text-black dark:text-white">{{ $t('form.confirm') }}</h3>
              </div>
              <div class="gap-5.5 p-6.5 flex flex-col">
                <div class="flex items-center justify-end">
                  <div>
                    <button
                      class="bg-cerulean-600 flex justify-center rounded px-6 py-2 font-medium text-gray-100 hover:bg-opacity-90"
                      type="submit"
                    >
                      {{ $t('button.confirm') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div
      class="rounded-sm border border-zumthor-100 bg-white shadow-default dark:border-oxford-blue-900 dark:bg-zinc-950"
    >
      <div
        class="border-b border-zumthor-100 px-4 py-4 dark:border-oxford-blue-900 sm:px-6 xl:px-7.5"
      >
        <h3 class="font-medium text-black-1000 dark:text-white">
          {{ $t('content.prescription') }}
        </h3>
      </div>
      <div class="p-4 sm:p-6 xl:p-9">
        <div class="mb-10 flex flex-wrap items-center justify-end gap-3.5">
          <button
            class="inline-flex items-center gap-2.5 rounded bg-green-600 px-4 py-[7px] font-medium text-white hover:bg-opacity-90"
          >
            <PrinterIcon class="w-5 h-5" />
            <span>{{ $t('button.print') }}</span>
          </button>
          <button
            class="inline-flex items-center gap-2.5 rounded bg-cerulean-600 px-4 py-[7px] font-medium text-white hover:bg-opacity-90"
          >
            <DocumentIcon class="w-5 h-5" />
            <span>{{ $t('button.save_as', { title: 'PDF' }) }}</span>
          </button>
        </div>
        <div class="border border-zumthor-100 dark:border-oxford-blue-900">
          <div class="max-w-full overflow-x-auto overflow-hidden">
            <div class="min-w-[670px] w-full">
              <div
                class="grid grid-cols-12 border-b border-zumthor-100 py-3.5 pl-5 pr-6 dark:border-oxford-blue-900"
              >
                <div class="col-span-3">
                  <h5 class="font-medium text-black-1000 dark:text-white">
                    {{ $t('table.title') }}
                  </h5>
                </div>
                <div class="col-span-4">
                  <h5 class="font-medium text-black-1000 dark:text-white">
                    {{ $t('table.brand') }}
                  </h5>
                </div>
                <div class="col-span-2">
                  <h5 class="font-medium text-black-1000 dark:text-white">
                    {{ $t('table.quantity') }}
                  </h5>
                </div>
                <div class="col-span-2">
                  <h5 class="font-medium text-black-1000 dark:text-white">
                    {{ $t('table.usage') }}
                  </h5>
                </div>
                <div class="col-span-1 text-right">
                  <h5 class="font-medium text-black-1000 dark:text-white">
                    {{ $t('table.action') }}
                  </h5>
                </div>
              </div>
              <PrescriptionItem v-for="data in prescriptions" :key="data.id" :data="data" />
            </div>
          </div>
          <div class="flex justify-end p-6">
            <div class="w-full max-w-65">
              <button
                class="float-right inline-flex items-center gap-2.5 rounded bg-cerulean-600 px-7.5 py-2.5 font-medium text-white hover:bg-opacity-90"
              >
                <span>{{ $t('button.download') }}</span>
                <ArrowDownTrayIcon class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowDownTrayIcon,
  ChevronDownIcon,
  DocumentIcon,
  PrinterIcon,
  RectangleGroupIcon
} from '@heroicons/vue/24/outline'
import { onMounted, ref } from 'vue'
import { v4 as Guid } from 'uuid'
import PrescriptionItem from '../components/Prescription.item.vue'
import type { TMedicine, TPresciption } from '../models/type'
import { get } from '@/core/services/helpers/request.helper'

const init_state = {
  id: Guid(),
  usage: '',
  medicineId: '',
  quantity: 1
}

const state = ref<TPresciption>(init_state)

const medicines = ref<TMedicine[]>()

onMounted(async () => {
  const data = await get<TMedicine[]>('/api/medicines')
  medicines.value = data?.data || []
})

const submit = () => {
  state.value.medicine = medicines.value?.find((item) => item.id === state.value.medicineId)
  prescriptions.value.push(state.value)
  state.value = init_state
}

const prescriptions = ref<TPresciption[]>([])
</script>
