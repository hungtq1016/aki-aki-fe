<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <HeadingView v-model="state" :has-error="[Boolean(errorFields?.title?.length)]" />
      <GroupView v-model="state" :has-error="[Boolean(errorFields?.groupId?.length)]" />
      <ImageView v-model="state" :has-error="[Boolean(errorFields?.imageUrl?.length)]" />
    </FormItem>
    <FormItem>
      <PublishView v-model="state" :pass="pass" />
      <VideoEmbedView
        v-model="state"
        :has-error="[Boolean(errorFields?.videoEmbed?.length), Boolean(errorFields?.content?.length)]"
      />
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import PublishView from '@/modules/admin-template/views/PublishView.vue'
import HeadingView from '@/modules/admin-template/views/HeadingView.vue'
import ImageView from '@/modules/admin-template/views/ImageView.vue'
import VideoEmbedView from '@/modules/admin-template/views/VideoEmbedView.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import FormLayout from '@/modules/admin-template/components/Form.layout.vue'

import { state, rules, submit } from '../services/logictics/service'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'
import GroupView from '@/modules/admin-template/views/GroupView.vue'

const { pass, errorFields } = useAsyncValidator(state, rules)
</script>
