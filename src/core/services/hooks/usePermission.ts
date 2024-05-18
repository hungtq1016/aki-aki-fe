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

const permissions =  ref<TPermission[]>([])

export const getPermissions = async () => {
  const data = await post<any,TPermission[]>('/api/roles/permissions')
  if (data?.data) {
    permissions.value = data.data
  }
}

export const checkPermission = (permission:string) => {
    return permissions.value.find(data=>data.type == permission || (data.type == 'admin' && data.value == 'all')) ? true : false
}