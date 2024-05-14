<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="update">
    <FormItem>
      <FormGroup :has-error="[Boolean(errorFields?.title?.length)]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInput v-model="stateUpdate.title" :has-error="Boolean(errorFields?.title?.length)"
            :placeholder="$t('form.place_holder.title')">
            {{ $t('form.title') }}
          </FormInput>
          <FormInput v-model="stateUpdate.slug" :disabled="true" :placeholder="$t('form.place_holder.slug')">
            {{ $t('form.slug') }}
          </FormInput>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="stateUpdate.enable" :pass="pass" />
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import { rules } from '../services/logictics/category'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'

import { get } from '@/core/services/helpers/request.helper'

import type { TCategoryResponse, TCategory } from '../models/type'
import type { Ref } from 'vue'
import { useRoute } from 'vue-router'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { put } from '@/core/services/helpers/fetcher.helper'
import { slugify } from '@/core/services/utils/util.string'

const route = useRoute()
const stateUpdate: Ref<TCategory> = ref({} as TCategory)

const { pass, errorFields } = useAsyncValidator(stateUpdate, rules)

const fetchCategory = async (): Promise<void> => {
  get<TCategoryResponse>('/api/categories/' + route.params.id).then((response) => {
    if (response?.data) {
      stateUpdate.value = response.data
    }
  })
}
const update = async () => {
  const data = await put<any, any>('/api/categories/' + stateUpdate.value.id, stateUpdate.value)
  if (data?.data) {
    successNotification(data.message)
  }
}

onMounted(async () => {
  await fetchCategory()
})
watch(stateUpdate,(newValue)=>{
  stateUpdate.value.slug = slugify(newValue.title)
},{deep:true})
</script>
