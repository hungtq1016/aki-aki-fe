<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex justify-between relative flex-row pt-2">
    <div class="basis-10">
      <img
        class="rounded-full object-cover w-10 h-10"
        :src="imageBuilderUrl(comment.user.imageUrl)"
        :alt="comment.userId"
      />
    </div>
    <div class="basis-[calc(100%-45px)]">
      <div class="flex flex-col gap-y-1 bg-gray-100 dark:bg-zinc-900 rounded pl-3 pr-2 py-1 w-fit">
        <div class="font-medium dark:text-gray-200 dark:font-medium text-black-1000">
          {{ comment.user.fullName }}
        </div>
        <div class="text-gray-600 text-sm dark:text-gray-100">{{ comment.content }}</div>
      </div>

      <div class="flex gap-x-2 mt-1 flex-wrap">
        <button
          @click="isReply = !isReply"
          class="text-sm font-medium text-gray-600 dark:text-gray-100"
        >
          Trả lời
        </button>

        <div class="text-sm text-gray-600 font-medium dark:text-gray-100">
          {{
            formatDistance(parseISO(comment.createdAt), new Date(), { addSuffix: true, locale: vi })
          }}
        </div>
      </div>
      <div class="pt-2 pb-1 pr-3 relative" v-if="isReply">
        <form @submit.prevent="submitComment">
          <textarea
            v-model="content"
            placeholder="Phản hồi..."
            class="dark:bg-zinc-700 bg-gray-100 focus:ring-0 focus:outline-none border-gray-100 border w-full rounded-md resize-none p-2 text-gray-900 dark:text-gray-100 text-sm"
            rows="3"
          ></textarea>
          <button class="absolute bottom-5 right-5" type="submit">
            <PaperAirplaneIcon class="w-5- h-5 text-cerulean-600 -rotate-45" />
          </button>
        </form>
      </div>
      <LoadingCommentView v-if="isLoading" />
      <template v-else>
        <button @click="fetchChildren" class="text-sm text-gray-600 dark:text-gray-100">
          Xem thêm
        </button>
        <div v-show="!isLoading && comment.children.length > 0">
          <CommentItem v-for="item in data.children" :key="item.id" :data="item" :blogId="blogId" />
        </div>
      </template>
    </div>
    <div
      v-if="data"
      class="absolute top-10 bottom-1 left-5 w-5 -z-[1] border-l-2 border-b-2 rounded-bl-lg border-gray-200"
    ></div>
  </div>
</template>

<script setup lang="ts">
import LoadingCommentView from '@/modules/loading/views/LoadingCommentView.vue'
import CommentItem from './Coment.item.vue'

import { formatDistance, parseISO } from 'date-fns'
import { ref, type Ref } from 'vue'
import { vi } from 'date-fns/locale'

import { imageBuilderUrl } from '@/core/services/utils/util.string'
import { isLoading, paginationOptions, submit } from '../services/logictics/comment'
import { get } from '@/core/services/helpers/fetcher.helper'
import { warningNotification } from '@/core/services/helpers/alert.helper'
import { useUserStore } from '@/core/stores/user'

import type { TPaginationResponse } from '@/core/models/type'
import type { TCommentRequest, TCommentResponse } from '../models/type'
import { v4 } from 'uuid'
import { i18n } from '@/core/services/base/translation'
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline'
import { StatusEnum } from '@/core/models/enum'

const { user, isLogin } = useUserStore()

const props = defineProps<{
  data: TCommentResponse
  blogId: string
}>()

const comment: Ref<TCommentResponse> = ref({
  ...props.data,
  children: []
})

const isReply: Ref<boolean> = ref(false)
const content: Ref<string> = ref('')

const fetchChildren = async (): Promise<void> => {
  isLoading.value = true

  get<TPaginationResponse<TCommentResponse>>(
    '/api/comments/comment/' + props.data.id,
    paginationOptions.value
  )
    .then((response) => {
      if (response?.data) {
        const { data, ...page } = response.data
        comment.value.children = [...comment.value.children, ...data]
        // pagination.value = page
        // paginationOptions.value.pageNumber = pagination.value.nextPage

        // isLast.value = pagination.value.pageNumber === pagination.value.lastPage
      }
    })
    .finally(() => (isLoading.value = false))
}

const submitComment = async () => {
  if (!isLogin) warningNotification(i18n.global.t('message.need_login'))
  else {
    const payload: TCommentRequest = {
      blogId: props.blogId,
      userId: user.id,
      content: content.value,
      parentId: props.data.id,
      id: v4(),
      status: StatusEnum.Active,
      left: 1,
      right: 1
    }
    submit(payload).finally(() => (content.value = ''))
  }
}
</script>
