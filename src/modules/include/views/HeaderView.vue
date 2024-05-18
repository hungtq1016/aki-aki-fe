<template>
  <header
    :class="`fixed top-0 left-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-full bg-black/20 border-b border-b-white/30 duration-500
        ${isScrollDown ? '-translate-y-full' : ''}
        ${isZero ? 'bg-white/80' : 'bg-white'}`"
  >
    <HeaderAdmin />
    <div
      :class="`max-w-screen-xl m-auto duration-300 
        ${isZero ? 'h-auto' : 'h-0 invisible'}`"
    >
      <div class="pt-5">
        <ul class="flex gap-x-2 flex-row-reverse">
          <HeaderLogin/>
          <HeaderLocale/>
          <HeaderContact v-for="data in contacts" :key="data.label" :data="data" />
        </ul>
      </div>
    </div>
    <div class="max-w-screen-xl m-auto flex justify-between w-full h-full px-4 py-2">
      <div class="relative flex items-center lg:justify-between justify-end w-full h-full min-h-16">
        <a class="md:hidden absolute cursor-pointer top-1/2 transform -translate-y-1/2 left-0">
          <Bars3Icon class="w-8 h-8" />
        </a>
        <router-link
          to="/"
          class="absolute lg:relative lg:transform-none lg:left-0 top-1/2 transform -translate-y-1/2 logo left-1/2 -translate-x-1/2"
        >
          <img src="/logo.png" alt="Logo AKIAKI" class="max-w-56 h-20" />
        </router-link>
        <ul
          class="hidden lg:top-0 absolute z-20 left-0 top-16 h-screen max-h-screen w-[calc(100%+32px)] lg:relative lg:w-full lg:-ml-0 lg:flex lg:max-h-full items-center lg:justify-around flex-1 lg:h-full lg:px-10 lg:pt-0"
        >
          <li class="w-full h-3 bg-gradient-to-b from-alabaster-500 to-white md:hidden"></li>
          <HeaderNavigation
            v-for="navigation in navigations"
            :key="navigation.title"
            :data="navigation"
            :is-zero="isZero"
          />
          <li class="flex items-center justify-center">
            <button
              @click="isSearchOpen = !isSearchOpen"
              :class="`border-none bg-transparent 
                        ${isZero ? 'text-gray-500 focus:text-gray-600 hover:text-gray-600' : 'text-gray-600 focus:text-gray-700 hover:text-gray-700'}`"
            >
              <MagnifyingGlassIcon v-if="!isSearchOpen" class="w-6 h-6" />
              <XMarkIcon v-else class="w-6 h-6" />
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="bg-white py-4" v-if="isSearchOpen">
      <div class="max-w-screen-xl m-auto">
        <div class="border rounded border-cerulean-600 px-3">
          <form @submit.prevent="submit" class="flex gap-x-2">
            <input
              type="text"
              v-model="search"
              :placeholder="$t('content.search')"
              class="w-full outline-none px-2 py-1 rounded bg-transparent"
            />
            <button type="submit">
              <MagnifyingGlassIcon class="w-5 h-5 text-cerulean-600" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </header>
  <ScrollToTop v-if="!isZero" />
  <ChatBubbleView />
</template>

<script setup lang="ts">
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import HeaderContact from '../components/Header.contact.vue'
import { contacts, navigations } from '../services/data/header.data'
import HeaderNavigation from '../components/Header.navigation.vue'
import HeaderAdmin from '../components/Header.admin.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import ScrollToTop from '@/core/components/buttons/ScrollToTop.vue'
import ChatBubbleView from './ChatBubbleView.vue'
import HeaderLogin from '../components/Header.login.vue'
import HeaderLocale from '../components/Header.locale.vue'

const isScrollDown = ref<boolean>(false)
const isZero = ref<boolean>(true)
const router = useRouter()

const search = ref<string>('')
const isSearchOpen = ref<boolean>(false)
onMounted(() => {
  var prev = window.pageYOffset
  window.addEventListener('scroll', () => {
    var curr = window.pageYOffset
    if (prev < curr) {
      isScrollDown.value = true
    } else {
      isScrollDown.value = false
    }
    if (curr === 0) {
      isZero.value = true
    } else {
      isZero.value = false
    }
    prev = curr
  })
})

const submit = () => {
  router.push({
    name: 'search',
    query: {
      q: search.value
    }
  })
}
</script>
