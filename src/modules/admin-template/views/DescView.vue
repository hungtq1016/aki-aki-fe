<template>
    <div class="dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border border-gray-200 bg-white shadow"
        :class="{ '!border-green-600': !isError && !isError }">
        <div class="px-6.5 dark:border-zinc-900 border-b border-gray-200 py-4">
            <h3 class="text-black-1000 font-medium dark:text-white">{{ $t('form.content') }}</h3>
        </div>
        <div class="gap-5.5 p-6.5 flex flex-col">
            <div>
                <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white"> {{ $t('form.desc') }}
                </label>
                <textarea rows="6" v-model="model.desc" :class="{ '!border-red-600': isError }" class="w-full cursor-pointer rounded-lg border border-gray-200 bg-transparent p-4 font-medium outline-none transition 
                dark:border-zinc-900 dark:bg-zinc-900
                disabled:cursor-default disabled:bg-gray-200"> </textarea>
            </div>
            <div>
                <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white"> {{ $t('form.content') }}
                </label>
                <div class="border border-gray-200 dark:border-zinc-900 dark:bg-zinc-900"
                    :class="{ '!border-red-600': isError }">
                    <ckeditor :editor="editor" v-model="model.content" :config="editorConfig"></ckeditor>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, type ModelRef, type Ref } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const editor: Ref<typeof ClassicEditor> = ref(ClassicEditor)
const editorConfig: Ref<any> = ref()

const model: ModelRef<any> = defineModel({ required: true })

defineProps<{
    isError: Boolean
}>()
</script>
