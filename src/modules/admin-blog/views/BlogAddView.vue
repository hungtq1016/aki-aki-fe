<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <HeadingView v-model="state" :has-error="[Boolean(errorFields?.title?.length)]" />
      <CategoryView v-model="state" :has-error="[Boolean(errorFields?.categoryId?.length)]" />
      <ImageView v-model="state" :has-error="[Boolean(errorFields?.imageUrl?.length)]" />
    </FormItem>
    <FormItem>
      <PublishView v-model="state" :pass="pass" />
      <DescView
        v-model="state"
        :has-error="[Boolean(errorFields?.desc?.length), Boolean(errorFields?.content?.length)]"
      />
      <TagView v-model="selectedTags" :has-error="[false]" />
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import PublishView from '@/modules/admin-template/views/PublishView.vue'
import HeadingView from '@/modules/admin-template/views/HeadingView.vue'
import ImageView from '@/modules/admin-template/views/ImageView.vue'
import CategoryView from '@/modules/admin-template/views/CategoryView.vue'
import TagView from '@/modules/admin-template/views/TagView.vue'
import DescView from '@/modules/admin-template/views/DescView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'

import { state, rules, submit, selectedTags } from '../services/logictics/blog'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'

const { pass, errorFields } = useAsyncValidator(state, rules)
</script>
