<template>
  <FormGroup :has-error="hasError">
    <template #heading>
      {{ $t('form.group_service') }}
    </template>
    <template #content>
      <FormSelect
        v-model="model.groupId"
        :list="groups"
        :has-error="hasError[0]"
        :placeholder="$t('form.place_holder.group_service')"
      >
        {{ $t('form.group_service') }}
      </FormSelect>
    </template>
  </FormGroup>
</template>

<script setup lang="ts">
import { get } from '@/core/services/helpers/request.helper'
import type { TGroupService } from '@/modules/admin-service/models/type'
import type { ModelRef, Ref } from 'vue'
import { onMounted } from 'vue'
import { ref } from 'vue'
import FormGroup from '../components/Form.group.vue'
import FormSelect from '../components/Form.select.vue'

const model: ModelRef<any> = defineModel({ required: true })
const groups: Ref<TGroupService[]> = ref([])
defineProps<{
  hasError: boolean[]
}>()

onMounted(() => {
  get<TGroupService[]>('/api/groupservices').then((response) => {
    groups.value = response?.data || []
  })
})
</script>
