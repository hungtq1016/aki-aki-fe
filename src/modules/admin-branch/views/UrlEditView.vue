<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup :has-error="[Boolean(errorFields?.label?.length),Boolean(errorFields?.slug?.length),
      Boolean(errorFields?.type?.length),Boolean(errorFields?.tag?.length)]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInput
            v-model="state.label"
            :has-error="Boolean(errorFields?.label?.length)"
            :placeholder="$t('form.place_holder.label')"
          >
            {{ $t('form.label') }}
          </FormInput>
          <FormInput
            v-model="state.slug"
            :has-error="Boolean(errorFields?.slug?.length)"
            :placeholder="$t('form.place_holder.slug')"
          >
            {{ $t('form.slug') }}
          </FormInput>
          <FormSelect
            v-model="state.type"
            :has-error="Boolean(errorFields?.type?.length)"
            :list="types"
            :placeholder="$t('form.place_holder.type')"
          >{{ $t('form.type') }}
          </FormSelect>
          <FormSelect
            v-model="state.tag"
            :has-error="Boolean(errorFields?.tag?.length)"
            :list="tags"
            :placeholder="$t('form.place_holder.tag_element')"
          >
            {{ $t('form.tag_element') }}
          </FormSelect>
        </template>
      </FormGroup>
      <FormGroup :has-error="[Boolean(errorFields?.groupId?.length)]">
        <template #heading>
          {{ $t('form.content') }}
        </template>
        <template #content>
          <FormSelect
            v-model="state.groupId"
            :has-error="Boolean(errorFields?.groupId?.length)"
            :list="groupurls"
            :placeholder="$t('form.place_holder.groupId')"
          >
            {{ $t('form.groupId') }}
          </FormSelect>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="state.status" :pass="pass" />
      <ImageView v-model="state.imageUrl" :has-error="[Boolean(errorFields?.imageUrl?.length)]" />
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'
import FormSelect from '@/modules/admin-template/components/Form.select.vue'
import ImageView from '@/modules/admin-template/views/ImageView.vue'

import { rules, tags, types } from '../services/data/url'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'
import { state, fetch, submit } from '../services/logictics/url.edit'
import { get } from '@/core/services/helpers/fetcher.helper'
import { groupurls } from '../services/logictics/url.add'
import type { TGroupUrlRequest } from '../models/type'

const route = useRoute()

const { pass, errorFields } = useAsyncValidator(state, rules)

onMounted(async () => {
  await fetch(String(route.params.id))
  await get<TGroupUrlRequest[]>('/api/groupurls').then((response) => {
    groupurls.value = response?.data || []
  })
})

</script>
