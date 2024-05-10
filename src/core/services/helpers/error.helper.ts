import { i18n } from '@/core/services/base/translation'
import { errorNotification, warningNotification } from './alert.helper'

export const errorHandling = (
  message: string = i18n.global.t('error.server_error.title'),
  status: number
) => {
  if (status === 404) {
    warningNotification(message)
  } else {
    errorNotification(message)
    throw new Error(message)
  }
}
