<template>
    <section class="py-5" style="background-image: url('/bg.png');">
        <div class="max-w-screen-xl m-auto">
            <div class="py-5 md:py-10 md:px-5">
                <h1
                    :class="`text-5xl text-cerulean-400 leading-[55px] md:leading-[72px] capitalize relative text-center
                    ${isHomePage ? `after:contents-[''] after:h-px after:w-32 after:absolute after:left-1/2 after:-bottom-3 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-cerulean-400` : ''}`">
                    dịch vụ của chúng tôi
                </h1>
                <HeartIcon v-if="!isHomePage" class="w-5 h-5 block mx-auto mt-3 text-cerulean-300" />

                <p class="text-gray-600 text-justify mt-10 max-w-xl m-auto" v-if="isHomePage">Bệnh Viện Thú Y PETPRO là đơn vị cung cấp đầy đủ
                    nhất các dịch vụ dành cho
                    thú cưng trên thị trường hiện nay. PETPRO đa dạng các loại hình dịch vụ từ khám chữa bệnh,
                    chăm sóc làm đẹp cho thú cưng, bảo hiểm, lưu trú, petshop...</p>
            </div>
            <ServiceFlick />
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ServiceFlick from '../components/Service.flick.vue';
import { HeartIcon } from '@heroicons/vue/24/solid';
import { useRoute } from 'vue-router'

const route = useRoute()

const isHomePage = computed(() => route.name == 'home')
</script>
