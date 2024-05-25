<template>
  <FormLayout :submit="handleSubmit">
    <FormItem>
      <FormGroup :has-error="[
        Boolean(errorFields?.birthDay?.length),
        Boolean(errorFields?.gender?.length),
        Boolean(errorFields?.address?.length),
        Boolean(errorFields?.height?.length),
        Boolean(errorFields?.weight?.length),
        Boolean(errorFields?.bloodPressure?.length),
        Boolean(errorFields?.heartBeat?.length)
      ]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <div class="mb-5 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <FormInput
                type="date"
                v-model="state.birthDay"
                :has-error="Boolean(errorFields?.birthDay?.length)"
                :placeholder="$t('form.place_holder.birth_day')"
                >
                {{ $t('form.birth_day') }}
            </FormInput>
            <FormSelect
              v-model="state.gender"
              :list="[{label:$t('form.gender.male'),id:'male'}, {label:$t('form.gender.female'),id:'female'}]"
              :has-error="Boolean(errorFields?.gender?.length)"
              :placeholder="$t('form.place_holder.gender')"
            >
              {{ $t('form.select_gender') }}
            </FormSelect>
          </div>
          <FormTextarea v-model="state.address" 
            :has-error="Boolean(errorFields?.address?.length)"
            :placeholder="$t('form.place_holder.address')">
            {{ $t('form.address') }}
          </FormTextarea>
          <div class="mb-5 grid grid-cols-2 gap-6 xl:grid-cols-3">
            <FormInput
                type="number"
                v-model="state.height"
                :has-error="Boolean(errorFields?.height?.length)"
                :placeholder="$t('form.place_holder.height')"
                >
                {{ $t('form.height') }}
            </FormInput>
            <FormInput
                type="number"
                v-model="state.weight"
                :has-error="Boolean(errorFields?.weight?.length)"
                :placeholder="$t('form.place_holder.weight')"
                >
                {{ $t('form.weight') }}
            </FormInput>
            <FormInput
                type="number"
                v-model="state.bloodPressure"
                :has-error="Boolean(errorFields?.bloodPressure?.length)"
                :placeholder="$t('form.place_holder.blood_pressure')"
                >
                {{ $t('form.blood_pressure') }}
            </FormInput>
            <FormInput
                type="number"
                v-model="state.heartBeat"
                :has-error="Boolean(errorFields?.heartBeat?.length)"
                :placeholder="$t('form.place_holder.heart_beat')"
                >
                {{ $t('form.heart_beat') }}
            </FormInput>
            <FormInput
                type="number"
                v-model="state.temperature"
                :has-error="Boolean(errorFields?.temperature?.length)"
                :placeholder="$t('form.place_holder.temperature')"
                >
                {{ $t('form.temperature') }}
            </FormInput>
          </div>
          <FormTextarea v-model="state.diagnosis" 
            :has-error="Boolean(errorFields?.diagnosis?.length)"
            :placeholder="$t('form.place_holder.diagnosis')">
            {{ $t('form.diagnosis') }}
          </FormTextarea>
          <FormInputSlot :has-error="false">
            <template #label>
              {{ $t('form.anamnesis') }}
            </template>
            <template #content>
              <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-2.5 p-5">
                <div v-for="data in anamnesis" :key="data" class="flex gap-2 items-center">
                  <input type="checkbox" :value="data" v-model="selectedAnamnesis" :id="data">
                  <label :for="data"
                    class="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black-1000 dark:text-white">
                    {{ data }}
                  </label>
                </div>
              </div>
            </template>
          </FormInputSlot>
          <FormTextarea v-model="otherAnamnesis" 
            :placeholder="$t('form.place_holder.other_anamnesis')">
            {{ $t('form.other_anamnesis') }}
          </FormTextarea>
          <FormRadio @update:search="debouncedSchedule" v-model:id="state.scheduleId" v-model:search="searchSchedule" :list="schedules"
            v-bind="{ pagination, paginationOptions }">
            {{ $t('form.select_schedule') }}
          </FormRadio>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="state.status" :pass="pass" />
      <FormGroup :has-error="[Boolean(errorFields?.patientId?.length),Boolean(errorFields?.doctorId?.length)]">
        <template #heading>
          {{ $t('form.information') }}
        </template>
        <template #content>
          <FormRadio @update:search="debouncedPatient" v-model:id="state.patientId" v-model:search="searchPatient" :list="patients"
            v-bind="{ pagination, paginationOptions }">
            {{ $t('form.select_patient') }}
          </FormRadio>
          <FormRadio @update:search="debouncedDoctor" v-model:id="state.doctorId" v-model:search="searchDoctor" :list="doctors"
            v-bind="{ pagination, paginationOptions }">
            {{ $t('form.select_doctor') }}
          </FormRadio>
        </template>
      </FormGroup>
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import FormGroup from '@/modules/admin-template/components/Form.group.vue';
import FormItem from '@/modules/admin-template/components/Form.item.vue';
import FormLayout from '@/modules/admin-template/components/Form.layout.vue';
import PublishView from '@/modules/admin-template/views/PublishView.vue';
import FormRadio from '@/modules/admin-template/components/Form.radio.vue';
import FormTextarea from '@/modules/admin-template/components/Form.textarea.vue';
import FormInputSlot from '@/modules/admin-template/components/Form.input.slot.vue';
import FormInput from '@/modules/admin-template/components/Form.input.vue';
import FormSelect from '@/modules/admin-template/components/Form.select.vue';

import { anamnesis, selectedAnamnesis, pagination, state, submit, otherAnamnesis, fetchPatients, 
  patients, doctors, debouncedDoctor, debouncedPatient, searchPatient, searchDoctor, fetchDoctors, debouncedSchedule, searchSchedule, schedules, 
  fetchSchedule} from '../services/logictics/record.add';
import { paginationOptions } from '../services/data/record';
import { rules } from '@/modules/admin-medicine/services/data/record';

const route = useRoute()
const router = useRouter()

const { pass, errorFields } = useAsyncValidator(state, rules)

const handleSubmit = async () => {
  const findPatients = patients.value.find(patient => patient.id === state.value.patientId)
  await router.push('/admin/treatmentplants/add?email='+ findPatients?.email)
  await submit()
}

onMounted(async () => {
  await fetchPatients(String(route.query.email || ''))
  await fetchDoctors('')
  await fetchSchedule(String(route.query.schedule || ''))
})

</script>
