<template>
  <FormGroup :has-error="hasError">
    <template #heading>
      {{ $t('form.content') }}
    </template>
    <template #content>
      <FormSelectMultiple
        v-model="model"
        :list="tags"
        :has-error="hasError[0]"
        :placeholder="$t('form.place_holder.multiple_select_tag')"
      >
        {{ $t('form.multiple_select_tag') }}
      </FormSelectMultiple>
    </template>
  </FormGroup>
</template>

<script setup lang="ts">
import { get } from '@/core/services/helpers/request.helper'
import type { TTag } from '@/modules/admin-blog/models/type'
import { onMounted, ref } from 'vue'
import type { ModelRef, Ref } from 'vue'
import FormGroup from '../components/Form.group.vue'
import FormSelectMultiple from '../components/Form.select.multiple.vue'

const model: ModelRef<any> = defineModel({ required: true })
const tags: Ref<TTag[]> = ref([])

defineProps<{
  hasError: boolean[]
}>()

onMounted(() => {
  get<TTag[]>('/api/tags').then((response) => {
    tags.value = response?.data || []
  })
})
</script>
