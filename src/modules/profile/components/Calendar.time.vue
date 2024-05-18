<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex w-full flex-auto">
    <div class="w-14 flex-none bg-white ring-1 ring-gray-100" />
    <div class="grid flex-auto grid-cols-1 grid-rows-1">
      <!-- Horizontal lines -->
      <div class="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
        style="grid-template-rows: repeat(48, minmax(3.5rem, 1fr))">
        <div ref="containerOffset" class="row-end-1 h-7"></div>
        <template v-for="hour in 24" :key="hour">
          <div class="relative row-span-2">
            <div class="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
              {{ hour }}
            </div>
            <div v-if="times.hours === hour"
              class="group absolute inset-1 flex flex-col rounded-lg bg-cerulean-50 p-2 text-xs leading-5 hover:bg-cerulean-100 overflow-y-hidden">
              <div class="flex gap-x-3 flex-auto justify-between">
                <div class="flex gap-x-4  ">
                  <div class="flex flex-col justify-between">
                  <p class="order-1 font-semibold text-cerulean-700">{{ $t('content.schedule') }}</p>
                  <p class="text-cerulean-500 group-hover:text-cerulean-700">
                    <time>{{ formattedTime }}</time>
                  </p>
                </div>
                <div class="flex flex-col justify-between">
                  <p class="order-1 text-cerulean-400">{{ schedule?.branch.address1 + schedule?.branch?.address2 }}</p>
                  <p class="text-cerulean-500 group-hover:text-cerulean-500">
                    {{ schedule?.service.title }}
                  </p>
                </div>
                </div>
                <div class="flex flex-col justify-end">
                  <p class="order-1 text-cerulean-400">{{ schedule?.branch.phone1 }}</p>
                  <p class="text-cerulean-500 group-hover:text-cerulean-500">
                    {{ schedule?.branch?.phone2 }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TScheduleResponse } from '@/modules/admin-schedule/models/type';
import { ref, watch, computed } from 'vue';

const props = defineProps({
  schedule: {
    type: Object,
    required: false
  }
})

type TTime = {
  hours: number,
  minutes: number,
  seconds: number
}
const times = ref({} as TTime)

const getTime = () => {
  const { time } = schedules.value
  times.value = JSON.parse(time || '{}')
}
const schedules = ref<TScheduleResponse>(props.schedule as TScheduleResponse)
getTime()

watch(() => props.schedule, (newValue) => {
  schedules.value = newValue as TScheduleResponse
  getTime()
})

const formattedTime = computed(() => {
  const hours = String(times.value.hours).padStart(2, '0');
  const minutes = String(times.value.minutes % 60).padStart(2, '0');
  const seconds = String(times.value.seconds).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
});

</script>
