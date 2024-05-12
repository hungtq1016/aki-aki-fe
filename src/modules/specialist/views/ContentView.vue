<template>
  <section>
    <div class="w-full h-[500px]">
      <img class="w-full rounded-[5px] h-min-[500px] object-cover" :src="imageBuilderUrl(service.imageUrl)"
        :alt="service.title">
    </div>
    <h1 class="text-2xl font-bold mb-7 text-cerulean-600 capitalize">{{ service.title }}</h1>
    <div class="py-5">
      <h4 class="text-base leading-6 font-semibold italic text-gray-900 pb-2.5 text-justify">
        {{ service?.desc }}
      </h4>
    </div>
    <div class="py-5" v-html="service.content" />
    <div class="grid grid-cols-2 mt-10 lg:grid-cols-4">
      <div class="flex py-4">
        <CheckCircleIcon class="mr-3 w-8 h-8 text-cerulean-400"/>
        <span>Tổ chức nhân sự</span>
      </div>
      <div class="flex py-4">
        <CheckCircleIcon class="mr-3 w-7 h-7 text-cerulean-400"/>
        <span>Trình độ chuyên môn</span>
      </div>
      <div class="flex py-4">
        <CheckCircleIcon class="mr-3 w-7 h-7 text-cerulean-400"/>
        <span>Hoạt động y khoa</span>
      </div>
      <div class="flex py-4">
        <CheckCircleIcon class="mr-3 w-7 h-7 text-cerulean-400"/>
        <span>Cơ sở vật chất</span>
      </div>
    </div>
    <div class="py-5 flex justify-center" v-html="service.videoEmbed"></div>
  </section>

</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router'
import { get } from '@/core/services/helpers/request.helper';
import type { TService } from '@/modules/admin-service/models/type';
import { imageBuilderUrl } from '@/core/services/utils/util.string';
import { CheckCircleIcon } from '@heroicons/vue/24/solid';
const route = useRoute()
const service: Ref<TService> = ref({} as TService)

onMounted(() => {
  get<TService>('/api/services/slug/' + route.params.slug).then(res => {
    if (res?.data) {
      service.value = res.data
    }
  })
})
</script>
