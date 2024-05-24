import { reactive, ref } from 'vue';
import type { TPermission } from '@/modules/admin-oauth2/models/type'
import { post } from '../helpers/fetcher.helper'

export const hasPermission = async (payload: string) => {
  const data = await post<string, boolean>('/api/roles/has-permission', payload)
  if (data?.data) {
    return data.data
  }
  return false
}

export const permissions =  ref<TPermission[]>([])

export const getPermissions = async () => {
  const data = await post<any,TPermission[]>('/api/roles/permissions')
  if (data?.data) {
    permissions.value = data.data
  }
}

export const checkPermission = (value: string): boolean => {

  const res = permissions.value.find(data => data.value === value || (data.type === 'admin' && data.value === 'all'));
 
  return res ? true : false;
}