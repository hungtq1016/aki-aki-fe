<template>
  <FormLayout :submit="submit">
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
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="state.enable" :pass="pass" />
      <FormGroup :has-error="[Boolean(errorFields?.userId?.length)]">
        <template #heading>
          {{ $t('form.information') }}
        </template>
        <template #content>
          <FormRadio @update:search="debouncedFn" v-model:id="state.userId" v-model:search="search" :list="users"
            v-bind="{ pagination, paginationOptions }" />
        </template>
      </FormGroup>
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import FormGroup from '@/modules/admin-template/components/Form.group.vue';
import FormItem from '@/modules/admin-template/components/Form.item.vue';
import FormLayout from '@/modules/admin-template/components/Form.layout.vue';
import PublishView from '@/modules/admin-template/views/PublishView.vue';
import FormRadio from '@/modules/admin-template/components/Form.radio.vue';
import FormTextarea from '@/modules/admin-template/components/Form.textarea.vue';
import FormInputSlot from '@/modules/admin-template/components/Form.input.slot.vue';
import FormInput from '@/modules/admin-template/components/Form.input.vue';
import FormSelect from '@/modules/admin-template/components/Form.select.vue';

import { anamnesis, debouncedFn, fetchUsers, selectedAnamnesis, pagination, search, state, submit, users, otherAnamnesis, fetch } from '../services/logictics/record.edit';
import { paginationOptions } from '../services/data/record';
import { rules } from '@/modules/admin-medicine/services/data/record';

const route = useRoute()

const { pass, errorFields } = useAsyncValidator(state, rules)

onMounted(async () => {
  await fetchUsers(String(route.query.email || ''))
  await fetch(String(route.params.id))
})

</script>