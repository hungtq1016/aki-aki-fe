<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <form>
        <div class="mb-4 flex items-center gap-3">
            <div class="h-14 w-14 rounded-full">
                <img :src="imageBuilderUrl(user.imageUrl)" :alt="user.fullName">
            </div>
            <div><span class="mb-1.5 font-medium text-black-900 dark:text-gray-50">Edit your photo</span><span
                    class="flex gap-2.5"><button class="text-sm font-medium hover:text--black-900"> Delete
                    </button><button class="text-sm font-medium hover:text--black-900"> Update
                    </button></span></div>
        </div>
        <div id="FileUpload"
            class="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-gray-400 bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5">
            <input type="file" accept="image/*"
                class="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none">
            <div class="flex flex-col items-center justify-center space-y-3">
                <span
                    class="flex h-10 w-10 items-center justify-center rounded-full border ">
                    <ArrowUpTrayIcon class="w-4 h-4" />
                </span>
                <p class="text-sm font-medium"><span class="text-black-900">Click to upload</span> or drag
                    and drop </p>
                <p class="mt-1.5 text-sm font-medium">SVG, PNG, JPG or GIF</p>
                <p class="text-sm font-medium">(max, 800 X 800px)</p>
            </div>
        </div>
        <div class="flex justify-end gap-4.5"><button
                class="flex justify-center rounded border border-cerulean-600 py-2 px-6 font-medium text-cerulean-600 hover:shadow hover:bg-cerulean-50 dark:border-strokedark dark:text-white"
                type="button"> Cancel </button><button
                class="bg-cerulean-600 text-cerulean-100 flex justify-center rounded px-6 py-2 font-medium hover:bg-opacity-90 dark:bg-cerulean-500 dark:text-cerulean-50 disabled:!bg-cerulean-100 disabled:!text-cerulean-600"
                type="submit"> Save </button></div>
    </form>
</template>

<script setup lang="ts">
import { imageBuilderUrl } from '@/core/services/utils/util.string';
import { useUserstore } from '@/core/stores/user';
import { ArrowUpTrayIcon } from '@heroicons/vue/24/outline';

const { user } = useUserstore()

</script>

<style scoped></style>