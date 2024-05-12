import { post } from "@/core/services/helpers/fetcher.helper"
import type { TCommentRequest, TCommentResponse } from "../../models/type"
import { ref, type Ref } from "vue"

export const submit = async (payload:TCommentRequest): Promise<void> => {
  
    const data = await post<TCommentRequest,TCommentResponse>('/api/comments',payload)       
    if(data?.data){
        comments.value.push(data.data)
        content.value = ''
    }
}

export const comments: Ref<TCommentResponse[]> = ref([])

export const content: Ref<string> = ref('')