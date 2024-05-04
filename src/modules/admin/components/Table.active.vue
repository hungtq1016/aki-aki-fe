<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <button v-if="item.enable" @click="toggle"
    class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 whitespace-nowrap">{{$t('content.active')}}</button>
    <button v-else @click="toggle"
    class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20 whitespace-nowrap">{{$t('content.inactive')}}</button>
</template>

<script setup lang="ts">
import { successNotification } from '@/core/services/helpers/alert.helper';
import { put } from '@/core/services/helpers/request.helper';

import { i18n } from "@/core/services/base/translation";

import { getPath } from '@/core/services/utils/util.url';

import type { Item } from 'vue3-easy-data-table';

const props = defineProps<{
  item: Item,
  fetch : () => Promise<void>,
  route: string
}>();


const toggle = async () => {

  // eslint-disable-next-line vue/no-mutating-props
  props.item.enable = !props.item.enable;

  const response = await put(`${getPath('api.'+props.route)}/${props.item.id}`,props.item);
  if (response?.isError == false) {
    await props.fetch();
    successNotification(i18n.global.t('message.update_success'));
  }
}
  
</script>
