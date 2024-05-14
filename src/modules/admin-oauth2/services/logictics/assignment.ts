import { reactive, ref, watch, type Ref } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from '../data/assignment'

import { del, get, post } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type {
  TAssignment,
  TAssignmentRequest,
  TPermission,
  TPermissionResponse
} from '../../models/type'
import type { Rules } from 'async-validator'
import { errorNotification, successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

export const items = ref<TPermission[]>([
  {
    id: v4(),
    type: 'mock-data',
    value: 'mock-data',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    enable: true
  }
])

export const rules: Rules = {
  roleId: {
    type: 'string',
    min: 5,
    required: true
  }
}

export const init_state : TAssignmentRequest = {
  roleId: '-1',
  permissionId: '-1'
}

export const state = reactive({ ...init_state })
export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  const response = await get<TPaginationResponse<TPermission>>(
    '/api/assignments/page',
    paginationOptions.value
  )
  items.value = response?.data.data || []
  pagination.value = response?.data || { ...init_pagination };
}

export const permissions: Ref<TPermission[]> = ref([])
export const permissionsById: Ref<TPermissionResponse[]> = ref([])
export const checkedPermission: Ref<TPermission[]> = ref([])

export function isChecked(permission: TPermission) {
  return permissionsById.value.find((item) => item.id === permission.id) ? true : false
}
export function togglePermission(permission: TPermission) {
  const index = checkedPermission.value.map((e) => e.id).indexOf(permission.id)
  if (index !== -1) {
    checkedPermission.value.splice(index, 1) // Remove item if it exists
  } else {
    checkedPermission.value.push(permission) // Add item if it doesn't exist
  }
}
export const submit = async () => {
  permissionsById.value.forEach(async (item) => {
    item.assignments.forEach(async (assignment) => {
      const response = await del<TAssignmentRequest, TAssignment>(
        '/api/assignments/' + assignment.id,
        item
      )
      if (response !== undefined) {
        successNotification(response.message)
      } else {
        errorNotification('500: Server Error')
      }
    })
  })
  checkedPermission.value.forEach(async (element) => {
    const payload: TAssignmentRequest = {
      id: v4(),
      roleId: state.roleId,
      permissionId: element.id,
      enable: true
    }
    const data = await post<TAssignmentRequest, TAssignment>('/api/assignments', payload)
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
  () => state.roleId,
  (newValue) => {
    if (newValue !== '-1') {
      checkedPermission.value = []
      get<TPermissionResponse[]>('/api/permissions/byroleid/' + newValue).then((response) => {
        permissionsById.value = response?.data || []
      })
    } else {
      permissionsById.value = []
      checkedPermission.value = []
    }
  }
)

watch(
  permissionsById,
  (newValue) => {
    checkedPermission.value = [...newValue]
  },
  { deep: true }
)
