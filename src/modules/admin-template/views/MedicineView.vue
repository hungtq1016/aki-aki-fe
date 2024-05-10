<template>
  <FormGroup :has-error="hasError">
    <template #heading>
      {{ $t('form.content') }}
    </template>
    <template #content>
      <FormTextarea
        v-model="model.desc"
        :has-error="hasError[0]"
        :placeholder="$t('form.place_holder.desc')"
      >
        {{ $t('form.desc') }}
      </FormTextarea>
      <FormInput
        v-model="model.brand"
        :has-error="hasError[1]"
        :placeholder="$t('form.place_holder.brand')"
      >
        {{ $t('form.brand') }}
      </FormInput>
    </template>
  </FormGroup>
</template>

<script setup lang="ts">
import type { ModelRef } from 'vue'
import FormGroup from '../components/Form.group.vue'
import FormTextarea from '../components/Form.textarea.vue'
import FormInput from '../components/Form.input.vue'

const model: ModelRef<any> = defineModel({ required: true })

defineProps<{
  hasError: boolean[]
}>()
</script>
