<template>
  <div class="flex flex-col gap-10">
    <FormLayout :submit="submit">
      <FormItem>
        <FormGroup :has-error="[false]">
          <template #heading>
            {{ $t('form.medicine') }}
          </template>
          <template #content>
            <FormRadio @update:search="debouncedFn" v-model:id="state.medicineId" v-model:search="search"
              :list="medicines" v-bind="{ pagination, paginationOptions }" />
          </template>
        </FormGroup>
        <FormGroup :has-error="[false]">
          <template #heading>
            {{ $t('form.customer') }}
          </template>
          <template #content>
            <FormRadio @update:search="debouncedUserFn" v-model:id="state.userId" v-model:search="search" :list="users"
              v-bind="{ pagination, paginationOptions }" />
          </template>
        </FormGroup>
      </FormItem>
      <FormItem>
        <PublishView v-model="allPass" :pass="true" />
        <FormGroup :has-error="[false]">
          <template #heading>
            {{ $t('form.content') }}
          </template>
          <template #content>
            <FormInput v-model="state.quantity" type="number" :placeholder="$t('form.place_holder.quantity')">
              {{ $t('form.quantity') }}
            </FormInput>
            <FormTextarea v-model="state.usage" :has-error="false" :placeholder="$t('form.place_holder.usage')">
              {{ $t('form.usage') }}
            </FormTextarea>
          </template>
        </FormGroup>
      </FormItem>
    </FormLayout>
    <FormGroup :has-error="[true]">
      <template #heading>
        {{ $t('content.prescription') }}
      </template>
      <template #content>
        <div class="flex flex-wrap items-center justify-end gap-3.5">
          <button
            class="inline-flex items-center gap-2.5 rounded bg-green-600 px-4 py-2 font-medium text-white hover:bg-opacity-90">
            <PrinterIcon class="w-5 h-5" />
            <span>{{ $t('button.print') }}</span>
          </button>
          <button
            class="inline-flex items-center gap-2.5 rounded bg-cerulean-600 px-4 py-2 font-medium text-white hover:bg-opacity-90">
            <DocumentIcon class="w-5 h-5" />
            <span>{{ $t('button.save_as', { title: 'PDF' }) }}</span>
          </button>
        </div>
        <TableView :headers="headers" :items="prescriptions" :pagination="pagination"
          :pagination-options="paginationOptions" :fetch="fetch" route="pre" key="pre" />
      </template>
    </FormGroup>
  </div>
</template>

<script setup lang="ts">
import { DocumentIcon, PrinterIcon } from '@heroicons/vue/24/outline'

import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'
import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormTextarea from '@/modules/admin-template/components/Form.textarea.vue'
import TableView from '@/modules/admin/views/TableView.vue'

import { paginationOptions, headers } from '../services/data/prescription'
import { fetch, medicines, pagination, prescriptions, state, submit } from '../services/logictics/prescription'
import { onMounted, ref, type Ref } from 'vue'
import { get } from '@/core/services/helpers/request.helper'

import type { TMedicine } from '../models/type'
import { useDebounceFn } from '@vueuse/core'
import type { TPaginationResponse } from '@/core/models/type'
import FormRadio from '@/modules/admin-template/components/Form.radio.vue'
import type { TUser } from '@/modules/admin-oauth2/models/type'
import { useRoute } from 'vue-router'

const route = useRoute()
// const { pass, errorFields } = useAsyncValidator(state, rules)
onMounted(async () => {
  await fetchMedicines(search.value)
  await fetchUsers(useEmail.value)
})
const users: Ref<TUser[]> = ref([])
const fetchMedicines = async (value: string) => {
  const options = { ...paginationOptions.value, value }

  get<TPaginationResponse<TMedicine>>(`/api/medicines/page`, options).then((response) => {
    if (response?.data) {
      const { data, ...page } = response.data
      medicines.value = data
      pagination.value = page
    }
  })
}

const useEmail: Ref<string> = ref(route.query.email ? String(route.query.email) : '')

const fetchUsers = async (value: string, role: string = 'customer'): Promise<void> => {

  const options = { paginationOptions, value }

  get<TPaginationResponse<TUser>>(`/api/users/role/${role}/search`, options).then((response) => {
    if (response?.data) {
      const { data, ...page } = response.data
      users.value = data
      pagination.value = page
    }
  })
}

const search: Ref<string> = ref('')
const allPass = true
const debouncedFn = useDebounceFn(async () => {
  await fetchMedicines(search.value)
}, 600, { maxWait: 5000 })

const debouncedUserFn = useDebounceFn(async () => {
  await fetchUsers(useEmail.value)
}, 600, { maxWait: 5000 })

</script>
