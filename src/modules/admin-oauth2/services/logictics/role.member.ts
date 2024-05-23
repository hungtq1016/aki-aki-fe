import { ref } from "vue";
import type { TGroupRequest, TUserResponse } from '../../models/type';
import { get, post } from '@/core/services/helpers/request.helper';

import type { TGroupResponse } from "@/modules/admin-user/models/type";
import { StatusEnum } from "@/core/models/enum";

export const users = ref<TUserResponse[]>([])

export const search = ref('')

export const fetch = async (roleId: string) => {
    await get<TGroupResponse[]>('/api/groups/ByRoleId/' + roleId).then((response) => {
      users.value = response?.data.map(item => item.user) || []
    })
}

export const submitGroups = async (data:TUserResponse[],roleId: string) => {
  users.value.push(...data)
  const requests = data.map(async item => {
    const payload: TGroupRequest = {
      roleId: roleId,
      userId: item.id,
      status: StatusEnum.Active
    }
    await post('/api/groups',payload)
  })

  try {
    await Promise.all(requests);
  } catch (error) {
    console.error('Error submitting groups:', error);

  }
}