<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup :has-error="[Boolean(errorFields?.title?.length)]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInput v-model="state.title" :has-error="Boolean(errorFields?.title?.length)"
            :placeholder="$t('form.place_holder.title')">
            {{ $t('form.title') }}
          </FormInput>
          <FormInput v-model="state.slug" :disabled="true" :placeholder="$t('form.place_holder.slug')">
            {{ $t('form.slug') }}
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

import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'

import { state, submit, fetch } from '../services/logictics/category.edit'
import { rules } from '../services/data/category'

const { pass, errorFields } = useAsyncValidator(state, rules)

const route = useRoute()

onMounted(async () => {
  await fetch(String(route.params.id))
})

</script>
