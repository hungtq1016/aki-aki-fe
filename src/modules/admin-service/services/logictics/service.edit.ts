import { ref, watch } from 'vue'

import { successNotification } from "@/core/services/helpers/alert.helper"
import { get, put } from "@/core/services/helpers/request.helper"

import type { TGroupService, TServiceResponse } from "../../models/type"
import type { Ref } from "vue"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import UploadAdapter from '@/core/services/classes/UploadFile'
import { slugify } from '@/core/services/utils/util.string'

export const state: Ref<TServiceResponse> = ref({} as TServiceResponse)
export const groups: Ref<TGroupService[]> = ref([])
export const submit = async () => {
    const data = await put<any, any>('/api/services/' + state.value.id, state.value)
    if (data?.data) {
        successNotification(data.message)
    }
}

export const fetch = async (id: string): Promise<void> => {

    get<TServiceResponse>('/api/services/' + id).then((response) => {
      if (response?.data) {
        state.value = response.data
      }
    })
  }

export const editor: Ref<typeof ClassicEditor> = ref(ClassicEditor)

function uploader(editor: any) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
        return new UploadAdapter(loader, "/api/images");
    };
}

export const editorConfig: Ref<any> = ref({
    extraPlugins: [uploader]
})

watch(state, (newValue) => {
  state.value.slug = slugify(newValue.title)
}, { deep: true })