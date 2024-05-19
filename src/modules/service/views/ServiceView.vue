<script setup lang="ts">
import { get } from '@/core/services/helpers/fetcher.helper';
import type { TService } from '@/modules/admin-service/models/type';
import { ArrowPathIcon } from '@heroicons/vue/24/solid';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
onMounted(async()=>{
    await get<TService>('/api/services/random').then(response => {
        if (response?.data) {
            router.push('/specialist/'+response.data.slug)
        }else router.push('/')
    })
})
</script>

<template>
    <div class="h-[500px] flex items-center justify-center">
        <ArrowPathIcon class="w-20 h-20 text-cerulean-600 animate-spin"/>
    </div>
</template>