<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="handleSubmit">
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
          <FormInput v-model="state.title" :has-error="Boolean(errorFields?.title?.length)"
            :placeholder="$t('form.place_holder.title')">
            {{ $t('form.title') }}
          </FormInput>
          <FormTextarea v-model="state.description" :has-error="Boolean(errorFields?.description?.length)"
            :placeholder="$t('form.place_holder.desc')">
            {{ $t('form.desc') }}
          </FormTextarea>
          <div class="flex gap-x-2 items-end">
            <FormSelect class="flex-auto" v-model="activity" :list="activities" :has-error="false"
              :placeholder="$t('form.place_holder.treatment')">
              {{ $t('form.select_treatment') }}
            </FormSelect>
            <button @click="addToDetails" type="button"
              class="inline-flex items-center justify-center bg-cerulean-600 w-12 h-12 text-cerulean-50 rounded-md">
              <PlusIcon class="w-6 h-6" />
            </button>
          </div>
          <div class="flex flex-col gap-2">
            <div v-for="(data,index) in selectedDetails" :key="index">
              <div class="border border-gray-100 relative dark:border-zinc-900 rounded-md">
                <button type="button" @click="()=>removeFromDetail(index)"
                  class="absolute top-2 right-4 w-4 h-4 peer text-cerulean-600 bg-gray-100 border-gray-300 rounded checked:accent-cerulean-600"
                 >
                  <XMarkIcon class="w-4 h-4"/>
                  </button>
                <div
                  class="flex gap-4 px-4 py-2 bg-gray-100 peer-checked:bg-cerulean-100 dark:peer-checked:!bg-slate-950 dark:bg-zinc-950">
                  <div>
                    <VueDatePicker 
                      v-model="data.date" 
                      :min-date="minDate(index)"
                      :format-locale="vi" format="dd/MM/yyyy" 
                      auto-apply />
                  </div>
                </div>
                <div
                  class="border-t border-gray-100 bg-gray-50 px-4 dark:border-zinc-900 py-2 text-xs text-gray-600 peer-checked:bg-cerulean-50 dark:bg-zinc-800 dark:text-gray-300 dark:peer-checked:!bg-slate-900">
                    {{ activityTitle(data.activityId) }}
                </div>
              </div>
            </div>
          </div>
        </template>
      </FormGroup>
      <FormGroup :has-error="[
        Boolean(errorFields?.recordId?.length),
      ]">
        <template #heading>
          {{ $t('form.healthrecord') }}
        </template>
        <template #content>
          <div>{{records}}</div>
          <FormRadio @update:search="debouncedRecord" v-model:id="state.recordId" v-model:search="searchRecord"
            :list="records" v-bind="{ pagination, paginationOptions }">
            {{ $t('form.select_healthrecord') }}
          </FormRadio>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="state.status" :pass="pass" />
      <FormGroup :has-error="[
        Boolean(errorFields?.videoEmbed?.length),
        Boolean(errorFields?.content?.length)
      ]">
        <template #heading>
          {{ $t('form.patient') }}
        </template>
        <template #content>
          <FormRadio @update:search="debouncedPatient" v-model:id="state.patientId" v-model:search="searchPatient"
            :list="patients" v-bind="{ pagination, paginationOptions }">
            {{ $t('form.select_patient') }}
          </FormRadio>
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
import FormInput from '@/modules/admin-template/components/Form.input.vue'
import FormTextarea from '@/modules/admin-template/components/Form.textarea.vue'

import { debouncedPatient, activities, fetchActivities, fetchPatients, pagination, patients, searchPatient, state, submit, removeFromDetail
  , activity, addToDetails, selectedDetails, activityTitle, 
  fetchRecords,
  debouncedRecord,
  searchRecord,
  records} from '../services/logictics/treatment.add'
import { paginationOptions, rules } from '../services/data/treatment'
import { useRoute, useRouter } from 'vue-router'
import FormRadio from '@/modules/admin-template/components/Form.radio.vue'
import FormSelect from '@/modules/admin-template/components/Form.select.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { vi } from 'date-fns/locale';

const route = useRoute()
const router = useRouter()
const { pass, errorFields } = useAsyncValidator(state, rules) 

const minDate = (index:number) => {
  if (index == 0) {
    return new Date()
  }
  return new Date(selectedDetails.value[index-1].date)
}

const handleSubmit = async() => {
  const findPatients = patients.value.find(patient => patient.id === state.patientId)
  await submit()
  await router.push(`/admin/prescriptions/add?email=${findPatients?.email}&treatment=${state.id}`)
}

onMounted(async() => {
  await fetchPatients(String(route.query.email || ''))
  await fetchRecords(String(route.query.record || ''))
  await fetchActivities()
})

</script>
