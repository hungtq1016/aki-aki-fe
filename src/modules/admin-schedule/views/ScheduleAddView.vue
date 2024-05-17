<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup :has-error="[
        Boolean(errorFields?.time?.length),
        Boolean(errorFields?.date?.length)
      ]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <div>{{ state }}</div>
          <FormInputSlot :has-error="Boolean(errorFields?.date?.length)">
            <template #label>{{ $t('form.pick_date') }}</template>
            <template #content>
              <VueDatePicker v-model="state.date" :format-locale="vi" format="E" class="!block"
              inline multi-calendars auto-apply></VueDatePicker>
            </template>
          </FormInputSlot>
          <FormInputSlot :has-error="Boolean(errorFields?.time?.length)">
            <template #label>{{ $t('form.pick_time') }}</template>
            <template #content>
              <VueDatePicker v-model="time" time-picker auto-apply inline class="!block" />
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
          v-model:id="id"
          v-model:search="search"
            :list="users"
            v-bind="{ pagination, paginationOptions }"/>
        </template>
      </FormGroup>
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'
import { vi } from 'date-fns/locale';

import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import FormInputSlot from '@/modules/admin-template/components/Form.input.slot.vue'
import FormRadio from '@/modules/admin-template/components/Form.radio.vue'

import { state, submit, fetchUsers, pagination, users, debouncedFn, search, time } from '../services/logictics/schedule.add'
import { paginationOptions, rules } from '../services/data/schedule'

const { pass, errorFields } = useAsyncValidator(state, rules)
const id = ref('')
onMounted(async () => {
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