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
import { onMounted, ref, type Ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'

import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import FormInputSlot from '@/modules/admin-template/components/Form.input.slot.vue'
import FormRadio from '@/modules/admin-template/components/Form.radio.vue'

import { state, rules, submit, fetchUsers, pagination, users } from '../services/logictics/schedule'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'
import { paginationOptions } from '../services/data/schedule'

const date = ref()
const search: Ref<string> = ref('')

  const debouncedFn = useDebounceFn(async () => {
  await fetchUsers(search.value)
}, 600, { maxWait: 5000 })

onMounted(async () => {
  const startDate = new Date()
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7))
  date.value = [startDate, endDate]

  await fetchUsers(search.value)
})

const time = ref()
const { pass, errorFields } = useAsyncValidator(state, rules)

</script>

<style scope>
.dp--tp-wrap {
  @apply !w-full max-w-none
}

.dp__overlay_row.dp__flex_row {
  @apply !flex-row
}
</style>