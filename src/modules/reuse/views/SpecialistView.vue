<template>
  <section class="pb-10">
    <div class="max-w-screen-xl m-auto">
      <div class="py-5 md:py-10 md:px-5">
        <h1
          :class="`text-5xl text-cerulean-400 leading-[55px] md:leading-[72px] capitalize relative text-center
                    ${isHomePage ? `after:contents-[''] after:h-px after:w-32 after:absolute after:left-1/2 after:-bottom-3 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-cerulean-400 ` : ' '}`"
        >
          {{ $t('content.specialist') }}
        </h1>
        <HeartIcon v-if="!isHomePage" class="w-5 h-5 block mx-auto mt-3 text-cerulean-300" />
        <div class="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-9">
          <SpecialistItem v-for="data in specialists" :key="data.id" :data="data" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import SpecialistItem from '../components/Specialist.item.vue'
import { specialists as data } from '../services/data/data'
import { HeartIcon } from '@heroicons/vue/24/solid'
import { useRoute } from 'vue-router'
import { get } from '@/core/services/helpers/fetcher.helper'
import type { TPaginationResponse } from '@/core/models/type'
import type { TService } from '@/modules/admin-service/models/type'

const route = useRoute()

const isHomePage = computed(() => route.name == 'home')

const specialists = ref<TService[]>(data.value)

onMounted(() => {
  get<TPaginationResponse<TService>>('/api/services/page?pageNumber=1&pageSize=6&enable=2').then(
    (res) => {
      if (res?.data) {
        specialists.value = res.data.data
      }
    }
  )
})
</script>
