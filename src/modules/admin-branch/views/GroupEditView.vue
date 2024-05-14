<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="update">
    <FormItem>
      <FormGroup :has-error="[Boolean(errorFields?.label?.length)]">
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
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="stateUpdate.enable" :pass="pass" />
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'

import { rules } from '../services/logictics/group'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref, type Ref } from 'vue'
import type { TGroupUrlResponse } from '../models/type'
import { get } from '@/core/services/helpers/request.helper'
import { put } from '@/core/services/helpers/fetcher.helper'
import { successNotification } from '@/core/services/helpers/alert.helper'

const route = useRoute()
const stateUpdate: Ref<TGroupUrlResponse> = ref({} as TGroupUrlResponse)
  const { pass, errorFields } = useAsyncValidator(stateUpdate, rules)

const fetchGroups = async (): Promise<void> => {
  get<TGroupUrlResponse>('/api/groupurls/' + route.params.id).then((response) => {
    if (response?.data) {
      stateUpdate.value = response.data
    }
  })
}
const update = async () => {
  const data = await put<any, any>('/api/groupurls/' + stateUpdate.value.id, stateUpdate.value)
  if (data?.data) {
    successNotification(data.message)
  }
}

onMounted(async () => {
  await fetchGroups()
})
</script>
