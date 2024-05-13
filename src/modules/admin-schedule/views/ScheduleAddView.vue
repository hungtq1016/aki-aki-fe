<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup :has-error="[Boolean(errorFields?.title?.length),Boolean(errorFields?.categoryId?.length),Boolean(errorFields?.content?.length)]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInput v-model="state.title" :has-error="Boolean(errorFields?.title?.length)"
            :placeholder="$t('form.place_holder.title')">
            {{ $t('form.title') }}
          </FormInput>
          <FormInput v-model="state.slug" :disabled="true"
            :placeholder="$t('form.place_holder.slug')">
            {{ $t('form.slug') }}
          </FormInput>
          <FormSelect v-model="state.categoryId" :list="categories"
            :has-error="Boolean(errorFields?.categoryId?.length)" :placeholder="$t('form.place_holder.category')">
            {{ $t('form.select_category') }}
          </FormSelect>
          <div>{{ date }}</div>
          <FormInputSlot :has-error="Boolean(errorFields?.content?.length)">
            <template #label>{{ $t('form.content') }}</template>
            <template #content>
              <VueDatePicker v-model="date" multi-calendars inline auto-apply :range="{ maxRange: 3, minMaxRawRange: true }"></VueDatePicker>
            </template>
          </FormInputSlot>
          <FormInputSlot :has-error="Boolean(errorFields?.content?.length)">
            <template #label>{{ $t('form.time') }}</template>
            <template #content>
              <VueDatePicker v-model="time" time-picker disable-time-range-validation range />

            </template>
          </FormInputSlot>
        </template>
      </FormGroup>
      <ImageView v-model="state.imageUrl" :has-error="[Boolean(errorFields?.imageUrl?.length)]" />

    </FormItem>
    <FormItem>
      <PublishView v-model="state.enable" :pass="pass" />
      <FormGroup :has-error="[Boolean(errorFields?.desc?.length), Boolean(errorFields?.videoEmbed?.length)]">
        <template #heading>
          {{ $t('form.content') }}
        </template>
        <template #content>
          <FormTextarea v-model="state.videoEmbed" :has-error="Boolean(errorFields?.videoEmbed?.length)"
            :placeholder="$t('form.place_holder.video_embed')">
            {{ $t('form.video_embed') }}
          </FormTextarea>
          <FormTextarea v-model="state.desc" :has-error="Boolean(errorFields?.desc?.length)"
            :placeholder="$t('form.place_holder.desc')">
            {{ $t('form.desc') }}
          </FormTextarea>
        </template>
      </FormGroup>
      <FormGroup :has-error="[false]">
        <template #heading>
          {{ $t('form.content') }}
        </template>
        <template #content>
          <FormSelectMultiple
            v-model="selectedTags"
            :list="tags"
            :has-error="false"
            :placeholder="$t('form.place_holder.multiple_select_tag')"
          >
            {{ $t('form.multiple_select_tag') }}
          </FormSelectMultiple>
        </template>
      </FormGroup>
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import PublishView from '@/modules/admin-template/views/PublishView.vue'
import ImageView from '@/modules/admin-template/views/ImageView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'
import FormSelect from '@/modules/admin-template/components/Form.select.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import FormTextarea from '@/modules/admin-template/components/Form.textarea.vue'
import FormInputSlot from '@/modules/admin-template/components/Form.input.slot.vue'
import FormSelectMultiple from '@/modules/admin-template/components/Form.select.multiple.vue'

import { state, rules, submit, selectedTags } from '../services/logictics/schedule'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'

import { get } from '@/core/services/helpers/request.helper'

import type { TCategory, TTag } from '../models/type'
import type { Ref } from 'vue'
const date = ref();

onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
})

const time = ref();
const { pass, errorFields } = useAsyncValidator(state, rules)

const categories: Ref<TCategory[]> = ref([])
const tags: Ref<TTag[]> = ref([])

onMounted(() => {
  get<TCategory[]>('/api/categories').then((response) => {
    categories.value = response?.data || []
  })
  get<TCategory[]>('/api/tags').then((response) => {
    tags.value = response?.data || []
  })
})
</script>
