<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="group">
    <div class="group-hover:hidden whitespace-nowrap">
      {{ formatDistance(new Date(dateUtcPlus7), new Date(), { addSuffix: true, locale: locale }) }}
    </div>
    <div class="hidden group-hover:block whitespace-nowrap">
      {{ format(new Date(dateUtcPlus7), 'Pp', { locale: locale }) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDistance, format, addHours } from 'date-fns'
import { computed } from 'vue'

import { i18n } from '@/core/services/base/translation'

import { vi, enUS } from 'date-fns/locale'

const props = defineProps<{
  date: string
}>()

const dateUtcPlus7 = computed(() => {
  const date = new Date(props.date)
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
