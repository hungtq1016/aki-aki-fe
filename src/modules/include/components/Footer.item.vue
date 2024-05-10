<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <li class="text-white">
    <div class="flex gap-x-2">
      <MapPinIcon class="w-10 h-10" />
      <div>
        <h3
          class="uppercase text-[22px] mb-4 relative after:contents-[''] after:h-px after:w-32 after:left-0 after:absolute after:-bottom-3 after:-translate-y-1/2 after:bg-white"
        >
          {{ data.name }}
        </h3>
        <div class="address">
          <p>{{ data.address1 }}</p>
          <p>{{ data?.address2 }}</p>
          <p>
            {{ $t('content.phone') }}: {{ data.phone1 }} <span v-if="data.phone2">–</span>
            {{ data.phone2 }}
          </p>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { TBranch } from '../models/type'
import { MapPinIcon } from '@heroicons/vue/24/outline'

defineProps<{
  data: TBranch
}>()
</script>
