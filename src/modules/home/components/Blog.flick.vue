<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="py-5 md:py-10 md:px-5">
        <Flicking :options="slickOptions" :plugins="plugins">
            <BlogItem v-for="data in blogs" :key="data.slug" :data="data" />
            <template #viewport>
                <span class="flicking-arrow-prev"></span>
                <span class="flicking-arrow-next"></span>
            </template>
        </Flicking>
    </div>
</template>

<script setup lang="ts">
import "@egjs/flicking-plugins/dist/arrow.css";

import Flicking from "@egjs/vue3-flicking";
import { blogs } from '../services/data/data'
import { Arrow } from "@egjs/flicking-plugins";
import { slickOptions } from '../services/data/options'
import BlogItem from "./Blog.item.vue";

const plugins = [new Arrow()]

</script>
