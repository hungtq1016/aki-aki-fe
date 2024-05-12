<template>
    <section class="py-2">
        <div class="flex gap-x-2 items-center">
            <h4 class="text-xl font-semibold py-2 dark:text-gray-200">Bình Luận</h4>
            <TheQuestion
                answer="Bạn chỉ có thể bình luận sau khi đã thuê xe." />
        </div>
        <div class="pt-2 pb-1 pr-3 relative">
                <textarea v-model="content" placeholder="Bình luận..."
                class="dark:bg-zinc-700 bg-gray-100 focus:ring-0 focus:outline-none border-gray-100 border w-full rounded-md resize-none p-2 text-gray-900 dark:text-gray-100 text-sm" rows="3"></textarea>
                <button class="absolute bottom-5 right-5"
                type="button" @click="submitComment">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-gray-  dark:fill-gray-100" viewBox="0 0 122.88 108.3"><path d="M96.14,12.47l-76.71-1.1,28.3,27.85L96.14,12.47ZM53.27,49l9.88,39.17L102.1,22,53.27,49ZM117,1.6a5.59,5.59,0,0,1,4.9,8.75L66.06,105.21a5.6,5.6,0,0,1-10.44-1.15L41.74,49,1.67,9.57A5.59,5.59,0,0,1,5.65,0L117,1.6Z"/></svg>
                </button>
            </div>
        <CommentItem v-for="comment in comments" :data="comment"/>
        <CommentLoading v-if="isFetch" />
        <button @click="fetchComments" v-if="isNext && !isFetch" class="font-medium text-gray-600 mt-3 dark:text-gray-50">Xem thêm bình
            luận</button>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CommentItem from '../components/Coment.item'
import type { TComment } from '../models/type';
// import CommentLoading from '@/components/Loading/CommentLoading.vue';

const props = defineProps<{
    postId: string
}>()


const comments = ref<TComment[]>([])
const isNext = ref(false)
const isFetch = ref(false)
const content = ref('')


onMounted(() => {
    fetchComments()
})


const submitComment = async () => {
    if (!isAuthen) {
        toast('Yêu cầu đăng nhập', {
            autoClose: 1000,
            type: 'error',
            theme: isDark.value ? 'dark' : 'light'
        });
        content.value =''
    }else{
        let payload = {
        post_id: props.post_id,
        user_id: user.value.id,
        content: content.value,
    }    
    const { data } = await useFetch(`${URL}/comment`).post(payload).json()        
    if ( !data.value.error) {
        updateRight(data.value.right)
        comments.value= [data.value.data,...comments.value]
        content.value = ''
    }
    toast(data.value.message, {
            autoClose: 1000,
            type: data.value.error ? 'error' :'default',
            theme: isDark.value ? 'dark' : 'light'
    });
    }
    
}

</script>