<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="update">
    <FormItem>
      <FormGroup :has-error="[Boolean(errorFields?.label?.length),Boolean(errorFields?.slug?.length),
      Boolean(errorFields?.type?.length),Boolean(errorFields?.tag?.length)]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInput
            v-model="stateUpdate.label"
            :has-error="Boolean(errorFields?.label?.length)"
            :placeholder="$t('form.place_holder.label')"
          >
            {{ $t('form.label') }}
          </FormInput>
          <FormInput
            v-model="stateUpdate.slug"
            :has-error="Boolean(errorFields?.slug?.length)"
            :placeholder="$t('form.place_holder.slug')"
          >
            {{ $t('form.slug') }}
          </FormInput>
          <FormSelect
            v-model="stateUpdate.type"
            :has-error="Boolean(errorFields?.type?.length)"
            :list="type"
            :placeholder="$t('form.place_holder.type')"
          >{{ $t('form.type') }}
          </FormSelect>
          <FormSelect
            v-model="stateUpdate.tag"
            :has-error="Boolean(errorFields?.tag?.length)"
            :list="elementTags"
            :placeholder="$t('form.place_holder.tag_element')"
          >
            {{ $t('form.tag_element') }}
          </FormSelect>
        </template>
      </FormGroup>
      <FormGroup :has-error="[Boolean(errorFields?.groupId?.length)]">
        <template #heading>
          {{ $t('form.content') }}
        </template>
        <template #content>
          <FormSelect
            v-model="stateUpdate.groupId"
            :has-error="Boolean(errorFields?.groupId?.length)"
            :list="urls"
            :placeholder="$t('form.place_holder.groupId')"
          >
            {{ $t('form.groupId') }}
          </FormSelect>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="stateUpdate.enable" :pass="pass" />
      <ImageView v-model="stateUpdate.imageUrl" :has-error="[Boolean(errorFields?.imageUrl?.length)]" />
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'

import { rules, elementTags, type } from '../services/logictics/url'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'
import FormSelect from '@/modules/admin-template/components/Form.select.vue'
import type { TGroupUrlRequest } from '../models/type'
import ImageView from '@/modules/admin-template/views/ImageView.vue'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { get, put } from '@/core/services/helpers/fetcher.helper'
import type { TUrlResponse } from '../models/type'

const route = useRoute()
const stateUpdate: Ref<TUrlResponse> = ref({} as TUrlResponse)
  const { pass, errorFields } = useAsyncValidator(stateUpdate, rules)

const fetchUrl = async (): Promise<void> => {
  get<TUrlResponse>('/api/urls/' + route.params.id).then((response) => {
    if (response?.data) {
      stateUpdate.value = response.data
    }
  })
}
const update = async () => {
  const data = await put<any, any>('/api/urls/' + stateUpdate.value.id, stateUpdate.value)
  if (data?.data) {
    successNotification(data.message)
  }
}

onMounted(async () => {
  await fetchUrl()
})
const urls: Ref<TGroupUrlRequest[]> = ref([])

onMounted(() => {
  get<TGroupUrlRequest[]>('/api/urls').then((response) => {
    urls.value = response?.data || []
  })
})
</script>
