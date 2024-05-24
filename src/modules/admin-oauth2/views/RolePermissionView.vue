<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section class="bg-white py-10">
        <div class="text-black-900 py-1 text-sm font-medium dark:text-gray-50 flex justify-between max-w-lg m-auto items-center">
            <span for="search">{{ $t('form.permssions') }}</span>
            <button
            @click="handleSubmit"
            class="bg-cerulean-600 text-cerulean-100 flex justify-center rounded px-6 py-2 font-medium hover:bg-opacity-90 dark:bg-cerulean-500 dark:text-cerulean-50 disabled:!bg-cerulean-100 disabled:!text-cerulean-600"
            type="button"
            >{{ $t('button.publish') }}</button>
        </div>
    <div class="py-4 max-w-lg m-auto">
        <input 
        id="search"
        @change="onChange"
        v-model="search" 
        type="text" 
        :placeholder="$t('form.place_holder.search')"
            class="dark:!border-zinc-950 dark:!bg-zinc-900 dark:text-gray-50 text-gray-900 w-full rounded-lg border border-gray-100 !bg-gray-100 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50" />
    </div>
    <div class="">
        <ul class="flex flex-col gap-2 max-w-lg m-auto">
            <li v-for="(item, index) in filteredPermissions" :key="index">
            <label :for="`checkbox-${index}`">
                <div class="border border-gray-100 relative dark:border-zinc-900 rounded-md">
                <input :checked="isChecked(item)" @change="toggleRole(item)"
                    class="absolute top-2 right-4 w-4 h-4 peer text-cerulean-600 bg-gray-100 border-gray-300 rounded checked:accent-cerulean-600"
                    type="checkbox" :value="item" :id="`checkbox-${index}`" />
                <div
                    class="flex justify-between px-4 py-2 bg-gray-100 peer-checked:bg-cerulean-100 dark:peer-checked:!bg-slate-950 dark:bg-zinc-950">
                    <div class="flex gap-x-1 items-center capitalize text-gray-950 text-sm font-semibold dark:text-gray-50">
                    {{ item.label }} 
                    </div>
                </div>
                <div
                    class="border-t border-gray-100 bg-gray-50 px-4 dark:border-zinc-900 py-2 text-xs text-gray-600 peer-checked:bg-cerulean-50 dark:bg-zinc-800 dark:text-gray-300 dark:peer-checked:!bg-slate-900">
                    {{ item.value }}
                </div>
                </div>
            </label>
            </li>
            <div
              v-if="filteredPermissions.length === 0 && search !== ''"
              class="relative cursor-default select-none px-4 py-2 text-gray-700"
            >
              Nothing found.
            </div>
        </ul>
    </div>
    </section>
</template>

<script setup lang="ts">

import { computed, onMounted } from 'vue';
import { search, fetch, checkedPermission, fetchChecked, permissions, submit, constPermission } from '../services/logictics/role.permission';
import type { TPermissionResponse } from '../models/type';
import { useRoute } from 'vue-router';

const route = useRoute()

const isChecked = (item : TPermissionResponse) => checkedPermission.value.some((data: TPermissionResponse) => data.id === item.id);

function toggleRole(item: TPermissionResponse) {

  const index = checkedPermission.value.findIndex((data: TPermissionResponse) => data.id === item.id);
  if (index !== -1) {
    checkedPermission.value.splice(index, 1); 
  } else {
    checkedPermission.value.push(item); 
  }
}


let filteredPermissions = computed(() =>
  search.value === ''
    ? permissions.value
    : permissions.value.filter((permission) =>
        permission.value
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(search.value.toLowerCase().replace(/\s+/g, ''))
      )
)
async function handleSubmit () {
    await submit(String(route.params.id))
}

function onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    search.value = target.value;
}

onMounted(async () => {
    await fetch()
    await fetchChecked(String(route.params.id))
})

</script>