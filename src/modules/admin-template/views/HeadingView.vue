<template>
  <FormGroup :has-error="hasError">
    <template #heading>
      {{ $t('form.heading') }}
    </template>
    <template #content>
      <FormInput v-model="model.title" :has-error="hasError[0]" :placeholder="$t('form.place_holder.title')">
        {{ $t('form.title') }}
      </FormInput>
      <FormInput v-model="model.slug" :has-error="hasError[0]" :disabled="true" :placeholder="$t('form.place_holder.slug')">
        {{ $t('form.slug') }}
      </FormInput>
    </template>
  </FormGroup>
</template>

<script setup lang="ts">
import type { ModelRef } from 'vue';
import FormGroup from '../components/Form.group.vue';
import FormInput from '../components/Form.input.vue';

const model: ModelRef<any> = defineModel({ required: true })

defineProps<{
  hasError: boolean[]
}>()
</script>

<style scoped></style>