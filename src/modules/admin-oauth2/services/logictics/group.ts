import { reactive, ref, watch, type Ref } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from '../data/group'

import { del, get, post } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TGroup, TGroupRequest, TRole, TRoleResponse } from '../../models/type'
import { EnableEnum } from '@/core/models/enum'
import type { Rules } from 'async-validator'
import { errorNotification, successNotification } from '@/core/services/helpers/alert.helper'
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
    min: 35,
    required: true
  }
}

export const init_state: TGroupRequest = {
  userId: '-1',
  roleId: '-1'
}

export const state = reactive({ ...init_state })

export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  const response = await get<TPaginationResponse<TRole>>(
    '/api/groups/page',
    paginationOptions.value
  )
  items.value = response?.data.data || []
  resetObject(pagination, init_pagination)
}

export const roles: Ref<TRole[]> = ref([])
export const rolesById: Ref<TRoleResponse[]> = ref([])
export const checkedRole: Ref<TRole[]> = ref([])

export function isChecked(role: TRole) {
  return rolesById.value.find((item) => item.id === role.id) ? true : false
}
export function toggleRole(role: TRole) {
  const index = checkedRole.value.map((e) => e.id).indexOf(role.id)
  if (index !== -1) {
    checkedRole.value.splice(index, 1) // Remove item if it exists
  } else {
    checkedRole.value.push(role) // Add item if it doesn't exist
  }
}
export const submit = async () => {
  rolesById.value.forEach(async (item) => {
    item.groups.forEach(async (group) => {
      const response = await del<TGroupRequest, TGroup>('/api/groups/' + group.id, item)
      if (response !== undefined) {
        successNotification(response.message)
      } else {
        errorNotification('500: Server Error')
      }
    })
  })
  checkedRole.value.forEach(async (element) => {
    const payload: TGroupRequest = {
      id: v4(),
      userId: state.userId,
      roleId: element.id,
      enable: true
    }
    const data = await post<TGroupRequest, TGroup>('/api/groups', payload)
    if (data?.data) {
      successNotification(data.message)
      resetObject(state, init_state)
    }
  })
}

watch(
  paginationOptions,
  async () => {
    await fetch()
  },
  { deep: true }
)

watch(
  () => state.userId,
  (newValue) => {
    if (newValue !== '-1') {
      checkedRole.value = []
      get<TRoleResponse[]>('/api/roles/byuserid/' + newValue).then((response) => {
        rolesById.value = response?.data || []
      })
    } else {
      rolesById.value = []
      checkedRole.value = []
    }
  }
)

watch(
  rolesById,
  (newValue) => {
    checkedRole.value = [...newValue]
  },
  { deep: true }
)
