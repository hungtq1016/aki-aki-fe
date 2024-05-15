import { reactive, ref, watch, type Ref } from "vue"
import { v4 } from "uuid"

import { slugify } from "@/core/services/utils/util.string"
import { successNotification } from "@/core/services/helpers/alert.helper"
import { post } from "@/core/services/helpers/request.helper"
import { resetObject } from "@/core/services/utils/util.object"

import type { TBlog, TBlogRequest, TCategory, TTag } from "../../models/type"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import UploadAdapter from "@/core/services/classes/UploadFile"

export const init_state: TBlogRequest = {
    title: '',
    content: '',
    videoEmbed: '',
    desc: '',
    slug: '',
    imageUrl: '',
    categoryId: '-1',
    enable: true
}

export const categories: Ref<TCategory[]> = ref([])
export const tags: Ref<TTag[]> = ref([])
export const selectedTags: Ref<TTag[]> = ref([])
export const state = reactive<TBlogRequest>({ ...init_state })

export const editor: Ref<typeof ClassicEditor> = ref(ClassicEditor)

export function uploader (editor:any){
  editor.plugins.get('FileRepository').createUploadAdapter = (loader:any) => {
    return new UploadAdapter(loader,"/api/images");
  };
}

export const editorConfig: Ref<any> = ref({
  extraPlugins: [uploader]
})

export const submit = async () => {
    const data = await post<TBlogRequest, TBlog>('/api/blogs', state)
    if (data?.data) {
        successNotification(data.message), resetObject(state, init_state)
    }
    selectedTags.value.forEach(async (tag) => {
        const payload = {
            id: v4(),
            blogId: state.id,
            tagId: tag.id
        }
        await post<any, any>('/api/blogtags', payload)
    })
}

watch(
    state,
    (newValue) => {
        state.slug = slugify(newValue.title)
    },
    { deep: true }
)