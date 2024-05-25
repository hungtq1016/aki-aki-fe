import { reactive, ref } from 'vue'

import {  post } from '@/core/services/helpers/request.helper'
import { resetObject } from '@/core/services/utils/util.object'
import { successNotification } from '@/core/services/helpers/alert.helper'

import type { TBranch, TBranchRequest, TBranchType } from '../../models/type'
import type { Ref } from 'vue'
import { StatusEnum } from '@/core/models/enum'
import { v4 } from 'uuid'

const init_state: TBranchRequest = {
  id: v4(),
  address1: '',
  address2: '',
  phone1: '',
  phone2: '',
  addressEmbed: '',
  name: '',
  typeId: '-1',
  status: StatusEnum.Active
}

export const state = reactive<TBranchRequest>({ ...init_state })

export const branchtypes: Ref<TBranchType[]> = ref([])


export const submit = async () => {
  const data = await post<TBranchRequest, TBranch>('/api/branches', state)
  if (data?.data) {
    successNotification(data.message), resetObject(state, init_state)
  }
}