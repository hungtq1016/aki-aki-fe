<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <li class="text-center uppercase">
        <div class="flex gap-x-1 text-white items-center justify-center">
            <strong :data-counter="data.number" :data-duration="data.duration" class="text-5xl">{{ numberUpdate
                }}</strong>
            <span class="text-xl uppercase">{{ data.suffix }}</span>
        </div>
        <p class="text-center text-white text-base leading-7 uppercase">{{ data.title }}</p>
    </li>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TCount } from '../models/type';
import { easeOutCubic } from 'easing-utils';

const props = defineProps<{
    data: TCount
}>()

const initTime = performance.now();
const numberUpdate = ref<number>(0)

const interval = setInterval(function () {
    let t = (performance.now() - initTime) / props.data.duration;

    let currentValue = Math.floor(easeOutCubic(t) * props.data.number);
    numberUpdate.value = currentValue;

    if (t >= 1) {
        clearInterval(interval);
    }

}, 50);
</script>
