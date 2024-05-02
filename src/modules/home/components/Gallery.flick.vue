<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="mt-5">
        <Flicking :options="galleryOptions" :plugins="plugins">
            <div class="p-2"
            v-for="data in galleries" :key="data.title" >
                <img 
                :src="data.imageUrl" :alt="data.title"
                class="h-40 object-cover w-full"/> </div>
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
import { galleries } from '../services/data/data'
import { Arrow } from "@egjs/flicking-plugins";
import { galleryOptions } from '../services/data/options'

const plugins = [new Arrow()]
</script>

