<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="py-5 md:py-10 md:px-5">
        <Flicking :options="defaultOption" :plugins="plugins">
            <ServiceItem v-for="(data,index) in services" :key="index" :data="data" />
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
import ServiceItem from "./Service.item.vue";
import { Arrow } from "@egjs/flicking-plugins";
import { defaultOption } from '@/core/services/data/options'
import { services } from '../services/data/data'

const plugins = [new Arrow()]

</script>
