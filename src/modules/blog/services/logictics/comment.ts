import { post } from "@/core/services/helpers/request.helper"
import type { TComment } from "../../models/type"
import { ref, type Ref } from "vue"
import { watch } from "fs"
import { get } from "http"

export const submit = async (payload:TComment) => {
  
    const data = await post('/api/comments',payload)       
    if(data?.data){
        comments.value.push(payload)
    }
}

export const comments: Ref<TComment[]> = ref([])

export const blogId: Ref<strimh>

watch(()=>props.blogId,(newValue)=>{
    if(newValue !== undefined)
    get<TComment[]>('/api/comments/blog/'+props.blogId).then(res => {
        if (res?.data) {
            comments.value = res.data
        }
    })
})