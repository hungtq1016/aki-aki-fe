<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <button 
    @click="printPage"
    class="bg-lime-50 text-lime-600 px-2 py-1 rounded whitespace-nowrap">{{$t('button.print')}}</button>

    <div id="invoice-POS" class="p-2 mx-auto w-full hidden">
        <div id="top" class="text-center pb-1">
            <div class="logo bg-no-repeat bg-contain h-15 w-15 logo-image"></div>
            <div class="info">
                <h2 class="text-lg">AkiAki Clinic</h2>
            </div>
        </div>

        <div id="mid" class="pb-1">
            <div class="info">
                <h2 class="text-xl font-light">Thông tin khách hàng</h2>
                <div class="py-4">
                    Họ và tên : <span class="px-2">{{ item?.patient?.fullName }}</span><br>
                    Email : <span class="px-2">{{ item?.patient?.email }}</span><br>
                    Phone : <span class="px-2">{{ item?.patient?.phoneNumber }}</span><br>
                    Address : <span class="px-2">{{ item?.patient?.address }}</span><br>
                </div>
            </div>
        </div>
        <div id="2" class="pb-1">
            <div class="info">
                <h2 class="text-xl font-light">Thông tin kế hoạch</h2>
                <div class="py-4">
                    Kế hoạch : <span class="px-2">{{ item?.title }}</span><br>
                    Mô tả : <span class="px-2">{{ item?.description }}</span><br>
                </div>
            </div>
        </div>
        <div id="bot">
            <div class="w-full collapse divide-y">
                <div class="bg-gray-200 grid grid-cols-3 divide-x border-b gap-2">
                    <div> STT </div>
                    <div class="pl-2"> Hoạt động </div>
                    <div class="pl-2"> Trạng thái </div>
                </div>
                <div 
                v-for="(data,index) in item.details"
                :key="data.id"
                class="bg-gray-200 grid grid-cols-3 divide-x gap-2">
                    <div> {{ index + 1 }} </div>
                    <div class="pl-2"> {{data?.activity?.title}} </div>
                    <div class="pl-2"> {{StatusEnum[data?.status]}} </div>
                </div>
            </div>
            <div class="mt-10 text-center">Cảm ơn đã sử dụng dịch vụ</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { StatusEnum } from '@/core/models/enum';
import type { Item } from 'vue3-easy-data-table';

defineProps<{
    item: Item,
    route: string
}>()
const printPage = () => {
    window.print();
};
</script>

<style>
.logo-image{
    background-image: url('/public/logo.png')
}
@media print {
  body * {
    visibility: hidden;
  }
  #invoice-POS {
    display: block !important;
    visibility: visible;
    border: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1000;
  }
  #invoice-POS * {
    visibility: visible;
    
  }
}

</style>
