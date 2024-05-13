<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form @submit.prevent="uploadFile">
    <div class="mb-4 flex items-center gap-3">
      <div class="h-14 w-14 rounded-full">
        <img :src="imageBuilderUrl(user.imageUrl)" :alt="user.fullName" />
      </div>
      <div>
        <span class="mb-1.5 font-medium text-black-900 dark:text-gray-50">Edit your photo</span
        ><span class="flex gap-2.5">
          <button
            @click="removeImage"
            type="button"
            class="text-sm font-medium hover:text--black-900"
          >
            Delete</button
          ><button class="text-sm font-medium hover:text--black-900">Update</button></span
        >
      </div>
    </div>
    <div
      id="FileUpload"
      class="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-gray-400 bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
    >
      <input
        type="file"
        accept="image/*"
        :disabled="hasImage"
        @change="handleFileChange"
        class="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
      />
      <div class="flex flex-col items-center justify-center space-y-3">
        <span class="flex h-10 w-10 items-center justify-center rounded-full border">
          <ArrowUpTrayIcon class="w-4 h-4" />
        </span>
        <p class="text-sm font-medium">
          <span class="text-black-900">Click to upload</span> or drag and drop
        </p>
        <p class="mt-1.5 text-sm font-medium">SVG, PNG, JPG or GIF</p>
        <p class="text-sm font-medium">(max, 800 X 800px)</p>
      </div>
      <div v-if="hasImage" class="absolute inset-0 bg-white">
        <img
          :src="isReview ? imageUrl : imageBuilderUrl(imageUrl)"
          alt="review-image"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    <div class="flex justify-end gap-4.5">
      <button
        :disabled="!hasImage"
        class="bg-cerulean-600 text-cerulean-100 flex justify-center rounded px-6 py-2 font-medium hover:bg-opacity-90 dark:bg-cerulean-500 dark:text-cerulean-50 disabled:!bg-cerulean-100 disabled:!text-cerulean-600"
        type="submit"
      >
        Save
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { i18n } from '@/core/services/base/translation'
import { errorNotification, successNotification } from '@/core/services/helpers/alert.helper'
import { put, upload } from '@/core/services/helpers/fetcher.helper'
import { imageBuilderUrl } from '@/core/services/utils/util.string'
import { useUserstore } from '@/core/stores/user'
import type { TFileResponse } from '@/modules/admin-blog/models/type'
import type { TUser, TUserRequest } from '@/modules/admin-oauth2/models/type'
import { ArrowUpTrayIcon } from '@heroicons/vue/24/outline'
import { computed, onMounted, ref, type ComputedRef, type Ref } from 'vue'

const { user, updateData } = useUserstore()

const fileInput: Ref<HTMLInputElement | null> = ref(null)
const selectedFile: Ref<File | null> = ref(null)
const imageUrl: Ref<string> = ref('')
const hasImage: ComputedRef<boolean> = computed(() => imageUrl.value.length !== 0)
const isReview: Ref<boolean> = ref(false)
const state: Ref<TUser> = ref({} as TUser)

onMounted((): void => {
  state.value = { ...user }
  imageUrl.value = user.imageUrl
})

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (!target || !target.files?.[0]) return
  selectedFile.value = target.files?.[0]
  imageUrl.value = URL.createObjectURL(selectedFile.value)
  isReview.value = true
}

async function uploadFile() {
  if (!selectedFile.value) return

  const formData = new FormData()
  formData.append('file', selectedFile.value)

  upload<TFileResponse>('/api/images', formData)
    .then((response) => {
      if (response?.data.data) {
        imageUrl.value = response.data.data.path
        state.value.imageUrl = imageUrl.value
        put<TUserRequest, TUser>('/api/users/' + user.id, state.value)
          .then((response) => {
            if (response?.data) {
              updateData(response.data)
              successNotification(i18n.global.t('message.update_success'))
            }
          })
          .catch(() => errorNotification(i18n.global.t('message.server_error')))
      }
    })
    .catch(() => errorNotification(i18n.global.t('message.server_error')))
}

const removeImage = () => {
  selectedFile.value = null
  fileInput.value = null
  imageUrl.value = ''
}
</script>
