import { reactive, ref } from 'vue'

import { get, post } from '@/core/services/helpers/request.helper'
import { resetObject } from '@/core/services/utils/util.object'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { StatusEnum } from '@/core/models/enum'

import type { TActivity, TTreatmentDetailRequest, TTreatmentPlant, TTreatmentPlantRequest } from '../../models/type'
import type { Ref } from 'vue'
import type { TUser } from '@/modules/admin-user/models/type'
import type { TPagination, TPaginationResponse } from '@/core/models/type'
import { paginationOptions } from '../data/treatment'
import { useDebounceFn } from '@vueuse/core'
import { v4 } from 'uuid'
import { format } from 'date-fns'

const init_state: TTreatmentPlantRequest = {
  title: '',
  description: '',
  patientId: '',
  status: StatusEnum.Active
}

export const state = reactive<TTreatmentPlantRequest>({ ...init_state })

export const activities: Ref<TActivity[]> = ref([])
export const patients: Ref<TUser[]> = ref([])
export const searchPatient: Ref<string> = ref('')
export const pagination: Ref<TPagination> = ref({} as TPagination)
export const activity = ref('')
export const details = ref<TActivity[]>([])
export const selectedDetails = ref<TTreatmentDetailRequest[]>([])

export const addToDetails = () => {
  selectedDetails.value.push({
    activityId: activity.value,
    treatmentId: v4(),
    date: new Date(),
    status: StatusEnum.Pending
  })
  const detail = activities.value.find(e => e.id == activity.value)
  if(detail !== undefined) details.value.push(detail)
  activity.value = ''
}

export const activityTitle = (id:string) => {
  return activities.value.find(act => act.id == id)?.title
}

export const removeFromDetail = (index: number) => {
  if (index >= 0 && index < selectedDetails.value.length) {
    selectedDetails.value.splice(index, 1);
  }
}

export const fetchPatients = async (value?: string) => {
  searchPatient.value = value || ''
  const options = { ...paginationOptions.value, value: searchPatient.value }

  await get<TPaginationResponse<TUser>>(`/api/users/role/customer/search`, options).then((response) => {
      if (response?.data) {
          const { data, ...page } = response.data
          patients.value = data
          pagination.value = page
      }
  })
}

export const fetchActivities = async () => {
 
  await get<TActivity[]>(`/api/activities`).then((response) => {
      if (response?.data) {
        activities.value = response.data
      }
  })
}

export const debouncedPatient = useDebounceFn(async () => {
  await fetchPatients()
}, 600, { maxWait: 5000 })

export const submit = async () => {
  const treatmentId = v4();
  state.id = treatmentId;
  
  const data = await post<TTreatmentPlantRequest, TTreatmentPlant>('/api/treatmentplants', state);
  if (data?.data) {
    const response = selectedDetails.value.map(i => {
      const res = activities.value.find(act => act.id == i.activityId);
      return `<li style="display: flex; justify-content: space-between;"><span>${res?.title}</span><span>${format(new Date(i.date),"dd-MM-yyyy")}</span></li>`
    })

    let template = ""
    response.forEach(re => template += re)
    post('/api/email/treatment',{email:patients.value.find(pat => pat.id == state.patientId)?.email,template})
    successNotification(data.message);
    resetObject(state, init_state);
  }
  
  selectedDetails.value.forEach(detail => {
    detail.treatmentId = treatmentId;
  });

  await Promise.all(
    selectedDetails.value.map(detail => post('/api/treatmentdetails', detail))
  );

  selectedDetails.value = [];
  details.value = [];
};