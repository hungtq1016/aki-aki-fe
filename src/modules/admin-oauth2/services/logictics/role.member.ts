import { ref } from "vue";
import type { TGroup, TGroupRequest, TUser, TUserResponse } from '../../models/type';
import { del, get, post } from '@/core/services/helpers/request.helper';

import type { TGroupResponse } from "@/modules/admin-user/models/type";
import { StatusEnum } from "@/core/models/enum";
import { v4 } from "uuid";

export const users = ref<TUserResponse[]>([])
export const groups = ref<TGroupResponse[]>([])
export const search = ref('')

export const fetch = async (roleId: string) => {
    await get<TGroupResponse[]>('/api/groups/ByRoleId/' + roleId).then((response) => {
      users.value = response?.data.map(item => item.user) || []
      groups.value = response?.data || []
    })
}

export const remove = async (index: number) => {
  if (index < 0 || index >= users.value.length) {
   
    return;
  }

  users.value.splice(index, 1);
  const [groupToRemove] = groups.value.splice(index, 1);

  if (!groupToRemove) {

    return;
  }

  await del('/api/groups/' + groupToRemove.id);
};

export const submitGroups = async (data:TUserResponse[],roleId: string) => {
  users.value.push(...data)
  const requests = data.map(async item => {
    const payload: TGroupRequest = {
      id: v4(),
      roleId: roleId,
      userId: item.id,
      status: StatusEnum.Active,
  
    }
    groups.value.push(payload as TGroupResponse)
    await post('/api/groups',payload)
  })

  try {
    await Promise.all(requests);
  } catch (error) {
    console.error('Error submitting groups:', error);

  }
}