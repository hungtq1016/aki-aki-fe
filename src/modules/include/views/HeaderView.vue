<template>
    <header
        :class="`fixed top-0 left-0 z-50 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-full bg-black/20 border-b border-b-white/30 duration-500
        ${isScrollDown? '-translate-y-full':''}
        ${isZero ? 'bg-white/80' : 'bg-white'}`">
        <div :class="`max-w-screen-xl m-auto duration-300 
        ${isZero ? 'h-auto' :'h-0 invisible'}`">
            <div class="pt-5">
                <ul class="flex gap-x-10 flex-row-reverse">
                    <HeaderContact v-for="data in contacts" :key="data.name" :data="data" />
                </ul>
            </div>
        </div>
        <div class="max-w-screen-xl m-auto flex justify-between w-full h-full px-4">
            <div class="relative flex items-center lg:justify-between justify-end w-full h-full min-h-[64px]">
                <a id="btnMenuMobile"
                    class="md:hidden cus-hidden absolute cursor-pointer top-1/2 transform -translate-y-[50%] left-0">
                    <Bars3Icon class="w-8 h-8" />
                </a>
                <router-link to="/"
                    class="absolute lg:relative lg:transform-none lg:left-0 top-1/2 transform -translate-y-[50%] logo left-1/2 -translate-x-1/2">
                    <img src="/logo.png" alt="Logo AKIAKI" class="max-w-56 h-20">
                </router-link>
                <ul id="menuTop"
                    class="fontsize-cus hidden lg:top-0 absolute z-20 left-0 top-16 h-[100vh] max-h-[100vh] w-[calc(100%+32px)] -ml-4 lg:relative lg:w-full lg:-ml-0 lg:flex lg:max-h-full items-center lg:justify-around flex-1 lg:h-full lg:px-10 menu  lg:pt-0">
                    <li class="w-full h-3 bg-gradient-to-b from-gray-270 to-white md:hidden"></li>
                    <HeaderNavigation v-for="navigation in navigations" :key="navigation.title" :data="navigation" :is-zero="isZero"/>
                    <li>
                        <button :class="`border-none bg-transparent 
                        ${isZero ? 'text-gray-50 hover:text-gray-100 focus:text-gray-100':'text-gray-600 hover:text-gray-700 focus:text-gray-700'}`">
                            <MagnifyingGlassIcon class="w-6 h-6 " />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import HeaderContact from '../components/Header.contact.vue';
import { contacts, navigations } from '../services/data/header.data'
import HeaderNavigation from '../components/Header.navigation.vue';
import { onMounted, ref } from 'vue';

const isScrollDown = ref<boolean>(false)
const isZero = ref<boolean>(true)

onMounted(() => {
    var prev = window.pageYOffset;
    window.addEventListener("scroll", () => {
        var curr = window.pageYOffset;
        if (prev < curr) {
            isScrollDown.value = true
        }else{
            isScrollDown.value = false
        }
        if (curr === 0) {
            isZero.value = true
        }else{
            isZero.value = false
        }
        prev = curr;
    });
});
</script>