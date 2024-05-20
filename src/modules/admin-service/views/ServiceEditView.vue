<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup :has-error="[
        Boolean(errorFields?.title?.length),
        Boolean(errorFields?.categoryId?.length),
        Boolean(errorFields?.content?.length)
      ]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInput v-model="state.title" :has-error="Boolean(errorFields?.title?.length)"
            :placeholder="$t('form.place_holder.title')">
            {{ $t('form.title') }}
          </FormInput>
          <FormInput v-model="state.slug" :disabled="true" :placeholder="$t('form.place_holder.slug')">
            {{ $t('form.slug') }}
          </FormInput>
          <FormSelect v-model="state.groupId" :list="groups" :has-error="Boolean(errorFields?.groupId?.length)"
            :placeholder="$t('form.place_holder.group_service')">
            {{ $t('form.group_service') }}
          </FormSelect>
          <FormTextarea v-model="state.desc" :has-error="Boolean(errorFields?.desc?.length)"
            :placeholder="$t('form.place_holder.desc')">
            {{ $t('form.desc') }}
          </FormTextarea>
        </template>
      </FormGroup>
      <ImageView v-model="state.imageUrl" :has-error="[Boolean(errorFields?.imageUrl?.length)]" />
    </FormItem>
    <FormItem>
      <PublishView v-model="state.status" :pass="pass" />
      <FormGroup :has-error="[
        Boolean(errorFields?.videoEmbed?.length),
        Boolean(errorFields?.content?.length)
      ]">
        <template #heading>
          {{ $t('form.content') }}
        </template>
        <template #content>
          <FormTextarea v-model="state.videoEmbed" :has-error="Boolean(errorFields?.videoEmbed?.length)"
            :placeholder="$t('form.place_holder.video_embed')">
            {{ $t('form.video_embed') }}
          </FormTextarea>
          <FormInputSlot :has-error="Boolean(errorFields?.content?.length)">
            <template #label>{{ $t('form.content') }}</template>
            <template #content>
              <ckeditor :editor="editor" v-model="state.content" :config="editorConfig"></ckeditor>
            </template>
          </FormInputSlot>
        </template>
      </FormGroup>
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import PublishView from '@/modules/admin-template/views/PublishView.vue'
import ImageView from '@/modules/admin-template/views/ImageView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'
import FormSelect from '@/modules/admin-template/components/Form.select.vue'
import FormTextarea from '@/modules/admin-template/components/Form.textarea.vue'
import FormInputSlot from '@/modules/admin-template/components/Form.input.slot.vue'

import { get } from '@/core/services/helpers/request.helper'
import { editor, editorConfig, groups } from '../services/logictics/service.edit'
import { state, submit, fetch } from '../services/logictics/service.edit'
import { rules } from '../services/data/service'

import type { TGroupService } from '../models/type'

const { pass, errorFields } = useAsyncValidator(state, rules)

const route = useRoute()

onMounted(async() => {
  await fetch(String(route.params.id))

  await get<TGroupService[]>('/api/groupservices').then((response) => {
    groups.value = response?.data || []
  })
})

</script>
