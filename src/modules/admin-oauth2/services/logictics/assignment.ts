import { ref, watch, type Ref } from 'vue'
import { v4 } from 'uuid'

import { init_pagination, paginationOptions } from '../data/assignment'

import { get, post } from '@/core/services/helpers/request.helper'

import type { TPagination, TPaginationResponse } from '@/core/models/type'
import type { TAssignment, TAssignmentRequest, TPermission } from '../../models/type'
import { EnableEnum } from '@/core/models/enum'
import type { Rules } from 'async-validator'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { resetObject } from '@/core/services/utils/util.object'

export const items = ref<TPermission[]>([
  {
    id: v4(),
    type: 'mock-data',
    value: 'mock-data',
    createdAt: '2022-01-01',
    updatedAt: '2024-01-01',
    enable: Boolean(EnableEnum.ALL)
  }
])

export const rules: Rules = {
  roleId: {
    type: 'string',
    min: 5,
    required: true
  }
}

export const pagination = ref<TPagination>({ ...init_pagination })

export const fetch = async () => {
  const response = await get<TPaginationResponse<TPermission>>('/api/assignments/page', paginationOptions.value)
  items.value = response?.data.data || []
  resetObject(pagination, init_pagination)
}

export const permissions: Ref<TPermission[]> = ref([])
export const permissionsById: Ref<TPermission[]> = ref([])
export const checkedPermission: Ref<TPermission[]> = ref([])
export const roleId: Ref<string> = ref('-1')

export function isChecked(permission:TPermission) {
  return permissionsById.value.find(item => item.id === permission.id) ? true : false;
}
export function togglePermission(permission:TPermission) {
  if (checkedPermission.value.includes(permission)) {
    checkedPermission.value = checkedPermission.value.filter(item => item !== permission);
  } else {
    checkedPermission.value.push(permission);
  }
}
export const submit = async () => {
  checkedPermission.value.forEach(async element => {

    const payload : TAssignmentRequest = {
      id: v4(),
      roleId: roleId.value,
      permissionId: element.id,
      enable: true
    }
    const data = await post<TAssignmentRequest, TAssignment>('/api/assignments', payload)
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

watch(roleId, (newValue) => {
  if (newValue !== '-1') {
    get<TPermission[]>('/api/permissions/byroleid/' + newValue).then((response) => {
      permissionsById.value = response?.data || []
      console.log(permissionsById.value)
    })
  }
})

watch(permissionsById, (newValue) => {
  checkedPermission.value.splice(0, checkedPermission.value.length, ...newValue);
}, { deep: true });
