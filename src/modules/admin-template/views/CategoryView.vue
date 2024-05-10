<template>
  <FormGroup :has-error="hasError">
    <template #heading>
      {{ $t('form.category') }}
    </template>
    <template #content>
      <FormSelect v-model="model.categoryId" :list="categories" :has-error="hasError[0]" :placeholder="$t('form.place_holder.category')">
        {{ $t('form.select_category') }} 
      </FormSelect>
    </template>
  </FormGroup>
</template>

<script setup lang="ts">
import { get } from '@/core/services/helpers/request.helper';
import type { TCategory } from '@/modules/admin-blog/models/type';
import type { ModelRef, Ref } from 'vue';
import { onMounted } from 'vue';
import { ref } from 'vue';
import FormGroup from '../components/Form.group.vue';
import FormSelect from '../components/Form.select.vue';

const model: ModelRef<any> = defineModel({ required: true })
const categories: Ref<TCategory[]> = ref([])
defineProps<{
  hasError: boolean[]
}>()

onMounted(() => {
  get<TCategory[]>("/api/categories").then(response => {
    categories.value = response?.data || []
  })
})
</script>
