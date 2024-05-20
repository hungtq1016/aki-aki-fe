<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup :has-error="[Boolean(errorFields?.label?.length),Boolean(errorFields?.price?.length)]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInput
            v-model="state.label"
            :has-error="Boolean(errorFields?.label?.length)"
            :placeholder="$t('form.place_holder.label')"
          >
            {{ $t('form.label') }}
          </FormInput>
          <FormInput
            v-model="state.price"
            :has-error="Boolean(errorFields?.price?.length)"
            type="number"
            :placeholder="$t('form.place_holder.price')"
          >
            {{ $t('form.price') }}
          </FormInput>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="state.status" :pass="pass" />
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'

import { state, submit } from '../services/logictics/serviceprice.add'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'
import { rules } from '../services/data/serviceprice'

const { pass, errorFields } = useAsyncValidator(state, rules)
</script>
