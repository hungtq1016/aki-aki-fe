<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup
        :has-error="[Boolean(errorFields?.type?.length), Boolean(errorFields?.value?.length)]"
      >
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInput
            v-model="state.type"
            :has-error="Boolean(errorFields?.type?.length)"
            :placeholder="$t('form.place_holder.type')"
          >
            {{ $t('form.type') }}
          </FormInput>
          <FormInput
            v-model="state.label"
            :has-error="Boolean(errorFields?.label?.length)"
            :placeholder="$t('form.place_holder.label')"
          >
            {{ $t('form.label') }}
          </FormInput>
          <FormInput
            v-model="state.value"
            :has-error="Boolean(errorFields?.value?.length)"
            :placeholder="$t('form.place_holder.value')"
          >
            {{ $t('form.value') }}
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
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'

import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'

import { state, submit, fetch } from '../services/logictics/permission.edit'
import { rules } from '../services/data/permission'

const { pass, errorFields } = useAsyncValidator(state, rules)

const route = useRoute()

onMounted(async()=>{
  await fetch(String(route.params.id))
})

</script>
