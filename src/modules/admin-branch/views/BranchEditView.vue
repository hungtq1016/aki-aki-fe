<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="update">
    <FormItem>
      <FormGroup
        :has-error="[
          Boolean(errorFields?.name?.length),
          Boolean(errorFields?.address1?.length),
          Boolean(errorFields?.phone1?.length)
        ]"
      >
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInput
            v-model="stateUpdate.name"
            :has-error="Boolean(errorFields?.name?.length)"
            :placeholder="$t('form.place_holder.name')"
          >
            {{ $t('form.name') }}
          </FormInput>
          <FormInput
            v-model="stateUpdate.address1"
            :has-error="Boolean(errorFields?.address1?.length)"
            :placeholder="$t('form.place_holder.address1')"
          >
            {{ $t('form.address1') }}
          </FormInput>
          <FormInput v-model="stateUpdate.address2" :placeholder="$t('form.place_holder.address2')">
            {{ $t('form.address2') }}
          </FormInput>
          <FormInput
            v-model="stateUpdate.phone1"
            :has-error="Boolean(errorFields?.phone1?.length)"
            :placeholder="$t('form.place_holder.phone1')"
          >
            {{ $t('form.phone1') }}
          </FormInput>
          <FormInput v-model="stateUpdate.phone2" :placeholder="$t('form.place_holder.phone2')">
            {{ $t('form.phone2') }}
          </FormInput>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="stateUpdate.enable" :pass="pass" />
      <FormGroup :has-error="[Boolean(errorFields?.typeId?.length)]">
        <template #heading>
          {{ $t('form.branchtype') }}
        </template>
        <template #content>
          <FormSelect
            v-model="stateUpdate.typeId"
            :list="branchtypes"
            :has-error="Boolean(errorFields?.typeId?.length)"
            :placeholder="$t('form.place_holder.branchtype')"
          >
            {{ $t('form.select_branchtype') }}
          </FormSelect>
          <FormTextarea
            v-model="stateUpdate.addressEmbed"
            :has-error="Boolean(errorFields?.addressEmbed?.length)"
            :placeholder="$t('form.place_holder.address_embed')"
          >
            {{ $t('form.embed') }}
          </FormTextarea>
        </template>
      </FormGroup>
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
import { rules } from '../services/logictics/branch'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'

import { get } from '@/core/services/helpers/request.helper'

import type { TBranchResponse, TBranchType } from '../models/type'
import type { Ref } from 'vue'
import { useRoute } from 'vue-router'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { put } from '@/core/services/helpers/fetcher.helper'
import FormSelect from '@/modules/admin-template/components/Form.select.vue'
import FormTextarea from '@/modules/admin-template/components/Form.textarea.vue'

const route = useRoute()
const stateUpdate: Ref<TBranchResponse> = ref({} as TBranchResponse)

const { pass, errorFields } = useAsyncValidator(stateUpdate, rules)

const fetchBranch = async (): Promise<void> => {
  get<TBranchResponse>('/api/branches/' + route.params.id).then((response) => {
    if (response?.data) {
      stateUpdate.value = response.data
    }
  })
}
const update = async () => {
  const data = await put<any, any>('/api/branches/' + stateUpdate.value.id, stateUpdate.value)
  if (data?.data) {
    successNotification(data.message)
  }
}

onMounted(async () => {
  await fetchBranch()
})

const branchtypes: Ref<TBranchType[]> = ref([])

onMounted(() => {
  get<TBranchType[]>('/api/branchtypes').then((response) => {
    branchtypes.value = response?.data || []
  })
})
</script>
