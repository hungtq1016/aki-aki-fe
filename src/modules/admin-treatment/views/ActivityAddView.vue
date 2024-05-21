<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup :has-error="[Boolean(errorFields?.title?.length),Boolean(errorFields?.description?.length)]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInput
            v-model="state.title"
            :has-error="Boolean(errorFields?.title?.length)"
            :placeholder="$t('form.place_holder.title')"
          >
            {{ $t('form.title') }}
          </FormInput>
          <FormTextarea
              v-model="state.description"
              :has-error="Boolean(errorFields?.description?.length)"
              :placeholder="$t('form.place_holder.desc')"
            >
            {{ $t('form.desc') }}
          </FormTextarea>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="state.status" :pass="pass" />
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'

import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'
import FormTextarea from '@/modules/admin-template/components/Form.textarea.vue'

import { state, submit } from '../services/logictics/activity.add'
import { rules } from '../services/data/activity'

const { pass, errorFields } = useAsyncValidator(state, rules)
</script>
