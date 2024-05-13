<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex w-full flex-auto">
        <div class="w-14 flex-none bg-white ring-1 ring-gray-100" />
        <div class="grid flex-auto grid-cols-1 grid-rows-1">
            <!-- Horizontal lines -->
            <div class="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                style="grid-template-rows: repeat(48, minmax(3.5rem, 1fr))">
                <div ref="containerOffset" class="row-end-1 h-7"></div>
                <template v-for="hour in hours" :key="hour">
                    <div>
                        <div class="sticky left-0 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                            {{ hour }}
                        </div>
                    </div>
                    <div />
                </template>

            </div>

            <!-- Events -->
            <ol class="col-start-1 col-end-2 row-start-1 grid grid-cols-1"
              style="grid-template-rows: 1.75rem repeat(288, minmax(0, 1fr)) auto">
              <li v-for="event in events" :key="event.id" class="relative mt-px flex" :style="event.style">
                <a href="#"
                  class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs leading-5 hover:bg-blue-100">
                  <p class="order-1 font-semibold text-blue-700">Breakfast</p>
                  <p class="text-blue-500 group-hover:text-blue-700">
                    <time datetime="2022-01-22T06:00">6:00 AM</time>
                  </p>
                </a>
              </li>
            </ol>
        </div>
    </div>
</template>

<script setup lang="ts">
const hours = [
    "12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM",
    "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM",
    "8PM", "9PM", "10PM", "11PM"
]

const events = [
    {
        id: 1,
        title: "Breakfast",
        location: "",
        time: "6:00 AM",
        datetime: "2022-01-22T06:00",
        style: "grid-row: 74 / span 12",
        class: "bg-blue-50 hover:bg-blue-100",
        titleClass: "text-blue-700",
        locationClass: "text-blue-500 group-hover:text-blue-700",
        timeClass: "text-blue-500 group-hover:text-blue-700"
    },
    {
        id: 2,
        title: "Flight to Paris",
        location: "John F. Kennedy International Airport",
        time: "7:30 AM",
        datetime: "2022-01-22T07:30",
        style: "grid-row: 92 / span 30",
        class: "bg-pink-50 hover:bg-pink-100",
        titleClass: "text-pink-700",
        locationClass: "text-pink-500 group-hover:text-pink-700",
        timeClass: "text-pink-500 group-hover:text-pink-700"
    },
    {
        id: 3,
        title: "Sightseeing",
        location: "Eiffel Tower",
        time: "11:00 AM",
        datetime: "2022-01-22T11:00",
        style: "grid-row: 134 / span 18",
        class: "bg-cerulean-50 hover:bg-cerulean-100",
        titleClass: "text-cerulean-700",
        locationClass: "text-cerulean-500 group-hover:text-cerulean-700",
        timeClass: "text-cerulean-500 group-hover:text-cerulean-700"
    }
]
</script>

<style scoped></style>