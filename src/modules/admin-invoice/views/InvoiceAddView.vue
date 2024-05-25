<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="handleSubmit">
    <FormItem>
      <FormGroup :has-error="[
          Boolean(errorFields?.patientId?.length),
          Boolean(errorFields?.nurseId?.length),
        ]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormRadio @update:search="debouncedPatients" v-model:id="state.patientId" v-model:search="searchPatient"
            :list="patients" :pagination="paginationPatient" v-bind="{ paginationOptions }">
            {{ $t('form.select_patient') }}
          </FormRadio>
          <FormRadio @update:search="debouncedNurses" v-model:id="state.nurseId" v-model:search="searchNurse"
            :list="nurses" :pagination="paginationNurse" v-bind="{ paginationOptions }">
            {{ $t('form.select_nurse') }}
          </FormRadio>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="state.status" :pass="pass" />
      <FormGroup :has-error="[
          Boolean(errorFields?.healthRecordId?.length),
          Boolean(errorFields?.prescriptionId?.length)
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
          <FormRadio @update:search="debouncedPrescriptions" v-model:id="state.prescriptionId" v-model:search="searchPrescription"
            :list="prescriptions"  :pagination="paginationPrescription" v-bind="{ paginationOptions }">
            {{ $t('form.select_prescription') }}
          </FormRadio>
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
import FormGroup from '@/modules/admin-template/components/Form.group.vue'

import { debouncedPatients, state, submit, debouncedNurses, nurses, fetchPatients, fetchServicePrices, fetchNurses, selectedServices, servicePrices, fetchPrescriptions, searchPatient, patients, paginationPatient, searchNurse, paginationNurse, debouncedPrescriptions, searchPrescription, paginationPrescription, prescriptions } from '../services/logictics/invoice.add'
import { paginationOptions, rules } from '../services/data/invoice'
import FormRadio from '@/modules/admin-template/components/Form.radio.vue'
import FormCheckbox from '@/modules/admin-template/components/Form.checkbox.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'
import { useRoute } from 'vue-router'

const { pass, errorFields } = useAsyncValidator(state, rules)
const route = useRoute()

const handleSubmit = async() => {
  await submit()
  
}

onMounted(async() => {
  await fetchPatients(String(route.query.email || ''))
  await fetchNurses('')
  await fetchPrescriptions(String(route.query.prescription || ''))
  await fetchServicePrices()
})
</script>
