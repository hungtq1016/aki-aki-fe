<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup :has-error="[Boolean(errorFields?.fullName?.length)]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInput v-model="state.fullName" :has-error="Boolean(errorFields?.fullName?.length)" :placeholder="$t('form.place_holder.full_name')">
            {{ $t('form.fullName') }}
          </FormInput>
          <FormInput v-model="state.phoneNumber" :has-error="Boolean(errorFields?.phoneNumber?.length)" :placeholder="$t('form.place_holder.phone_number')">
            {{ $t('form.phoneNumber') }}
          </FormInput>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="state" :pass="pass" />
      <FormGroup :has-error="[Boolean(errorFields?.phoneNumber?.length)]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          
        </template>
      </FormGroup>
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import PublishView from '@/modules/admin-template/views/PublishView.vue'

import { state, rules, submit } from '../services/logictics/user'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'
import FormInput from '@/modules/admin-template/components/Form.input.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'

const { pass, errorFields } = useAsyncValidator(state, rules)
</script>
