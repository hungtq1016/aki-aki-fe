<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex justify-between relative flex-row pt-2">
        <div class="basis-10">
            <img class="rounded-full object-cover w-10" :src="`https://picsum.photos/50/50?rand=${data.id}`"
                :alt="data.userId">
        </div>
        <div class="basis-[calc(100%-45px)]">
            <div class="flex flex-col gap-y-1 bg-gray-100 dark:bg-zinc-700 rounded pl-3 pr-2 py-1 w-fit">
                <div class="font-medium dark:text-gray-200 dark:font-medium">{{ data.id }}</div>
                <div class="text-gray-700 text-sm dark:text-gray-100">{{ data.content }}</div>
            </div>
           
            <div class="flex gap-x-2 mt-0.5 flex-wrap">
                <!-- <button @click="toggleLike" class="text-sm font-medium text-gray-600 dark:text-gray-100"
                    :class="{ '!text-sky-600 !font-bold': isLike && isAuthen}">Thích</button>
                <button @click="toggleReply"
                class="text-sm font-medium text-gray-600 dark:text-gray-100">Trả lời</button>
                <div v-if="countLike > 0" class="text-sm font-medium text-gray-600 dark:text-gray-100">
                    {{ countLike }} lượt thích
                </div> -->
                <div class="text-sm text-gray-600 font-medium dark:text-gray-100">
                    <!-- {{ formatDistance(parseISO(data.created_at), new Date(), { addSuffix: true, locale: vi }) }} -->
                </div>
            </div>
            <div class="pt-2 pb-1 pr-3 relative">
                <!-- <textarea v-model="content" placeholder="Phản hồi..."
                class="dark:bg-zinc-700 bg-gray-100 focus:ring-0 focus:outline-none border-gray-100 border w-full rounded-md resize-none p-2 text-gray-900 dark:text-gray-100 text-sm" rows="3"></textarea>
                <button class="absolute bottom-5 right-5"
                type="button" @click="submitComment">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-gray-  dark:fill-gray-100" viewBox="0 0 122.88 108.3"><path d="M96.14,12.47l-76.71-1.1,28.3,27.85L96.14,12.47ZM53.27,49l9.88,39.17L102.1,22,53.27,49ZM117,1.6a5.59,5.59,0,0,1,4.9,8.75L66.06,105.21a5.6,5.6,0,0,1-10.44-1.15L41.74,49,1.67,9.57A5.59,5.59,0,0,1,5.65,0L117,1.6Z"/></svg>
                </button> -->
            </div>
            <!-- <CommentLoading v-if="isFetch" :count="countChild" /> -->
            <!-- <template v-else>
                <button @click="fetchChildren" v-if="children.length == 0"
                    class="text-sm text-gray-600 dark:text-gray-100">Xem thêm {{ countChild }} bình luận còn lại</button>
                <template>
                    <CommentItem v-for="item in data.subComments" :key="item.id"/>
                </template>
            </template> -->

        </div>
        <!-- <div v-if="data.hasChild" class="absolute bg-gray-100 top-10 bottom-1 left-5 w-5 -z-[1] border-l-2 border-b-2 rounded-bl-lg border-gray-900">
        </div> -->
    </div>
</template>

<script setup lang="ts">
// import { useDark, useFetch } from '@vueuse/core';
// import { computed, onMounted, ref,inject } from 'vue';
import { v4 } from 'uuid';
import type { TComment } from '../models/type';
import CommentItem from './Coment.item.vue';
import { post } from '@/core/services/helpers/fetcher.helper';
import type { Ref } from 'vue';

const props = defineProps<{
    data: TComment,
    blogId: string,
}>()

// const isReply = ref(false)

// const isFetch = ref(false)
// const content = ref('')

// onMounted(async () => {
//     user_like.value = props.data.likes
//     children.value = props.data.children        
// })

// const fetchChildren = async () => {
//     isFetch.value = true
//     const { data } = await useFetch(`${URL}/comment?parent_id=${props.data.id}&post_id=${props.post_id}`).get().json()    
//     children.value = data.value.data
//     isFetch.value = false
// }

// const isLike = computed(() =>user_like.value.some(person => person.id == user.value.id))
// const countLike = computed(() => user_like.value.length)
// const countChild = computed(() => (props.data.right - props.data.left - 1) / 2)

// const toggleReply = ()=>{
//     if (!isAuthen.value) {
//         toast('Yêu cầu đăng nhập', {
//             autoClose: 1000,
//             type: 'error',
//             theme: isDark.value ? 'dark' : 'light'
//         });
//     }else{
//         isReply.value = !isReply.value
//     }
// }



// const toggleLike = async () => {
//     if (!isAuthen.value) {
//         toast('Yêu cầu đăng nhập', {
//             autoClose: 1000,
//             type: 'error',
//             theme: isDark.value ? 'dark' : 'light'
//         });
//     } else {
//         let payload = {
//             post_id: props.data.id,
//             user_id: user.value.id,
//             like: !isLike.value,
//             type: 'comment'
//         }
//         const { data, isFinished } = await useFetch(`${URL}/like`).post(payload).json()
//         user_like.value = data.value.data
//     }
// }
</script>