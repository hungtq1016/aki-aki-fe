<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup
        :has-error="[Boolean(errorFields?.name?.length), Boolean(errorFields?.note?.length)]"
      >
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInput
            v-model="state.name"
            :has-error="Boolean(errorFields?.name?.length)"
            :placeholder="$t('form.place_holder.name')"
          >
            {{ $t('form.name') }}
          </FormInput>
          <FormInput
            v-model="state.note"
            :has-error="Boolean(errorFields?.note?.length)"
            :placeholder="$t('form.place_holder.note')"
          >
            {{ $t('form.note') }}
          </FormInput>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="state.enable" :pass="pass" />
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'

import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'

import { state, submit, fetch } from '../services/logictics/role.edit'
import { rules } from '../services/data/role'

const { pass, errorFields } = useAsyncValidator(state, rules)

const route = useRoute()

onMounted(async()=>{
  await fetch(String(route.params.id))
})
</script>
