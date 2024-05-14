<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="update">
    <FormItem>
      <!-- <HeadingView v-model="state" :has-error="[Boolean(errorFields?.title?.length)]" /> -->
      <FormGroup :has-error="[
        Boolean(errorFields?.title?.length),
        Boolean(errorFields?.categoryId?.length),
        Boolean(errorFields?.content?.length)
      ]">
        <template #heading>
          {{ $t('form.heading') }}
        </template>
        <template #content>
          <FormInput v-model="stateUpdate.title" :has-error="Boolean(errorFields?.title?.length)"
            :placeholder="$t('form.place_holder.title')">
            {{ $t('form.title') }}
          </FormInput>
          <FormInput v-model="stateUpdate.slug" :disabled="true" :placeholder="$t('form.place_holder.slug')">
            {{ $t('form.slug') }}
          </FormInput>
          <FormSelect v-model="stateUpdate.groupId" :list="groups" :has-error="Boolean(errorFields?.groupId?.length)"
            :placeholder="$t('form.place_holder.group_service')">
            {{ $t('form.group_service') }}
          </FormSelect>
          <FormTextarea v-model="stateUpdate.desc" :has-error="Boolean(errorFields?.desc?.length)"
            :placeholder="$t('form.place_holder.desc')">
            {{ $t('form.desc') }}
          </FormTextarea>
        </template>
      </FormGroup>
      <ImageView v-model="stateUpdate.imageUrl" :has-error="[Boolean(errorFields?.imageUrl?.length)]" />
    </FormItem>
    <FormItem>
      <PublishView v-model="stateUpdate.enable" :pass="pass" />
      <FormGroup :has-error="[
        Boolean(errorFields?.videoEmbed?.length),
        Boolean(errorFields?.content?.length)
      ]">
        <template #heading>
          {{ $t('form.content') }}
        </template>
        <template #content>
          <FormTextarea v-model="stateUpdate.videoEmbed" :has-error="Boolean(errorFields?.videoEmbed?.length)"
            :placeholder="$t('form.place_holder.video_embed')">
            {{ $t('form.video_embed') }}
          </FormTextarea>
          <FormInputSlot :has-error="Boolean(errorFields?.content?.length)">
            <template #label>{{ $t('form.content') }}</template>
            <template #content>
              <ckeditor :editor="editor" v-model="stateUpdate.content" :config="editorConfig"></ckeditor>
            </template>
          </FormInputSlot>
        </template>
      </FormGroup>
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import PublishView from '@/modules/admin-template/views/PublishView.vue'
import ImageView from '@/modules/admin-template/views/ImageView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'

import { rules } from '../services/logictics/service'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import FormInput from '@/modules/admin-template/components/Form.input.vue'
import FormSelect from '@/modules/admin-template/components/Form.select.vue'
import type { TGroupService } from '../models/type'
import FormTextarea from '@/modules/admin-template/components/Form.textarea.vue'
import FormInputSlot from '@/modules/admin-template/components/Form.input.slot.vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { get, put } from '@/core/services/helpers/fetcher.helper'
import type { TServiceResponse } from '../models/type'

const route = useRoute()
const stateUpdate: Ref<TServiceResponse> = ref({} as TServiceResponse)
const { pass, errorFields } = useAsyncValidator(stateUpdate, rules)

const fetchService = async (): Promise<void> => {
  get<TServiceResponse>('/api/services/' + route.params.id).then((response) => {
    if (response?.data) {
      stateUpdate.value = response.data
    }
  })
}
const update = async () => {
  const data = await put<any, any>('/api/services/' + stateUpdate.value.id, stateUpdate.value)
  if (data?.data) {
    successNotification(data.message)
  }
}

onMounted(async () => {
  await fetchService()
})
const editor: Ref<typeof ClassicEditor> = ref(ClassicEditor)
const editorConfig: Ref<any> = ref()

const groups: Ref<TGroupService[]> = ref([])

onMounted(() => {
  get<TGroupService[]>('/api/groupservices').then((response) => {
    groups.value = response?.data || []
  })
})
</script>
