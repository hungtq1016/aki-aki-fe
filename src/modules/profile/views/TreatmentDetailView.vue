<template>
  <div class="flex h-full flex-col">
    <div class="isolate flex flex-auto overflow-hidden bg-white gap-x-2">
      <div class="flex flex-auto flex-col overflow-auto basis-4/5">
        <CalendarDate :date="date" :data="state"/>
      </div>
      <VueDatePicker  
        inline auto-apply :format-locale="vi" month-picker
        class="basis-1/5 pl-2 bg-white dark:border-[1px] dark:border-gray-900 dark:bg-gray-800 rounded-lg shadow-lg"
        v-model="date" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CalendarDate from '../components/Calendar.date.vue';
import { vi } from 'date-fns/locale';
import { fetch, state } from '../services/logictics/treatment.detail';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { format } from 'date-fns';
import type { DateMonth } from '../models/type';

const route = useRoute();
const date = ref<DateMonth>({ month: Number(format(new Date(),"M")), year: Number(format(new Date(),"yyyy")) });

onMounted(async () => {
  await fetch(Number(date.value.month), String(route.params.id));
});

watch(date, async(newValue)=>{
  await fetch(newValue.month, String(route.params.id));
},{deep:true})
</script>
