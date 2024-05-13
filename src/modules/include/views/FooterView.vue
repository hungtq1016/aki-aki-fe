<template>
  <footer class="bg-cerulean-500">
    <div class="container relative mx-auto">
      <div class="py-10 md:py-20 md:px-5">
        <h1
          class="text-2xl leading-[45px] uppercase text-center font-semibold mb-10 text-white relative after:contents-[''] after:h-pxafter:w-32 after:absolute after:left-1/2 after:-bottom-3 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-white"
        >
          THÔNG TIN LIÊN HỆ
        </h1>
        <div class="mb-10">
          <ul class="grid grid-cols-2 gap-x-10 gap-y-5">
            <FooterItem v-for="data in branches" :key="data.id" :data="data" />
            <FooterContact v-for="data in contacts" :key="data.id" :data="data" />
          </ul>
        </div>
        <div class="flex gap-x-1 items-center">
          <FooterSocial v-for="data in socials" :key="data.type" :data="data" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import FooterContact from '../components/Footer.contact.vue'
import FooterItem from '../components/Footer.item.vue'
import FooterSocial from '../components/Footer.social.vue'
import {
  address,
  socials as dataSocials,
  contacts as dataContact
} from '../services/data/footer.data'
import type { TBranch, TGroupUrlReponse, TUrl } from '@/modules/admin-branch/models/type'
import { get } from '@/core/services/helpers/fetcher.helper'

const branches = ref<TBranch[]>(address.value)
const contacts = ref<TUrl[]>(dataContact.value)
const socials = ref<TUrl[]>(dataSocials.value)

onMounted(() => {
  get<TBranch[]>('/api/branches').then((res) => {
    if (res?.data) {
      branches.value = res.data
    }
  })
  get<TGroupUrlReponse>('/api/groupurls/label/contact').then((res) => {
    if (res?.data) {
      contacts.value = res.data.urls
    }
  })
  get<TGroupUrlReponse>('/api/groupurls/label/social').then((res) => {
    if (res?.data) {
      socials.value = res.data.urls
    }
  })
})
</script>
