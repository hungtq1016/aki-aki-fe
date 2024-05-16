<template>
  <div class="flex h-full flex-col">
    <div class="isolate flex flex-auto overflow-hidden bg-white">
      <div class="flex flex-auto flex-col overflow-auto basis-2/3">
        {{ date }}

        <CalendarTime />
      </div>
      <!-- <CalendarMonth /> -->
      <VueDatePicker  inline multi-calendars auto-apply :format-locale="vi" format="E"
      class="basis-1/3 bg-white dark:border-[1px] dark:border-gray-900 dark:bg-gray-800 rounded-lg shadow-lg"
      v-model="date" />
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CalendarMonth from '../components/Calendar.month.vue'
import CalendarTime from '../components/Calendar.time.vue'

const date = ref(new Date());

import { vi } from 'date-fns/locale';

</script>
