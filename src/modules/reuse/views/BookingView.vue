<template>
  <section class="pb-10">
    <div class="relative w-full overflow-hidden bg-white">
      <div class="relative w-[830px] max-w-full pb-11.5 px-4 block mx-auto">
        <div class="text-center pb-6">
          <h2 class="text-5xl text-cerulean-400 leading-[55px] md:leading-[72px] capitalize">
            Đặt lịch hẹn
          </h2>
          <HeartIcon class="w-5 h-5 block mx-auto mt-3 text-cerulean-300" />
        </div>
        {{ state }}
        <form @submit.prevent="submit">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <select required
              id="service"
              v-model="state.serviceId"
              class="w-full h-11 outline-none border-[1.5px] border-solid pl-2 pr-3 py-2.5 border-gray-200 rounded placeholder:text-gray-300 bg-white"
            >
              <option v-for="data in specialists" :key="data.id"
              :value="data.id">{{ data.title }}</option>
            </select>
            <select required
              id="branch"
              v-model="state.branchId"
              class="w-full h-11 outline-none border-[1.5px] border-solid pl-2 pr-3 py-2.5 border-gray-200 rounded placeholder:text-gray-300 bg-white"
            >
              <option v-for="data in branches" :key="data.id"
              :value="data.id">{{ data.address1 }} {{ data.address2 }}</option>
            </select>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-[16px] pb-4">
            <input required
              class="w-full outline-none h-11 border-[1.5px] px-3 py-2.5 border-gray-200 rounded placeholder:text-gray-300"
              :placeholder="$t('form.place_holder.fullname')"
              type="text"
              id="name"
              v-model="state.fullName"
            />
            <input required
              class="w-full outline-none h-11 border-[1.5px] px-3 py-2.5 border-gray-200 rounded placeholder:text-gray-300"
              :placeholder="$t('form.place_holder.email')"
              type="email"
              id="email"
              v-model="state.email"
            />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-[16px] pb-4">
            <input required
              class="w-full outline-none h-11 border-[1.5px] px-3 py-2.5 border-gray-200 rounded placeholder:text-gray-300"
              :placeholder="$t('form.place_holder.phone_number')"
              type="tel"
              id="phone"
              @keyup="formatToPhone" @keydown="enforceFormat"
              v-model="state.phoneNumber"
            />
            <input required :min="new Date().toISOString().slice(0, 16)"
              class="w-full outline-none h-11 border-[1.5px] px-3 py-2.5 border-gray-200 rounded  required:invalid:text-black-haze-900"
              type="datetime-local"
              id="date"
              v-model="dateTime"
            />
          </div>
          <div class="grid grid-cols-1 pb-4">
            
          </div>
          <div class="grid grid-cols-1 pb-4">
            <textarea required
              class="w-full outline-none h-25 px-3 py-2.5 border-[1.5px] border-gray-200 rounded placeholder:text-gray-300"
              :placeholder="$t('form.place_holder.desc')"
              id="text"
              v-model="state.desc"
            ></textarea>
          </div>
          <div class="flex justify-end w-full pt-2">
            <button
              class="w-full sm:w-60 outline-none h-11.5 text-center border-cerulean-600 uppercase border-2 text-cerulean-600 rounded-md text-lg bg-transparent"
              type="submit"
            >
              {{ $t('button.send_request')}}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { HeartIcon } from '@heroicons/vue/24/solid'
import { onMounted, ref, watch, type Ref } from 'vue';
import type { TPaginationResponse } from '@/core/models/type';
import { get, post } from '@/core/services/helpers/fetcher.helper';
import type { TService } from '@/modules/admin-service/models/type';
import type { TBranch } from '@/modules/admin-branch/models/type';
import type { TScheduleRequest } from '@/modules/admin-schedule/models/type';
import { enforceFormat, formatToPhone } from '@/core/services/utils/util.number';
import { datetimeToTimeJSON } from '@/core/services/utils/util.datetime';
import Swal from 'sweetalert2'

const specialists = ref<TService[]>([])
const branches = ref<TBranch[]>([])
const dateTime = ref(new Date())
const init_state: TScheduleRequest = {
  email: '',
  date: new Date(),
  desc:'',
  fullName: '',
  phoneNumber: '',
  time: '',
  serviceId:'-1',
  branchId: '-1'
}

const state: Ref<TScheduleRequest> = ref({...init_state})
const submit = async () => {
  post('/api/schedules', state.value).then(() => {
    Swal.fire({
      title: 'Thành công!',
      text: 'Kiểm tra email của bạn',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  })
}

watch(dateTime,(newValue)=>{
  state.value.time = JSON.stringify(datetimeToTimeJSON(newValue))
  state.value.date = newValue
})

onMounted(async () => {
  get<TPaginationResponse<TService>>('/api/services/group/chuyen-khoa?pageNumber=1&pageSize=100&enable=1').then(response => {
    if (response?.data) {
        specialists.value = response.data.data
    }
  })

  get<TBranch[]>('/api/branches').then(response => {
    if (response?.data) {
      branches.value = response.data
    }
  })
})

</script>
