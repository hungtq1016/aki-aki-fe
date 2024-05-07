<template>
    <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-3xl font-semibold text-ebony-clay-950 dark:text-white">
            {{ $t(`route.${String(route.name)}`) }}
        </h2>
        <nav>
            <ul class="flex items-center gap-x-2">
                <li v-for="(item, index) in breadcrumb" :key="item"
                    class="font-medium dark:text-gray-300 text-black-800">
                    <span v-if="index === breadcrumb.length - 1"
                        class="text-cerulean-blue-600 dark:text-cerulean-400">{{
                            $t(`route.${item}`) }}</span>
                    <div v-else class="flex gap-x-2 items-center">
                        <router-link class="font-medium" :to="{ 'name': item, 'params': {} }"> {{ $t(`route.${item}`) }}
                        </router-link>
                        <span class="text-black-400 dark:text-white">/</span>
                    </div>

                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const paths = route.fullPath.split("/")
const breadcrumb: string[] = [];
let temp = "";
for (let i = 1; i < paths.length; i++) {

    if (route.params.id == paths[i]) {
        breadcrumb.push(temp + "edit");
    } else {
        temp += paths[i];
        breadcrumb.push(temp);
        temp += ".";
    }
}

</script>
