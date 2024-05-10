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
            <FooterItem v-for="data in address" :key="data.name" :data="data" />
            <FooterContact v-for="data in contacts" :key="data.name" :data="data" />
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
import FooterContact from '../components/Footer.contact.vue'
import FooterItem from '../components/Footer.item.vue'
import FooterSocial from '../components/Footer.social.vue'
import { address, socials, contacts } from '../services/data/footer.data'
</script>
