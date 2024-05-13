<template>
  <div class="grid grid-cols-5 gap-8">
    <div class="col-span-5 xl:col-span-3">
      <div
        class="dark:border-zinc-950 dark:bg-zinc-950/90 rounded-sm border border-gray-100 bg-white shadow"
      >
        <div class="px-6.5 py-4 border-b border-gray-100 dark:border-zinc-950 dark:!bg-zinc-950">
          <h3 class="text-black-1000 font-medium dark:text-white">
            {{ $t('content.your_profile') }}
          </h3>
        </div>
        <div class="p-7">
          <ProfileInformation />
        </div>
      </div>
    </div>
    <div class="col-span-5 xl:col-span-2">
      <div
        class="dark:border-zinc-950 dark:bg-zinc-950/90 rounded-sm border border-gray-100 bg-white shadow"
      >
        <div class="px-6.5 py-4 border-b border-gray-100 dark:border-zinc-950 dark:!bg-zinc-950">
          <h3 class="text-black-1000 font-medium dark:text-white">{{ $t('content.image') }}</h3>
        </div>
        <div class="p-7">
          <ProfileImage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserstore } from '@/core/stores/user'
import ProfileImage from '../components/Profile.image.vue'
import ProfileInformation from '../components/Profile.information.vue'
import { useRouter } from 'vue-router'

const { isLogin } = useUserstore()
const router = useRouter()
// if(!isLogin) router.push('/')
</script>

<style scoped></style>
