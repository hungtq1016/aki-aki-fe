<template>
  <FormGroup :has-error="hasError">
    <template #heading>
      {{ $t('form.heading') }}
    </template>
    <template #content>
      <FormInput
        v-model="model.name"
        :has-error="hasError[0]"
        :placeholder="$t('form.place_holder.name')"
      >
        {{ $t('form.name') }}
      </FormInput>
      <FormInput
        v-model="model.address1"
        :has-error="hasError[1]"
        :placeholder="$t('form.place_holder.address1')"
      >
        {{ $t('form.address1') }}
      </FormInput>
      <FormInput
        v-model="model.address2"
        :placeholder="$t('form.place_holder.address2')"
      >
        {{ $t('form.address2') }}
      </FormInput>
      <FormInput
        v-model="model.phone1"
        :has-error="hasError[2]"
        :placeholder="$t('form.place_holder.phone1')"
      >
        {{ $t('form.phone1') }}
      </FormInput>
      <FormInput
        v-model="model.phone2"
        :placeholder="$t('form.place_holder.phone2')"
      >
        {{ $t('form.phone2') }}
      </FormInput>
    </template>
  </FormGroup>
</template>

<script setup lang="ts">
import type { ModelRef } from 'vue'
import FormGroup from '../components/Form.group.vue'
import FormInput from '../components/Form.input.vue'

const model: ModelRef<any> = defineModel({ required: true })

defineProps<{
  hasError: boolean[]
}>()
</script>

<style scoped></style>
