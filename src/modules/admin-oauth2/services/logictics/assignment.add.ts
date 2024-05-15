import { reactive, ref, watch, type Ref } from 'vue'
import { v4 } from 'uuid'

import { del, get, post } from '@/core/services/helpers/request.helper'
import { errorNotification, successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

import type { TAssignment, TAssignmentRequest, TPermission, TPermissionResponse } from '../../models/type'

const init_state : TAssignmentRequest = {
  roleId: '-1',
  permissionId: '-1',
  enable: true
}

export const state = reactive({ ...init_state })
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
      if (response === undefined) errorNotification('500: Server Error')
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