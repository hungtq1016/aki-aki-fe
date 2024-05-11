<template>
  <div class="flex flex-col gap-10">
    <FormLayout :submit="submit">
      <FormItem>
        <FormGroup :has-error="[false]">
          <template #heading>
            {{ $t('form.medicine') }}
          </template>
          <template #content>
            <FormSelect v-model="state.medicineId" :has-error="false" :list="medicines"
              :placeholder="$t('form.place_holder.medicineId')">
              {{ $t('form.medicineId') }}
            </FormSelect>
            <FormInput v-model="state.quantity" type="number" :placeholder="$t('form.place_holder.quantity')">
              {{ $t('form.quantity') }}
            </FormInput>
          </template>
        </FormGroup>
      </FormItem>
      <FormItem>
        <PublishView v-model="state" :pass="true" />
        <FormGroup :has-error="[false]">
          <template #heading>
            {{ $t('form.content') }}
          </template>
          <template #content>
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
        <TableView 
          :headers="headers"
          :items="prescriptions"
          :pagination="pagination"
          :pagination-options = "paginationOptions"
          :fetch="fetch"
          route="pre"
          key="pre"/>
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
import FormSelect from '@/modules/admin-template/components/Form.select.vue'
import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormTextarea from '@/modules/admin-template/components/Form.textarea.vue'
import TableView from '@/modules/admin/views/TableView.vue'

import { paginationOptions, headers } from '../services/data/prescription'
import { fetch, medicines, pagination, prescriptions, state, submit } from '../services/logictics/prescription'

import { onMounted } from 'vue'
import { get } from '@/core/services/helpers/request.helper'

import type { TMedicine } from '../models/type'

onMounted(async () => {
  const data = await get<TMedicine[]>('/api/medicines')
  medicines.value = data?.data || []
})

</script>
