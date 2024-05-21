<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="lg:flex lg:h-full lg:flex-col">
        <div class="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
            <div class="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
                <div class="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
                    <div v-for="day in calendar" 
                    :key="day.date" 
                    :class="day.className"
                    class="p-2 relative">
                        <time :datetime="day.date" :class="day.className">{{ formatDate(new Date(day.date),"dd") }}</time>
                        <div class="absolute"></div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { startOfMonth, startOfWeek, addDays, format, isSameMonth, formatDate } from 'date-fns';
import { ref, watch, type PropType } from 'vue';
import type { DateMonth } from '../models/type';
import type { TTreatmentDetailResponse } from '@/modules/admin-treatment/models/type';
import { status } from '@/core/services/data/status';

const props = defineProps({
    date : {
        type: Object as PropType<DateMonth>,
        required: true
    },
    data : {
        type: Array as PropType<TTreatmentDetailResponse[]>,
        required: true
    }
})

function generateCalendar(year: number, month: number) {
    const firstDayOfMonth = startOfMonth(new Date(year, month - 1));

    const startCalendar = startOfWeek(firstDayOfMonth, { weekStartsOn: 0 });

    const days = [];
    for (let i = 0; i < 42; i++) {
        const day = addDays(startCalendar, i);
        const isCurrentMonth = isSameMonth(day, firstDayOfMonth);
        days.push({
            date: day,
            isCurrentMonth,
        });
    }

    const formattedDays = days.map(day => ({
        date: format(day.date, 'yyyy-MM-dd'),
        className: day.isCurrentMonth ? getDayClass(format(new Date(day.date), 'd')) : 'bg-gray-100 text-gray-500'
    }));

    return formattedDays;
}

const getDayClass = (day: string) => {
    const result = props.data.find(item => format(new Date(item.date), 'd') === day)
    if (result) {
        const e = status.find(e => e.value == result.status) 
        return e?.classes
    }
    return 'bg-white text-gray-950'
};

const calendar = ref(generateCalendar(props.date.year,props.date.month));

watch(props,(newValue)=>{
    calendar.value = generateCalendar(newValue.date.year,newValue.date.month)
},{deep:true})

</script>