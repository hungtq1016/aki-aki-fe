<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup :has-error="[Boolean(errorFields?.title?.length)]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <div class="mb-5 flex flex-col gap-6 xl:flex-row">
            <div class="w-full xl:w-1/2">
              <label class="mb-3 block text-sm font-medium text-black-1000 dark:text-white">
                {{ $t('form.fullname') }}
              </label>
              <input v-model="state.fullName" type="text" :placeholder="$t('form.place_holder.full_name')"
                class="dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 w-full rounded-lg border border-gray-100 !bg-gray-50 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50">
            </div>
            <div class="w-full xl:w-1/2">
              <label class="mb-3 block text-sm font-medium text-black-1000 dark:text-white">
                {{ $t('form.id_record') }}
              </label>
              <input v-model="state.id" type="text" disabled
                class="dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 w-full rounded-lg border border-gray-100 !bg-gray-50 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50">
            </div>
          </div>
          <div class="mb-5 flex flex-col gap-6 xl:flex-row">
            <div class="w-full xl:w-1/2">
              <label class="mb-3 block text-sm font-medium text-black-1000 dark:text-white">
                {{ $t('form.birth_day') }}
              </label>
              <input v-model="state.birthDay" type="date"
                class="dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 w-full rounded-lg border border-gray-100 !bg-gray-50 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50">
            </div>
            <div class="w-full xl:w-1/2">
              <label class="mb-3 block text-sm font-medium text-black-1000 dark:text-white">
                {{ $t('form.gender') }}
              </label>
              <select v-model="state.gender"
                class="dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 w-full rounded-lg border border-gray-100 !bg-gray-50 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50">
                <option value="-1">{{ $t('form.place_holder.gender') }}</option>
                <option value="male">{{ $t('form.gender.male') }}</option>
                <option value="felmale">{{ $t('form.gender.female') }}</option>
              </select>
            </div>
          </div>
          <div class="mb-5.5">
            <label class="mb-3 block text-sm font-medium text-black-1000 dark:text-white">
              {{ $t('form.address') }}
            </label>
            <textarea rows="3" v-model="state.address" :placeholder="$t('form.place_holder.address')"
              class="resize-none w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black-1000 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></textarea>
          </div>
          <div class="mb-6">
            <label class="mb-4.5 block text-sm font-medium text-black-1000 dark:text-white">
              {{ $t('form.anamnesis') }}
            </label>
            <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-2.5">
              <div v-for="data in anamnesis" :key="data" class="flex gap-2 items-center">
                <input type="checkbox" :value="data" v-model="state.anamnesis" :id="data">
                <label :for="data"
                  class="relative flex cursor-pointer select-none items-center gap-2 text-sm font-medium text-black-1000 dark:text-white">
                  {{ data }}
                </label>
              </div>
            </div>

          </div>
          <div class="mb-5.5">
            <label class="mb-3 block text-sm font-medium text-black-1000 dark:text-white">
              {{ $t('form.other') }}
            </label>
            <textarea rows="3" v-model="other" :placeholder="$t('form.place_holder.other_anamnesis')"
              class="resize-none w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black-1000 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></textarea>
          </div>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="state.enable" :pass="pass" />
      <FormGroup :has-error="[Boolean(errorFields?.desc?.length)]">
        <template #heading>
          {{ $t('form.record') }}
        </template>
        <template #content>
          <div class="mb-5 flex flex-col gap-6 xl:flex-row">
            <div class="w-full xl:w-1/2">
              <label class="mb-3 block text-sm font-medium text-black-1000 dark:text-white">
                {{ $t('form.height') }}
              </label>
              <input v-model="state.height" type="number" :placeholder="$t('form.place_holder.height')"
                class="dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 w-full rounded-lg border border-gray-100 !bg-gray-50 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50">
            </div>
            <div class="w-full xl:w-1/2">
              <label class="mb-3 block text-sm font-medium text-black-1000 dark:text-white">
                {{ $t('form.weight') }}
              </label>
              <input v-model="state.weight" type="number" :placeholder="$t('form.place_holder.weight')"
                class="dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 w-full rounded-lg border border-gray-100 !bg-gray-50 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50">
            </div>
            <div class="w-full xl:w-1/2">
              <label class="mb-3 block text-sm font-medium text-black-1000 dark:text-white">
                {{ $t('form.date_record') }}
              </label>
              <input v-model="state.dateRecord" type="date"
                class="dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 w-full rounded-lg border border-gray-100 !bg-gray-50 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50">
            </div>
          </div>
          <div class="mb-5 flex flex-col gap-6 xl:flex-row">
            <div class="w-full xl:w-1/2">
              <label class="mb-3 block text-sm font-medium text-black-1000 dark:text-white">
                {{ $t('form.blood_pressure') }}
              </label>
              <input v-model="state.bloodPressure" type="number" :placeholder="$t('form.place_holder.blood_pressure')"
                class="dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 w-full rounded-lg border border-gray-100 !bg-gray-50 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50">
            </div>
            <div class="w-full xl:w-1/2">
              <label class="mb-3 block text-sm font-medium text-black-1000 dark:text-white">
                {{ $t('form.heart_beat') }}
              </label>
              <input v-model="state.heartBeat" type="number" :placeholder="$t('form.place_holder.heart_beat')"
                class="dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 w-full rounded-lg border border-gray-100 !bg-gray-50 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50">
            </div>
            <div class="w-full xl:w-1/2">
              <label class="mb-3 block text-sm font-medium text-black-1000 dark:text-white">
                {{ $t('form.temperature') }}
              </label>
              <input v-model="state.temperature" type="number" :placeholder="$t('form.place_holder.temperature')"
                class="dark:border-zinc-950 dark:bg-zinc-900 dark:text-gray-50 text-gray-900 w-full rounded-lg border border-gray-100 !bg-gray-50 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50">
            </div>
          </div>
          <div class="mb-5.5">
            <label class="mb-3 block text-sm font-medium text-black-1000 dark:text-white">
              {{ $t('form.diagnosis') }}
            </label>
            <textarea rows="3" v-model="state.diagnosis" :placeholder="$t('form.place_holder.diagnosis')"
              class="resize-none w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black-1000 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></textarea>
          </div>
          {{state.anamnesis}}
        </template>
      </FormGroup>
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import FormGroup from '@/modules/admin-template/components/Form.group.vue';
import FormItem from '@/modules/admin-template/components/Form.item.vue';
import FormLayout from '@/modules/admin-template/components/Form.layout.vue';
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs';
import { ref, watch } from 'vue';
import { rules } from '../services/logictics/medicine';
import { v4 } from 'uuid';
import PublishView from '@/modules/admin-template/views/PublishView.vue';
const init_state = {
  id: v4(),
  enable: true,
  fullName: '',
  birthDay: '',
  gender: '-1',
  address: '',
  height: 0,
  weight: 0,
  bloodPressure: 0,
  temperature: 37,
  heartBeat: 0,
  anamnesis: [] as string[],
  dateRecord: '',
  diagnosis:''
}
const other = ref('')
const anamnesis = ['Tăng huyết áp', 'Viêm gan', 'Đái tháo đường']
const state = ref({ ...init_state })
const { pass, errorFields } = useAsyncValidator(state, rules)
const submit = () => {

}

watch(other, (newValue) => {
  state.value.anamnesis = newValue.split(',').map(str => str.trim());
})

</script>

