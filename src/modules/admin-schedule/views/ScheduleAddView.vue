<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup :has-error="[
        Boolean(errorFields?.title?.length),
        Boolean(errorFields?.categoryId?.length),
        Boolean(errorFields?.content?.length)
      ]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInputSlot :has-error="Boolean(errorFields?.content?.length)">
            <template #label>{{ $t('form.content') }}</template>
            <template #content>
              <VueDatePicker v-model="date" inline multi-calendars auto-apply class="!block" range></VueDatePicker>
            </template>
          </FormInputSlot>
          <FormInputSlot :has-error="Boolean(errorFields?.content?.length)">
            <template #label>{{ $t('form.time') }}</template>
            <template #content>
              <VueDatePicker v-model="time" time-picker range auto-apply inline class="!block" />
            </template>
          </FormInputSlot>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="state.enable" :pass="pass" />
      <FormGroup :has-error="[Boolean(errorFields?.desc?.length), Boolean(errorFields?.videoEmbed?.length)]">
        <template #heading>
          {{ $t('form.content') }}
        </template>
        <template #content>
          <ul class="flex flex-col gap-2">
            <li v-for="(permission, index) in []" :key="index">
              <label :for="`checkbox-${index}`">
                <div class="border border-gray-100 relative dark:border-zinc-900 rounded-md">
                  <input 
                    :disabled="false"
                    class="absolute top-2 right-4 w-4 h-4 peer text-cerulean-600 bg-gray-100 border-gray-300 rounded checked:accent-cerulean-600"
                    type="radio" :value="user" :id="`checkbox-${index}`" />
                  <div
                    class="flex justify-between px-4 py-2 bg-gray-100 peer-checked:bg-cerulean-100 dark:peer-checked:!bg-slate-950 dark:bg-zinc-950">
                    <div
                      class="flex gap-x-1 items-center capitalize text-gray-950 text-sm font-semibold dark:text-gray-50">
                      {{ permission.type }}
                    </div>
                  </div>
                  <div
                    class="border-t border-gray-100 bg-gray-50 px-4 dark:border-zinc-900 py-2 text-xs text-gray-600 peer-checked:bg-cerulean-50 dark:bg-zinc-800 dark:text-gray-300 dark:peer-checked:!bg-slate-900">
                    {{ permission.value }}
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </template>
      </FormGroup>
      <FormGroup :has-error="[false]">
        <template #heading>
          {{ $t('form.content') }}
        </template>
        <template #content>
          <FormSelectMultiple v-model="selectedTags" :list="tags" :has-error="false"
            :placeholder="$t('form.place_holder.multiple_select_tag')">
            {{ $t('form.multiple_select_tag') }}
          </FormSelectMultiple>
        </template>
      </FormGroup>
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import FormInputSlot from '@/modules/admin-template/components/Form.input.slot.vue'
import FormSelectMultiple from '@/modules/admin-template/components/Form.select.multiple.vue'

import { state, rules, submit, selectedTags } from '../services/logictics/schedule'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'

import { get } from '@/core/services/helpers/request.helper'

import type { TCategory, TTag } from '../models/type'
import type { Ref } from 'vue'
import type { TUser } from '@/modules/admin-oauth2/models/type'
import type { TPaginationResponse } from '@/core/models/type'
const date = ref()

onMounted(() => {
  const startDate = new Date()
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7))
  date.value = [startDate, endDate]
})

const time = ref()
const { pass, errorFields } = useAsyncValidator(state, rules)

const categories: Ref<TCategory[]> = ref([])
const tags: Ref<TTag[]> = ref([])

onMounted(() => {
  get<TCategory[]>('/api/categories').then((response) => {
    categories.value = response?.data || []
  })
  get<TCategory[]>('/api/tags').then((response) => {
    tags.value = response?.data || []
  })
})
const user: Ref<TUser[]> = ref([])

onMounted(()=>{
  get<TPaginationResponse<TUser>>('/api/users/page').then((response) => {
    if (response?.data) {
      const { data, ...page } = response.data
      user.value = data
    }
  })
})

</script>

<style scope>
.dp--tp-wrap {
  @apply !w-full max-w-none
}

.dp__overlay_row.dp__flex_row {
  @apply !flex-row
}
</style>