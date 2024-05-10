<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <HeadingView v-model="state" :has-error="[Boolean(errorFields?.title?.length)]" />
    </FormItem>
    <FormItem>
      <PublishView v-model="state" :pass="pass" />
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import HeadingView from '@/modules/admin-template/views/HeadingView.vue'
import PublishView from '@/modules/admin-template/views/PublishView.vue'

import { state, rules, submit } from '../services/logictics/tag'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'
const { pass, errorFields } = useAsyncValidator(state, rules)
</script>
