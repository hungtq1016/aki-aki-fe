<template>
  <FormGroup :has-error="hasError">
    <template #heading>
      {{ $t('form.content') }}
    </template>
    <template #content>
      <FormTextarea
        v-model="model.addressEmbed"
        :has-error="hasError[0]"
        :placeholder="$t('form.place_holder.embed')"
      >
        {{ $t('form.embed') }}
      </FormTextarea>
    </template>
  </FormGroup>
</template>

<script setup lang="ts">
import type { ModelRef } from 'vue'
import FormGroup from '../components/Form.group.vue'
import FormTextarea from '../components/Form.textarea.vue'

const model: ModelRef<any> = defineModel({ required: true })

defineProps<{
  hasError: boolean[]
}>()
</script>
