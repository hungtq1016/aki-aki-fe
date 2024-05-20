<template>
  <div class="flex h-full flex-col">
    <div class="isolate flex flex-auto overflow-hidden bg-white">
      <div class="flex flex-auto flex-col overflow-auto basis-2/3">
        <CalendarTime :schedule="state"/>
      </div>
      <VueDatePicker  
      inline multi-calendars auto-apply :format-locale="vi" format="E"
      class="basis-1/3 bg-white dark:border-[1px] dark:border-gray-900 dark:bg-gray-800 rounded-lg shadow-lg"
      v-model="date" />
    </div>
  </div>
  
</template>

<script setup lang="ts">
import CalendarTime from '../components/Calendar.time.vue'
import { vi } from 'date-fns/locale';
import { date, fetch, email, state } from '../services/logictics/calendar';
import { onMounted } from 'vue';
import { useUserStore } from '@/core/stores/user';

const { user } = useUserStore()

onMounted(async()=>{
  email.value = String(user.email)
  await fetch()
})

</script>
