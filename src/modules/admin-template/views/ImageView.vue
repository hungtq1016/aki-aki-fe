<template>
  <FormGroup :has-error="hasError">
    <template #heading>
      {{ $t('form.image') }}
    </template>
    <template #content>
      <div>
        <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white">
          {{ $t('form.upload_image') }}
        </label>

        <div class="flex gap-x-2 items-center">
          <label for="image-upload" class="flex-1 basis-1/3">
            <input
              :disabled="hasImage"
              id="image-upload"
              type="file"
              @change="handleFileChange"
              accept="image/*"
              ref="fileInput"
              multiple
              class="hidden peer"
            />
            <div
              class="bg-cerulean-600 flex justify-center rounded px-6 py-2 font-medium text-cerulean-100 cursor-pointer hover:bg-opacity-90 dark:bg-cerulean-500 dark:text-cerulean-50 peer-disabled:!bg-cerulean-100 peer-disabled:!text-cerulean-600 peer-disabled:cursor-default"
            >
              <PlusIcon class="w-5 h-5" />
            </div>
          </label>
          <button
            @click="removeImage"
            :disabled="!hasImage"
            class="bg-cerulean-600 text-cerulean-100 flex justify-center rounded px-6 py-2 font-medium hover:bg-opacity-90 flex-1 basis-1/3 dark:bg-cerulean-500 dark:text-cerulean-50 disabled:!bg-cerulean-100 disabled:!text-cerulean-600"
            type="button"
          >
            <XMarkIcon class="w-5 h-5" />
          </button>
          <button
            @click="uploadFile"
            :disabled="!hasImage"
            class="bg-cerulean-600 text-cerulean-100 flex justify-center rounded px-6 py-2 font-medium hover:bg-opacity-90 flex-1 basis-1/3 dark:bg-cerulean-500 dark:text-cerulean-50 disabled:!bg-cerulean-100 disabled:!text-cerulean-600"
            type="button"
          >
            <ArrowUpTrayIcon class="w-5 h-5" />
          </button>
        </div>

        <div v-if="uploadProgress">Upload progress: {{ uploadProgress }}%</div>
      </div>
      <div v-if="hasImage">
        <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white">
          {{ $t('form.review_image') }}
        </label>
        <img :src="imageUrl" alt="review-image" />
      </div>
    </template>
  </FormGroup>
</template>

<script setup lang="ts">
import { successNotification, warningNotification } from '@/core/services/helpers/alert.helper'
import { upload } from '@/core/services/helpers/request.helper'
import type { TFileResponse } from '@/modules/admin-blog/models/type'
import { ArrowUpTrayIcon, PlusIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import type { ComputedRef, ModelRef, Ref } from 'vue'
import { computed } from 'vue'
import { ref } from 'vue'
import FormGroup from '../components/Form.group.vue'

const model: ModelRef<any> = defineModel({ required: true })

defineProps<{
  hasError: boolean[]
}>()

const fileInput: Ref<HTMLInputElement | null> = ref(null)
const selectedFile: Ref<File | null> = ref(null)
const uploadProgress: Ref<number> = ref(0)
const imageUrl: Ref<string> = ref('')
const hasImage: ComputedRef<boolean> = computed(() => imageUrl.value.length !== 0)

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (!target || !target.files?.[0]) return
  selectedFile.value = target.files?.[0]
  imageUrl.value = URL.createObjectURL(selectedFile.value)
}

async function uploadFile() {
  if (!selectedFile.value) return

  const formData = new FormData()
  formData.append('file', selectedFile.value)

  const response = await upload<TFileResponse>('/api/images', formData)

  if (response?.data) {
    model.value.imageUrl = response.data.data.path
    successNotification('Uploaded')
  } else {
    warningNotification('Cannot upload')
  }
}

const removeImage = () => {
  fileInput.value = null
  imageUrl.value = ''
}
</script>
