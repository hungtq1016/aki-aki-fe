<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <BranchView v-model="state" :has-error="[Boolean(errorFields?.name?.length),Boolean(errorFields?.address1?.length),Boolean(errorFields?.phone1?.length)]" />
    </FormItem>
    <FormItem>
      <PublishView v-model="state" :pass="pass" />
      <TypeView v-model="state.typeId" :has-error="[Boolean(errorFields?.typeId?.length)]" />
      <AddressEmbedView v-model="state"
        :has-error="[Boolean(errorFields?.addressEmbed?.length)]" />
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'

import { state, rules, submit } from '../services/logictics/branch'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'
import BranchView from '@/modules/admin-template/views/BranchView.vue'
import AddressEmbedView from '@/modules/admin-template/views/AddressEmbedView.vue'
import TypeView from '@/modules/admin-template/views/TypeView.vue'

const { pass, errorFields } = useAsyncValidator(state, rules)

</script>
