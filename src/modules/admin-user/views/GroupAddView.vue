<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FormLayout :submit="submit">
    <FormItem>
      <FormGroup :has-error="[Boolean(errorFields?.userId?.length)]">
        <template #heading>
          {{ $t('form.user') }}
        </template>
        <template #content>
          <FormSelect
            v-model="state.userId"
            :list="users"
            :has-error="Boolean(errorFields?.userId?.length)"
            :placeholder="$t('form.place_holder.select_email')"
          >
            {{ $t('form.user') }}
          </FormSelect>
        </template>
      </FormGroup>
    </FormItem>
    <FormItem>
      <PublishView v-model="state.enable" :pass="pass" />
      <FormGroup :has-error="[false]">
        <template #heading>
          {{ $t('form.role') }}
        </template>
        <template #content>
          <ul class="flex flex-col gap-2">
            <li v-for="(role, index) in roles" :key="index">
              <label :for="`checkbox-${index}`">
                <div class="border border-gray-100 relative dark:border-zinc-900 rounded-md">
                  <input
                    :checked="isChecked(role)"
                    @click="toggleRole(role)"
                    :disabled="state.userId === '-1'"
                    class="absolute top-2 right-4 w-4 h-4 peer text-cerulean-600 bg-gray-100 border-gray-300 rounded checked:accent-cerulean-600"
                    type="checkbox"
                    :value="role"
                    :id="`checkbox-${index}`"
                  />
                  <div
                    class="flex justify-between px-4 py-2 bg-gray-100 peer-checked:bg-cerulean-100 dark:peer-checked:!bg-slate-950 dark:bg-zinc-950"
                  >
                    <div
                      class="flex gap-x-1 items-center capitalize text-gray-950 text-sm font-semibold dark:text-gray-50"
                    >
                      {{ role.name }}
                    </div>
                  </div>
                  <div
                    class="border-t border-gray-100 bg-gray-50 px-4 dark:border-zinc-900 py-2 text-xs text-gray-600 peer-checked:bg-cerulean-50 dark:bg-zinc-800 dark:text-gray-300 dark:peer-checked:!bg-slate-900"
                  >
                    {{ role.note }}
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </template>
      </FormGroup>
    </FormItem>
  </FormLayout>
</template>

<script setup lang="ts">
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs'
import { onMounted } from 'vue'

import FormLayout from '@/modules/admin-template/components/Form.layout.vue'
import FormItem from '@/modules/admin-template/components/Form.item.vue'
import PublishView from '@/modules/admin-template/views/PublishView.vue'
import FormGroup from '@/modules/admin-template/components/Form.group.vue'
import FormSelect from '@/modules/admin-template/components/Form.select.vue'

import { get } from '@/core/services/helpers/request.helper'
import { isChecked, roles, toggleRole, submit, state, users } from '../services/logictics/group.add'
import { rules } from '../services/data/user'

import type { TUser } from '../models/type'
import type { TRole } from '@/modules/admin-oauth2/models/type'

const { pass, errorFields } = useAsyncValidator(state, rules)

onMounted(() => {
  get<TRole[]>('/api/roles').then((response) => {
    roles.value = response?.data || []
  })
  get<TUser[]>('/api/users').then((response) => {
    users.value = response?.data || []
  })
})
</script>
