<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup :has-error="[
          Boolean(errorFields?.patientId?.length),
          Boolean(errorFields?.nurseId?.length),
        ]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormRadio @update:search="debouncedCustomers" v-model:id="state.patientId" v-model:search="customerSearch"
            :list="customers" :pagination="customerPagination" v-bind="{ paginationOptions }">
            {{ $t('form.select_patient') }}
          </FormRadio>
          <FormRadio @update:search="debouncedNurses" v-model:id="state.nurseId" v-model:search="nurseSearch"
            :list="nurses" v-bind="{ paginationOptions }" :pagination="nursePagination">
            {{ $t('form.select_nurse') }}
          </FormRadio>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="state.enable" :pass="pass" />
      <div>{{ selectedServices }}</div>
      <FormGroup :has-error="[
          Boolean(errorFields?.healthRecordId?.length)
        ]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormInput v-model="state.total" :disabled="true" 
            :placeholder="$t('form.place_holder.total')">
              {{ $t('form.total') }}
            </FormInput>
            <FormInput v-model="state.tax" :disabled="true" 
            :placeholder="$t('form.place_holder.tax')">
              {{ $t('form.tax') }}
            </FormInput>
          </div>
          <FormSelect v-model="state.healthRecordId" :list="healthRecords"
            :has-error="Boolean(errorFields?.healthRecordId?.length)"
            :placeholder="$t('form.place_holder.health_record_id')">
            {{ $t('form.health_record') }}
          </FormSelect>
          <FormCheckbox :list="servicePrices" v-model="selectedServices">
            {{ $t('form.service_price') }}
          </FormCheckbox>
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
import FormSelect from '@/modules/admin-template/components/Form.select.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'

import { customerPagination, customers, debouncedCustomers, customerSearch, state, submit, debouncedNurses, nurseSearch, nurses, nursePagination, fetchCustomers, fetchServicePrices, fetchNurses, healthRecords, selectedServices, servicePrices } from '../services/logictics/invoice.add'
import { paginationOptions, rules } from '../services/data/invoice'
import FormRadio from '@/modules/admin-template/components/Form.radio.vue'
import FormCheckbox from '@/modules/admin-template/components/Form.checkbox.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'

const { pass, errorFields } = useAsyncValidator(state, rules)

onMounted(async() => {
  await fetchCustomers()
  await fetchNurses()
  await fetchServicePrices()
})
</script>
