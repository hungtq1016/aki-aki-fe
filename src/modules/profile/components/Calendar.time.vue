<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex w-full flex-auto">
    <div class="w-14 flex-none bg-white ring-1 ring-gray-100" />
    <div class="grid flex-auto grid-cols-1 grid-rows-1">
      <!-- Horizontal lines -->
      <div class="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
        style="grid-template-rows: repeat(48, minmax(3.5rem, 1fr))">
        <div ref="containerOffset" class="row-end-1 h-7"></div>
        <template v-for="hour in 25" :key="hour-1">
          <div class="relative row-span-2">
            <div class="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
              {{ hour-1 }}
            </div>
            <div v-if="times.hours === hour-1"
            :class="stat.classes"
              class="group absolute inset-1 flex flex-col rounded-lg p-2 text-xs leading-50 overflow-y-hidden">
              <div class="flex gap-x-3 flex-auto justify-between">
                <div class="flex gap-x-4">
                  <div class="flex flex-col justify-between">
                  <p class="order-1 font-semibold ">{{ $t('content.schedule') }}</p>
                  <p class="">
                    <time>{{ formattedTime }}</time>
                  </p>
                </div>
                <div class="flex flex-col justify-between gap-2">
                  <p class="order-1">{{ schedule?.branch.address1 + schedule?.branch?.address2 }}</p>
                  <p>
                    {{ schedule?.service.title }}
                  </p>
                </div>
                </div>
                <div class="flex justify-between flex-col">
                  <div>
                    {{ $t(stat.label) }}
                  </div>
                  <div class="flex flex-col justify-end gap-2">
                  <p class="order-1 mr-2">{{ schedule?.branch.phone1 }}</p>
                  <p> {{ schedule?.branch?.phone2 }} </p>
                </div>
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
import { status } from '@/core/services/data/status';
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

const stat = computed(()=>{
  const result = status.find(item => item.value == props.schedule?.status) || status[0]
  return result
})


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
