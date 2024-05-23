import { ref } from "vue";
import type { TAssignment, TAssignmentRequest, TPermissionResponse } from '../../models/type';
import { del, get, post } from '@/core/services/helpers/request.helper';
import { v4 } from "uuid";
import { StatusEnum } from "@/core/models/enum";
import { successNotification } from "@/core/services/helpers/alert.helper";

export const permissions = ref<TPermissionResponse[]>([])
export const checkedPermission = ref<TPermissionResponse[]>([])
export const constPermission = ref<TPermissionResponse[]>([])

export const search = ref('')

export const fetch = async () => {
    await get<TPermissionResponse[]>('/api/permissions').then((response) => {
        permissions.value = response?.data || []
    })
}

export const fetchChecked = async (roleId: string) => {
    await get<TPermissionResponse[]>('/api/permissions/ByRoleId/'+roleId).then((response) => {
        checkedPermission.value = response?.data || []
        constPermission.value = response?.data || []
    })
}

export const submit = async (roleId: string) => {
    constPermission.value.forEach(async (item) => {
        await del<TAssignmentRequest, TAssignment>(
            '/api/assignments',
            item.assignments
        )
    })
  
    checkedPermission.value.forEach(async (element) => {
      const payload: TAssignmentRequest = {
        id: v4(),
        roleId: roleId,
        permissionId: element.id,
        status: StatusEnum.Active
      }
      const data = await post<TAssignmentRequest, TAssignment>('/api/assignments', payload)
      if (data?.data) {
        successNotification(data.message)
      }
    })
  
  }