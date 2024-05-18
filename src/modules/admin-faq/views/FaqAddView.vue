<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup :has-error="[Boolean(errorFields?.question?.length),Boolean(errorFields?.answer?.length)]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInput
            v-model="state.question"
            :has-error="Boolean(errorFields?.question?.length)"
            :placeholder="$t('form.place_holder.question')"
          >
            {{ $t('form.question') }}
          </FormInput>
          <FormTextarea
            v-model="state.answer"
            :has-error="Boolean(errorFields?.answer?.length)"
            :placeholder="$t('form.place_holder.answer')"
          >
            {{ $t('form.answer') }}
          </FormTextarea>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="state.enable" :pass="pass" />
      <FormGroup :has-error="[Boolean(errorFields?.src?.length)]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInput
            v-model="state.src"
            :has-error="Boolean(errorFields?.src?.length)"
            :placeholder="$t('form.place_holder.src')"
          >
            {{ $t('form.src') }}
          </FormInput>
        </template>
      </FormGroup>
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'
import FormTextarea from '@/modules/admin-template/components/Form.textarea.vue'

import { state, submit } from '../services/logictics/faq.add'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'
import { rules } from '../services/data/faq'

const { pass, errorFields } = useAsyncValidator(state, rules)
</script>
