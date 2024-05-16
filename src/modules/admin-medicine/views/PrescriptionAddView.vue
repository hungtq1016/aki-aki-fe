<template>
  <div class="flex flex-col gap-10">
    <FormLayout :submit="submit">
      <FormItem>
        <FormGroup :has-error="[Boolean(errorFields?.medicineId?.length)]">
          <template #heading>
            {{ $t('form.medicine') }}
          </template>
          <template #content>
            <FormRadio @update:search="debouncedMedicine" v-model:id="state.medicineId" v-model:search="medicineSearch"
              :list="medicines" v-bind="{ pagination, paginationOptions }" />
          </template>
        </FormGroup>
        <FormGroup :has-error="[Boolean(errorFields?.patientId?.length)]">
          <template #heading>
            {{ $t('form.customer') }}
          </template>
          <template #content>
            <FormRadio @update:search="debouncedUser" v-model:id="presciption.patientId" v-model:search="emailSearch" :list="users"
              v-bind="{ pagination, paginationOptions }" />
          </template>
        </FormGroup>
      </FormItem>
      <FormItem>
        <PublishView v-model="pass" :pass="true" />
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
    <FormLayout :submit="handleSubmit">
      <FormGroup :has-error="[pass]" class="col-span-2">
      <template #heading>
        {{ $t('content.prescription') }}
      </template>
      <template #content>
        <div class="flex flex-wrap items-center justify-end gap-3.5">
          <button type="button" 
            class="inline-flex items-center gap-2.5 rounded bg-transparent px-4 py-2 font-medium text-green-600 border border-green-600 hover:bg-opacity-90">
            <DocumentIcon class="w-5 h-5" />
            <span>{{ $t('button.save_as', { name: 'PDF' }) }}</span>
          </button>
          <button
            class="inline-flex items-center gap-2.5 rounded bg-green-600 px-4 py-2 font-medium text-white hover:bg-opacity-90">
            <PrinterIcon class="w-5 h-5" />
            <span>{{ $t('button.print') }}</span>
          </button>
          <button type="submit" :disabled="!pass"
            class="inline-flex items-center gap-2.5 rounded bg-cerulean-600 px-4 py-2 font-medium text-white hover:bg-opacity-90
            disabled:bg-cerulean-300">
            <span>{{ $t('button.submit') }}</span>
          </button>
          
        </div>
        <TableView :headers="headers" :items="prescriptions" :pagination="pagination"
          :pagination-options="paginationOptions" :fetch="async()=>{}" route="pre" key="pre" />
      </template>
    </FormGroup>
    </FormLayout>
  </div>
</template>

<script setup lang="ts">
import { DocumentIcon, PrinterIcon } from '@heroicons/vue/24/outline'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'
import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormTextarea from '@/modules/admin-template/components/Form.textarea.vue'
import TableView from '@/modules/admin/views/TableView.vue'
import FormRadio from '@/modules/admin-template/components/Form.radio.vue'

import { paginationOptions, headers, rules } from '../services/data/prescription.table'
import { debouncedMedicine, debouncedUser, emailSearch, fetchMedicines, medicineSearch, fetchUsers, users, medicines, pagination, prescriptions, state, submit, presciption, submitPrescription  } from '../services/logictics/prescription.add'
import { useUserstore } from '@/core/stores/user'

const route = useRoute()
const { user } = useUserstore()

const { pass, errorFields } = useAsyncValidator(presciption, rules)

const handleSubmit = async () => {
  await submitPrescription(user.id)
}

onMounted(async () => {
  await fetchMedicines()
  await fetchUsers(String(route.query.email))
})

</script>
