<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <HeadingView v-model="state" :has-error="[Boolean(errorFields?.title?.length)]" />
    </FormItem>
    <FormItem>
      <PublishView v-model="state" :pass="pass" />
      <MedicineView
        v-model="state"
        :has-error="[Boolean(errorFields?.desc?.length), Boolean(errorFields?.brand?.length)]"
      />
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import PublishView from '@/modules/admin-template/views/PublishView.vue'
import HeadingView from '@/modules/admin-template/views/HeadingView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'

import { state, rules, submit } from '../services/logictics/medicine'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'
import MedicineView from '@/modules/admin-template/views/MedicineView.vue'

const { pass, errorFields } = useAsyncValidator(state, rules)
</script>
