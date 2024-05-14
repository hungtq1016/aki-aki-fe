<template>
  <section class="pb-10">
    <div class="relative w-full overflow-hidden bg-white">
      <div class="relative w-[830px] max-w-full pb-11.5 px-4 block mx-auto">
        <!-- <img class="w-full" src="assets/pets.a13ce774.jpg" alt="bạn Pet Pro"> -->
        <div class="text-center pb-6">
          <h2 class="text-5xl text-cerulean-400 leading-[55px] md:leading-[72px] capitalize">
            Đặt lịch hẹn
          </h2>
          <HeartIcon class="w-5 h-5 block mx-auto mt-3 text-cerulean-300" />
        </div>
        <form
          id="myForm"
          action="https://akiaki.com.vn/dat-lich-hen/xac-nhan"
          method="post"
          enctype="multipart/form-data"
        >
          <input type="hidden" name="_token" value="RnHXVXpMkB58vhMBa0yxDPbzjSH7HkGtuYkBdk2j" />
          <div id="toFrom" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <select
              required
              id="department"
              v-model="schedule.serviceId"
              class="w-full h-11 outline-none border-[1.5px] border-solid pl-2 pr-3 py-2.5 border-gray-130 rounded placeholder:text-gray-600 bg-white"
            >
              <option value="-1">Chọn chuyên khoa</option>
              <option v-for="data in specialists" :key="data.id"
              :value="data.id">{{ data.title }}</option>
            </select>
            <select
              required
              id="location"
              v-model="schedule.branchId"
              class="w-full h-11 outline-none border-[1.5px] border-solid pl-2 pr-3 py-2.5 border-gray-130 rounded placeholder:text-gray-600 bg-white"
            >
              <option value="-1" >Chọn nơi khám</option>
              <option v-for="data in branches" :key="data.id"
              :value="data.id">{{ data.address1 }} {{ data.address2 }}</option>
            </select>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-[16px] pb-[17px]">
            <input
              class="w-full outline-none h-11 border-[1.5px] px-3 py-2.5 border-gray-130 rounded placeholder:text-gray-600"
              placeholder="Tên"
              type="text"
              id="name"
              name="name"
              pattern="[A-z\s_áàảãạâấầẩẫậăắằẳẵặđéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶĐÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ]{2,30}"
            />
            <input
              class="w-full outline-none h-11 border-[1.5px] px-3 py-2.5 border-gray-130 rounded placeholder:text-gray-600"
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              pattern="[A-Za-z0-9._%+-]+@[a-z]+\.[a-z]{3}"
            />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-[16px] pb-[17px]">
            <input
              class="w-full outline-none h-11 border-[1.5px] px-3 py-2.5 border-gray-130 rounded placeholder:text-gray-600"
              placeholder="Số Điện Thoại"
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{9,13}"
            />
            <input
              class="w-full outline-none h-11 border-[1.5px] px-3 py-2.5 border-gray-130 rounded placeholder:text-gray-600 required:invalid:text-black-haze-5020"
              type="date"
              id="date"
              name="date"
            />
          </div>
          <div class="grid grid-cols-1 pb-[17px]">
            
          </div>
          <div class="grid grid-cols-1 pb-[17px]">
            <textarea
              class="w-full outline-none h-[100px] px-3 py-2.5 border-[1.5px] border-gray-130 rounded placeholder:text-gray-600"
              placeholder="Nhập nội dung"
              id="text"
              name="text"
            ></textarea>
          </div>
          <div class="flex justify-end w-full pt-2">
            <button
              class="w-full sm:w-[240px] outline-none h-11.5 text-center border-cerulean-600 uppercase border-[2px] text-cerulean-600 rounded-full text-lg bg-transparent"
              id="btnSend"
              type="button"
              onclick="showThongBao()"
            >
              GỬI YÊU CẦU
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { HeartIcon } from '@heroicons/vue/24/solid'
import { onMounted, ref, type Ref } from 'vue';
import type { TPaginationResponse } from '@/core/models/type';
import { get } from '@/core/services/helpers/fetcher.helper';
import type { TService } from '@/modules/admin-service/models/type';
import type { TBranch } from '@/modules/admin-branch/models/type';

const specialists = ref<TService[]>([])
const branches = ref<TBranch[]>([])

const schedule: Ref<any> = ref({
  serviceId:'-1',
  branchId: '-1'
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
