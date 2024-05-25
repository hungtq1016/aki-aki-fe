import { reactive, ref } from 'vue'

import {  post } from '@/core/services/helpers/request.helper'
import { resetObject } from '@/core/services/utils/util.object'
import { successNotification } from '@/core/services/helpers/alert.helper'

import type { TGroupUrlRequest, TUrl, TUrlRequest } from '../../models/type'
import type {Ref} from 'vue'
import { StatusEnum } from '@/core/models/enum'
import { v4 } from 'uuid'

const init_state: TUrlRequest = {
  id: v4(),
  label: '',
  slug: '',
  imageUrl: '',
  type: '',
  tag: '',
  groupId: '-1',
  status: StatusEnum.Active
}

export const groupurls: Ref<TGroupUrlRequest[]> = ref([])

export const state = reactive<TUrlRequest>({ ...init_state })

export const submit = async () => {
  const data = await post<TUrlRequest, TUrl>('/api/urls', state)
  if (data?.data) {
    successNotification(data.message), resetObject(state, init_state)
  }
}