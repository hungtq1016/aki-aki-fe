<template>
  <section class="pb-10">
    <div class="max-w-screen-xl m-auto">
      <div class="py-5 md:py-10 md:px-5">
        <h1
          :class="`text-5xl text-cerulean-400 leading-[55px] md:leading-[72px] capitalize relative text-center`"
        >
          Bảo Hiểm Sức Khỏe
        </h1>
        <HeartIcon class="w-5 h-5 block mx-auto mt-3 text-cerulean-300" />

        <p class="text-gray-600 text-justify mt-10 max-w-xl m-auto">
          Phòng khám AKIAKI là đơn vị cung cấp đầy đủ nhất các dịch vụ dành cho bạn trên
          thị trường hiện nay. AKIAKI đa dạng các loại hình dịch vụ từ khám chữa bệnh, chăm sóc làm
          đẹp cho bạn, bảo hiểm, lưu trú, mỹ phẩm...
        </p>
      </div>
      <InsuranceGrid />
    </div>
  </section>
</template>

<script setup lang="ts">
import { HeartIcon } from '@heroicons/vue/24/solid'
import InsuranceGrid from '../components/Insurance.grid.vue'
</script>
