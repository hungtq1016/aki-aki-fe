<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <form @submit.prevent="submit" enctype="multipart/form-data">
        <div class="w-[343px] max-w-full h-10 mb-9 flex items-center gap-x-2 border border-alabaster-500 rounded-md px-2">
            <button type="submit">
                <MagnifyingGlassIcon class="w-5 h-5 text-gray-600" />
            </button>
            <input v-model="search" class="w-full h-full leading-10 rounded-md outline-none text-sm py-2"
                :placeholder="$t('content.search')">
        </div>
    </form>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const search = ref<string>("")

const submit = () => {
    router.push({
        name: 'search',
        query: {
            q: search.value
        },
    })
}

</script>
