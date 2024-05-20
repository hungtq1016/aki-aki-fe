<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup :has-error="[Boolean(errorFields?.label?.length)]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInput v-model="state.label" :has-error="Boolean(errorFields?.label?.length)"
            :placeholder="$t('form.place_holder.label')">
            {{ $t('form.label') }}
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
import { onMounted} from 'vue'
import { useRoute } from 'vue-router'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'

import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'

import { state, fetch, submit } from '../services/logictics/btype.edit'
import { rules } from '../services/data/btype'

const route = useRoute()
const { pass, errorFields } = useAsyncValidator(state, rules)

onMounted(async () => {
  await fetch(String(route.params.id))
})

</script>
