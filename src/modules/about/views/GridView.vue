<template>
    <section class="pb-10">
        <div class="max-w-screen-xl mx-auto pt-12 pb-[85px]">
            <div class="text-center pb-[25px]">
                <h2 class="text-[48px] text-cerulean-400 leading-[55px] md:leading-[72px] capitalize">Câu Chuyện Về
                    PETPRO</h2>
                <HeartIcon class="w-5 h-5 block mx-auto mt-3 text-cerulean-300" />
            </div>
            <GridList />
        </div>

    </section>
</template>

<script setup lang="ts">
import { HeartIcon } from '@heroicons/vue/24/solid';
import GridList from '../components/Grid.list.vue';
</script>
