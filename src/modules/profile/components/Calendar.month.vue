<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="w-96 bg-white dark:border-[1px] dark:border-gray-900 dark:bg-gray-800 rounded-lg shadow-lg"
  >
    <div class="flex justify-center space-x-2 py-3 items-center rounded-lg">
      <button
        type="button"
        class="-my-1.5 flex flex-none items-center justify-center p-1.5"
        @click="toPreviousMonth"
      >
        <span class="sr-only">Previous month</span>
        <!-- Heroicon name: solid/chevron-left -->
        <svg
          class="h-5 w-5 icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <h2 class="font-normal text-gray-800 text-sm dark:text-white font-inter">
        {{ format(currentDate, 'MMMM yyyy') }}
      </h2>
      <button
        type="button"
        class="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        @click="toNextMonth"
      >
        <!-- Heroicon name: solid/chevron-right -->
        <svg
          class="h-5 w-5 icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div class="mt-2 grid grid-cols-7 text-center text-sm">
      <div class="text-gray-500 font-inter dark:text-white">Mo</div>
      <div class="text-gray-500 font-inter dark:text-white">Tu</div>
      <div class="text-gray-500 font-inter dark:text-white">We</div>
      <div class="text-gray-500 font-inter dark:text-white">Th</div>
      <div class="text-gray-500 font-inter dark:text-white">Fr</div>
      <div class="text-gray-500 font-inter dark:text-white">Sa</div>
      <div class="text-gray-500 font-inter dark:text-white">Su</div>
    </div>
    <div class="mt-2 grid grid-cols-7 text-sm font-inter">
      <button
        v-for="(day, index) in days"
        :key="`day-${index}`"
        type="button"
        @click="selectDay(day)"
        class="mx-auto flex h-8 w-8 items-center justify-center rounded-lg font-light text-gray-400"
        :class="{ 'bg-cerulean-600 justify-center rounded-lg': day.isCurrent }"
      >
        <time
          :class="{
            'font-bold': day.isCurrent,
            'text-gray-50': day.isCurrent,
            'text-gray-800 dark:text-white font-medium': day.isCurrentMonth
          }"
        >
          {{ format(day.date, 'd') }}
        </time>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  subDays,
  addDays,
  eachDayOfInterval,
  format,
  startOfMonth,
  compareAsc,
  startOfDay,
  addMonths,
  subMonths,
  getDay
} from 'date-fns'
import { computed, ref, watch } from 'vue'

const currentDate = ref<Date>(startOfDay(new Date()))
const selectedDay = ref<Date>(new Date())

const days = computed(() => {
  const monthStart = startOfMonth(currentDate.value)
  const dayNumInWeek = getDay(monthStart)

  const calendarStart = subDays(monthStart, dayNumInWeek !== 0 ? dayNumInWeek - 1 : 6)

  return eachDayOfInterval({
    start: calendarStart,
    end: addDays(calendarStart, 41)
  }).map((date) => {
    return {
      isCurrent: compareAsc(currentDate.value, date) === 0,
      isCurrentMonth: date.getMonth() === currentDate.value.getMonth(),
      date: date
    }
  })
})

function toNextMonth() {
  currentDate.value = addMonths(startOfMonth(currentDate.value), 1)
}

function toPreviousMonth() {
  currentDate.value = subMonths(startOfMonth(currentDate.value), 1)
}

function selectDay(day: { date: Date }) {
  console.log(day.date)
  selectedDay.value = day.date
  currentDate.value = day.date
}
</script>
