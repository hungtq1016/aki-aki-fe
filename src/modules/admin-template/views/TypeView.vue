<template>
  <FormGroup :has-error="hasError">
    <template #heading>
      {{ $t('form.branchtype') }}
    </template>
    <template #content>
      <FormSelect
        v-model="model"
        :list="branchtypes"
        :has-error="hasError[0]"
        :placeholder="$t('form.place_holder.branchtype')"
      >
        {{ $t('form.select_branchtype') }}
      </FormSelect>
    </template>
  </FormGroup>
</template>

<script setup lang="ts">
import { get } from '@/core/services/helpers/request.helper'
import type { TBranchType } from '@/modules/admin-branch/models/type'
import type { ModelRef, Ref } from 'vue'
import { onMounted } from 'vue'
import { ref } from 'vue'
import FormGroup from '../components/Form.group.vue'
import FormSelect from '../components/Form.select.vue'

const model: ModelRef<any> = defineModel({ required: true })
const branchtypes: Ref<TBranchType[]> = ref([])
defineProps<{
  hasError: boolean[]
}>()

onMounted(() => {
  get<TBranchType[]>('/api/branchtypes').then((response) => {
    branchtypes.value = response?.data || []
  })
})
</script>
