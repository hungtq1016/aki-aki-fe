<template>
    <section class="py-10">
        <div class="max-w-screen-xl m-auto">
            <div class="flex gap-x-12">
                <div class="basis-5/6">
                    <BlogSearch/>
                    <router-view></router-view>
                </div>
                <AsideView class="basis-1/6"/>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import BlogSearch from '../components/Blog.search.vue';
import AsideView from './AsideView.vue';

</script>
