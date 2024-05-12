<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup :has-error="[Boolean(errorFields?.fullName?.length)]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInput v-model="state.email" :has-error="Boolean(errorFields?.email?.length)"
            type="email"
            :placeholder="$t('form.place_holder.email')">
            {{ $t('form.email') }}
          </FormInput>
          <FormInput v-model="state.fullName" :has-error="Boolean(errorFields?.fullName?.length)"
            :placeholder="$t('form.place_holder.full_name')">
            {{ $t('form.full_name') }}
          </FormInput>
          <FormInput v-model="state.phoneNumber" :has-error="Boolean(errorFields?.phoneNumber?.length)"
            :placeholder="$t('form.place_holder.phone_number')">
            {{ $t('form.phone_number') }}
          </FormInput>
          <FormTextarea v-model="state.address" :has-error="Boolean(errorFields?.address?.length)"
            :placeholder="$t('form.place_holder.address')">
            {{ $t('form.address') }}
          </FormTextarea>
          <FormInput v-model="state.password" :has-error="Boolean(errorFields?.password?.length)" 
            :disabled="true"
            :placeholder="$t('form.place_holder.password')">
            {{ $t('form.password') }}
          </FormInput>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="state.enable" :pass="pass" />
      <ImageView v-model="state.imageUrl" :has-error="[]"/>
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
import FormTextarea from '@/modules/admin-template/components/Form.textarea.vue'
import ImageView from '@/modules/admin-template/views/ImageView.vue'

const { pass, errorFields } = useAsyncValidator(state, rules)
</script>
