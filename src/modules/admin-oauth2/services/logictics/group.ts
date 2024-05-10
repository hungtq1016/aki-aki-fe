import { ref, watch, type Ref } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from '../data/group'

import { get, post } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TGroup, TGroupRequest, TRole } from '../../models/type'
import { EnableEnum } from '@/core/models/enum'
import type { Rules } from 'async-validator'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

export const items = ref<TRole[]>([
  {
    id: v4(),
    name: 'mock-data',
    note: 'mock-data',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    enable: Boolean(EnableEnum.ALL)
  }
])

export const rules: Rules = {
  userId: {
    type: 'string',
    min: 5,
    required: true
  }
}

export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  const response = await get<TPaginationResponse<TRole>>('/api/groups/page', paginationOptions.value)
  items.value = response?.data.data || []
  resetObject(pagination, init_pagination)
}

export const roles: Ref<TRole[]> = ref([])
export const rolesById: Ref<TRole[]> = ref([])
export const checkedRole: Ref<TRole[]> = ref([])
export const userId: Ref<string> = ref('-1')

export function isChecked(role:TRole) {
  return rolesById.value.includes(role);
}
export function toggleRole(role:TRole) {
  if (checkedRole.value.includes(role)) {
    checkedRole.value = checkedRole.value.filter(item => item !== role);
  } else {
    checkedRole.value.push(role);
  }
}
export const submit = async () => {
  checkedRole.value.forEach(async element => {

    const payload : TGroupRequest = {
      id: v4(),
      userId: userId.value,
      roleId: element.id,
      enable: true
    }
    const data = await post<TGroupRequest, TGroup>('/api/groups', payload)
    if (data?.data) {
      successNotification(data.message)
    }
  });
}

watch(
  paginationOptions,
  async () => {
    await fetch()
  },
  { deep: true }
)

watch(userId, (newValue) => {
  if (newValue !== '-1') {
    get<TRole[]>('/api/roles/byuserid/' + newValue).then((response) => {
      rolesById.value = response?.data || []
      console.log(rolesById.value)
    })
  }
})

watch(rolesById, (newValue) => {
  checkedRole.value.splice(0, checkedRole.value.length, ...newValue);
}, { deep: true });
