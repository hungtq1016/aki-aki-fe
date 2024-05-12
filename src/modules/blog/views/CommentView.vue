<template>
    <section class="py-2">
        <div class="flex gap-x-2 items-center">
            <h4 class="text-xl font-semibold py-2 dark:text-gray-200">Bình Luận</h4>
            <TheQuestion
                answer="Bạn chỉ có thể bình luận sau khi đã thuê xe." />
        </div>
        <div class="pt-2 pb-1 pr-3 relative">
                <textarea v-model="comment.content" placeholder="Bình luận..."
                class="dark:bg-zinc-700 bg-gray-100 focus:ring-0 focus:outline-none border-gray-100 border w-full rounded-md resize-none p-2 text-gray-900 dark:text-gray-100 text-sm" rows="3"></textarea>
                <button class="absolute bottom-5 right-5"
                type="button" @click="submitComment">
                <PaperAirplaneIcon class="w-5- h-5 text-cerulean-600 -rotate-45"/>
                </button>
            </div>
        <CommentItem v-for="data in comments" :key="data.id"
        v-bind="{ data, blogId }"/>
        <!-- <CommentLoading v-if="isFetch" /> -->
        <!-- <button @click="fetchComments" v-if="isNext && !isFetch" class="font-medium text-gray-600 mt-3 dark:text-gray-50">Xem thêm bình
            luận</button> -->
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, type Ref } from 'vue';
import CommentItem from '../components/Coment.item.vue'
import type { TComment } from '../models/type';
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline';
import { get } from '@/core/services/helpers/fetcher.helper';
// import CommentLoading from '@/components/Loading/CommentLoading.vue';

const props = defineProps<{
    blogId: string
}>()


const comments = ref<TComment[]>([])

const comment: Ref<TComment> = ref({} as TComment)




const submit = async () => {
    let payload = {
        postId: props.blogId,
        userId: v4(),
        content: comment.value,
        parent_id:props.data.id
    }    
    const { data } = await useFetch(`${URL}/comment`).post(payload).json()        
    if ( !data.value.error) {
        children.value =data.value.data
        updateRight(data.value.right)
    }
    toast(data.value.message, {
            autoClose: 1000,
            type: data.value.error ? 'error' :'default',
            theme: isDark.value ? 'dark' : 'light'
    });
}

</script>