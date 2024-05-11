<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup
        :has-error="[Boolean(errorFields?.name?.length), Boolean(errorFields?.address1?.length), Boolean(errorFields?.phone1?.length)]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInput v-model="state.name" :has-error="Boolean(errorFields?.name?.length)"
            :placeholder="$t('form.place_holder.name')">
            {{ $t('form.name') }}
          </FormInput>
          <FormInput v-model="state.address1" :has-error="Boolean(errorFields?.address1?.length)"
            :placeholder="$t('form.place_holder.address1')">
            {{ $t('form.address1') }}
          </FormInput>
          <FormInput v-model="state.address2" :placeholder="$t('form.place_holder.address2')">
            {{ $t('form.address2') }}
          </FormInput>
          <FormInput v-model="state.phone1" :has-error="Boolean(errorFields?.phone1?.length)"
            :placeholder="$t('form.place_holder.phone1')">
            {{ $t('form.phone1') }}
          </FormInput>
          <FormInput v-model="state.phone2" :placeholder="$t('form.place_holder.phone2')">
            {{ $t('form.phone2') }}
          </FormInput>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="state" :pass="pass" />
      <FormGroup :has-error="[Boolean(errorFields?.typeId?.length)]">
        <template #heading>
          {{ $t('form.branchtype') }}
        </template>
        <template #content>
          <FormSelect v-model="state.typeId" :list="branchtypes" :has-error="Boolean(errorFields?.typeId?.length)"
            :placeholder="$t('form.place_holder.branchtype')">
            {{ $t('form.select_branchtype') }}
          </FormSelect>
        </template>
      </FormGroup>
      <AddressEmbedView v-model="state" :has-error="[Boolean(errorFields?.addressEmbed?.length)]" />
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'

import { state, rules, submit } from '../services/logictics/branch'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'
import AddressEmbedView from '@/modules/admin-template/views/AddressEmbedView.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import { get } from '@/core/services/helpers/request.helper'
import type { TBranchType } from '@/modules/admin-branch/models/type'
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import FormSelect from '@/modules/admin-template/components/Form.select.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'

const { pass, errorFields } = useAsyncValidator(state, rules)
const branchtypes: Ref<TBranchType[]> = ref([])

onMounted(() => {
  get<TBranchType[]>('/api/branchtypes').then((response) => {
    branchtypes.value = response?.data || []
  })
})
</script>
