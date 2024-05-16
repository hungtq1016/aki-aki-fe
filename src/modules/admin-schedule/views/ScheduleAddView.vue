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
            <template #label>{{ $t('form.pick_date') }}</template>
            <template #content>
              <VueDatePicker v-model="date" inline multi-calendars auto-apply class="!block" range></VueDatePicker>
            </template>
          </FormInputSlot>
          <FormInputSlot :has-error="Boolean(errorFields?.content?.length)">
            <template #label>{{ $t('form.pick_time') }}</template>
            <template #content>
              <VueDatePicker v-model="time" time-picker range auto-apply inline class="!block" />
            </template>
          </FormInputSlot>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="state.enable" :pass="pass" />
      <FormGroup :has-error="[Boolean(errorFields?.userId?.length)]">
        <template #heading>
          {{ $t('form.customer') }}
        </template>
        <template #content>
          <FormRadio @update:search="debouncedFn"
          v-model:id="state.userId"
          v-model:search="search"
            :list="users"
            v-bind="{ pagination, paginationOptions }"/>
        </template>
      </FormGroup>
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'

import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import FormInputSlot from '@/modules/admin-template/components/Form.input.slot.vue'
import FormRadio from '@/modules/admin-template/components/Form.radio.vue'

import { state, submit, fetchUsers, pagination, users, date, debouncedFn, search, time } from '../services/logictics/schedule.add'
import { paginationOptions, rules } from '../services/data/schedule'

const { pass, errorFields } = useAsyncValidator(state, rules)

onMounted(async () => {
  const startDate = new Date()
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7))
  date.value = [startDate, endDate]
  await fetchUsers()
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