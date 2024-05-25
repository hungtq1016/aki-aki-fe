import { reactive, ref, watch, } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import { post } from '@/core/services/helpers/request.helper'
import { resetObject } from '@/core/services/utils/util.object'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { slugify } from '@/core/services/utils/util.string'
import UploadAdapter from '@/core/services/classes/UploadFile'

import type { TGroupService, TService, TServiceRequest } from '../../models/type'
import type { Ref } from 'vue'
import { StatusEnum } from '@/core/models/enum'
import { v4 } from 'uuid'

const init_state: TServiceRequest = {
  id: v4(),
  title: '',
  content: '',
  imageUrl: '',
  slug: '',
  desc: '',
  videoEmbed: '',
  groupId: '-1',
  status: StatusEnum.Active
}

export const state = reactive<TServiceRequest>({ ...init_state })

export const groups: Ref<TGroupService[]> = ref([])

export const submit = async () => {
  const data = await post<TServiceRequest, TService>('/api/services', state)
  if (data?.data) {
    successNotification(data.message), resetObject(state, init_state)
  }
}

watch(
  state,
  (newValue) => {
    state.slug = slugify(newValue.title)
  },
  { deep: true }
)

export const editor: Ref<typeof ClassicEditor> = ref(ClassicEditor)

function uploader(editor: any) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
        return new UploadAdapter(loader, "/api/images");
    };
}

export const editorConfig: Ref<any> = ref({
    extraPlugins: [uploader]
})
