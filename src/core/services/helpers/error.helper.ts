import { i18n } from '@/core/services/base/translation'
import { errorNotification, warningNotification } from './alert.helper'
import { post } from './request.helper';
import { useAuthInfo } from './indexedDB.helper';
import type { TTokenResponse } from '@/core/models/type';

export const errorHandling = async (
  message: string = i18n.global.t('error.server_error.title'),
  status: number
) => {
  switch (status) {
    case 404:
      warningNotification(message)
      break;
    case 401:
        await refreshToken()
      break;
    default:

      errorNotification(message)
      throw new Error(message)

  }

}

const refreshToken = async() =>{
  
  const { readAuthAsync , updateAuthAsync } = useAuthInfo()
  const token = await readAuthAsync() 
  if (token !== undefined) {
    await post<TTokenResponse,TTokenResponse>('/api/authenticate/refresh-token',token).then(async response =>{
      if (response?.data) {
        await updateAuthAsync(response.data)
        
      }else{
        warningNotification("You need login")
        window.location.replace('/')
      }
    })
  }else {
    warningNotification("You need login")
    window.location.replace('/')
  }
}
