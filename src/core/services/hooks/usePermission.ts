import { post } from '../helpers/fetcher.helper'

export const hasPermission = async (payload: string) => {
  const data = await post<string, boolean>('/api/roles/has-permission', payload)
  if (data?.data) {
    return data.data
  }
  return false
}
