<template>
    <section class="py-2">
        <div class="flex gap-x-2 items-center">
            <h4 class="text-xl font-semibold py-2 dark:text-gray-200">Bình Luận</h4>
            <TheQuestion answer="Bạn chỉ có thể bình luận sau khi đã thuê xe." />
        </div>
        <div class="pt-2 pb-1 pr-3 relative">
            <form @submit.prevent="submitComment">
                <textarea v-model="content" placeholder="Bình luận..."
                class="dark:bg-zinc-700 bg-gray-100 focus:ring-0 focus:outline-none border-gray-100 border w-full rounded-md resize-none p-2 text-gray-900 dark:text-gray-100 text-sm"
                rows="3"></textarea>
                <button class="absolute bottom-5 right-5" type="submit" >
                    <PaperAirplaneIcon class="w-5- h-5 text-cerulean-600 -rotate-45" />
                </button>
            </form>
        </div>
        <CommentItem v-for="data in comments" :key="data.id" v-bind="{ data, blogId }" />
        <!-- <CommentLoading v-if="isFetch" /> -->
        <!-- <button @click="fetchComments" v-if="isNext && !isFetch" class="font-medium text-gray-600 mt-3 dark:text-gray-50">Xem thêm bình
            luận</button> -->
    </section>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import CommentItem from '../components/Coment.item.vue'
import type {TCommentRequest, TCommentResponse } from '../models/type';
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline';
import { get } from '@/core/services/helpers/request.helper';
import { comments, content, submit } from '../services/logictics/comment';
import { v4 } from 'uuid';
import { useUserstore } from '@/core/stores/user';
import { warningNotification } from '@/core/services/helpers/alert.helper';
import { i18n } from '@/core/services/base/translation';
// import CommentLoading from '@/components/Loading/CommentLoading.vue';

const { user, isLogin } = useUserstore()
const props = defineProps<{
    blogId: string
}>()

const submitComment = async () => {
    if (!isLogin) warningNotification(i18n.global.t('message.need_login'))
    else {
        const commentId = v4()

        const payload: TCommentRequest = {
            blogId: props.blogId,
            userId: user.id,
            content: content.value,
            parentId: commentId,
            id: commentId,
            enable: true,
            left: 1,
            right: 1
        }
        await submit(payload)
    }
}

watch(() => props.blogId, (newValue) => {
    if (newValue !== undefined)
        get<TCommentResponse[]>('/api/comments/blog/' + props.blogId).then(res => {
            if (res?.data) {
                comments.value = res.data
            }
        })
})

</script>