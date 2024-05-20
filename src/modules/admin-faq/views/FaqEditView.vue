<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup :has-error="[Boolean(errorFields?.title?.length)]">
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
      <PublishView v-model="state.status" :pass="pass" />
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
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'

import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'

import { state, submit, fetch } from '../services/logictics/faq.edit'
import { rules } from '../services/data/faq'

const { pass, errorFields } = useAsyncValidator(state, rules)

const route = useRoute()

onMounted(async () => {
  await fetch(String(route.params.id))
})

</script>
