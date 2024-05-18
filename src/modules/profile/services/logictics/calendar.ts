import { get } from "@/core/services/helpers/fetcher.helper";
import type { TSchedule } from "@/modules/admin-schedule/models/type";
import { format } from "date-fns";
import { ref, watch } from "vue";

export const date = ref(new Date());
export const state = ref<TSchedule>({} as TSchedule)
export const email = ref('')
export const fetch = async () => {

    const options = {date: format(date.value,"yyyy-MM-dd"),email:email.value}
    await get<TSchedule>('/api/schedules/date',options).then(response => {
        if (response?.data) {
            state.value = response.data
        }
    })
}

watch(date,async()=>{
    await fetch()
},{deep:true})