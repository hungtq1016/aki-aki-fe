<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="max-w-md">
    <p class="mb-2.5 text-sm font-medium">{{ data.author }}</p>
    <div v-if="data.createdAt !== data.updatedAt" class="text-sm text-gray-600">
      {{ $t('content.message_edited') }}
    </div>
    <div class="mb-2.5 rounded-2xl rounded-tl-none bg-zircon-50 py-3 px-5 dark:bg-shark-950">
      <p class="font-medium">{{ data.content }}</p>
    </div>
    <p class="group font-medium text-sm">
      <span class="group-hover:hidden whitespace-nowrap">
        {{
          formatDistance(new Date(dateUtcPlus7), new Date(), { addSuffix: true, locale: locale })
        }}
      </span>
      <span class="hidden group-hover:block whitespace-nowrap">
        {{ format(new Date(dateUtcPlus7), 'Pp', { locale: locale }) }}
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { formatDistance, format, addHours } from 'date-fns'
import { computed } from 'vue'

import { i18n } from '@/core/services/base/translation'

import { vi, enUS } from 'date-fns/locale'

import type { TMessage } from '../models/type'

const props = defineProps<{
  data: TMessage
}>()

const dateUtcPlus7 = computed(() => {
  const date = new Date(props.data.createdAt)
  return addHours(date, 7) // Adjusts the date to UTC+7 by adding 7 hours
})

const locale = computed(() => {
  const currentLocale = String(i18n.global.locale.value)
  switch (currentLocale) {
    case 'vi-VN':
      return vi
    case 'en-US':
      return enUS
    default:
      return enUS
  }
})
</script>

<style scoped></style>
