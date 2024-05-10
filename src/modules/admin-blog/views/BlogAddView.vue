<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form @submit.prevent="submit">
    <div class="grid grid-cols-1 gap-9 sm:grid-cols-2">
      <div class="flex flex-col gap-9">
        <HeadingView v-model="state" :has-error="[Boolean(errorFields?.title?.length)]" />
        <CategoryView v-model="state" :has-error="[Boolean(errorFields?.categoryId?.length)]" />
        <ImageView v-model="state" :has-error="[Boolean(errorFields?.imageUrl?.length)]" />
      </div>

      <div class="flex flex-col-reverse gap-9 md:flex-col">
        <PublishView v-model="state" :pass="pass" />
        <DescView v-model="state"
          :has-error="[Boolean(errorFields?.desc?.length), Boolean(errorFields?.content?.length)]" />
        <TagView v-model="state" :is-error="pass" />
      </div>
    </div>
  </form>
</template>


<script setup lang="ts">

import { state, rules, submit } from '../services/logictics/blog';
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs';

import PublishView from '@/modules/admin-template/views/PublishView.vue'
import HeadingView from '@/modules/admin-template/views/HeadingView.vue';
import ImageView from '@/modules/admin-template/views/ImageView.vue';
import CategoryView from '@/modules/admin-template/views/CategoryView.vue';
import TagView from '@/modules/admin-template/views/TagView.vue';
import DescView from '@/modules/admin-template/views/DescView.vue';

const { pass, errorFields } = useAsyncValidator(state, rules);

</script>
