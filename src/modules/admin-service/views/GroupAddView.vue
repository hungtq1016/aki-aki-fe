<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <LabelView v-model="state" :has-error="[Boolean(errorFields?.label?.length)]" />
    </FormItem>
    <FormItem>
      <PublishView v-model="state" :pass="pass" />
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import LabelView from '@/modules/admin-template/views/LabelView.vue'

import { state, rules, submit } from '../services/logictics/group'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'

const { pass, errorFields } = useAsyncValidator(state, rules)

</script>
