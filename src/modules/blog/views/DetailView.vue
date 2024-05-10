<template>
  <div>
    <div
      class="capitalize bg-cerulean-600 text-[14px] w-fit font-medium text-center rounded-[3px] text-white py-[3px] px-4 mb-[30px]"
    >
      {{ $t(String(data?.type)) }}
    </div>
    <div class="flex items-center my-4 flex-nowrap">
      <span class="relative mr-3">{{ $t('content.share') }}:</span>
      <ul class="flex gap-x-2">
        <li>
          <a
            class="inline-block"
            :href="`https://www.facebook.com/sharer.php?u=${url}`"
            target="_blank"
            onclick="window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=SomeSize, height=SomeSize'); return false;"
          >
            <SVGFacebook class="w-5 h-5 fill-cerulean-400" />
          </a>
        </li>
        <li>
          <a
            class="inline-block"
            :href="`https://twitter.com/share?url=${url}&amp;text=Hi%20everyone,%20please%20check%20this%20out:%20`"
            target="_blank"
            onclick="window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=SomeSize, height=SomeSize'); return false;"
          >
            <SVGTwitterX class="w-5 h-5" />
          </a>
        </li>
        <li>
          <button class="inline-block" style="cursor: pointer" @click="copyToClipboard">
            <ShareIcon class="w-5 h-5 text-gray-600" />
          </button>
        </li>
      </ul>
    </div>
    <h1 class="text-2xl font-bold mb-[28px]">{{ data?.title }}</h1>
    <div v-html="data?.content"></div>
    <DetailContact />
    <RelateView :relate="data?.type" />
  </div>
</template>

<script setup lang="ts">
import SVGFacebook from '@/core/components/svg/SVG.facebook.vue'
import { blogs } from '../services/data/data'
import { useRoute } from 'vue-router'
import { ShareIcon } from '@heroicons/vue/24/outline'
import SVGTwitterX from '@/core/components/svg/SVG.twitter.x.vue'
import DetailContact from '../components/Detail.contact.vue'
import RelateView from './RelateView.vue'
const route = useRoute()
const url = new URL(window.location.href)
const data = blogs.value.find((item) => item.slug === route.params.slug)
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(String(url))
    alert(`Copied: ${String(url)}`)
  } catch ($e) {
    alert('Cannot copy')
  }
}
</script>
