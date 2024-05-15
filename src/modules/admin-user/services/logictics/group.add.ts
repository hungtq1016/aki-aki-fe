import { reactive, ref, watch, type Ref } from 'vue'
import { v4 } from 'uuid'

import { del, get, post } from '@/core/services/helpers/request.helper'
import { errorNotification, successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

import type { TGroup, TGroupRequest, TUser } from '../../models/type'
import type { TRole, TRoleResponse } from '@/modules/admin-oauth2/models/type'

export const init_state: TGroupRequest = {
  userId: '-1',
  roleId: '-1',
  enable: true
}

export const state = reactive({ ...init_state })
export const users: Ref<TUser[]> = ref([])
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