import { successNotification } from "@/core/services/helpers/alert.helper"
import { get, put } from "@/core/services/helpers/request.helper"
import { ref, watch, type Ref } from "vue"
import type { TBlogResponse } from "../../models/type"
import { slugify } from "@/core/services/utils/util.string"

// export const submit = async (payload: any) => {
//     const data = await put<any, any>('/api/blogs', payload)
//     if (data?.data) {
//         successNotification(data.message)
//     }
//     selectedTags.value.forEach(async (tag) => {
//         const payload = {
//             blogId: state.id,
//             tagId: tag.id
//         }
//         await post<any, any>('/api/blogtags', payload)
//     })
// }
export const state: Ref<TBlogResponse> = ref({} as TBlogResponse)

export const fetch = async (id: string): Promise<void> => {
    get<TBlogResponse>('/api/blogs/' + id).then((response) => {
        if (response?.data) {
            state.value = response.data
        }
    })
}

export const submit = async () => {
    const data = await put<any, any>('/api/blogs/' + state.value.id, state.value)
    if (data?.data) {
        successNotification(data.message)
    }
}

watch(state, (newValue) => {
    state.value.slug = slugify(newValue.title)
}, { deep: true })