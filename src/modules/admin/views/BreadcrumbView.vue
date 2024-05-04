<template>
    <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-title-md2 font-semibold text-ebony-clay-950 dark:text-white">
            {{ $t(`route.${String(route.name)}`) }}
        </h2>

        <nav>
            <ol class="flex items-center gap-2">
                <li>
                    <router-link class="font-medium" to="/admin"> {{ $t('route.dashboard') }} / </router-link>
                </li>
                <li class="font-medium text-cerulean-blue-600">{{ $t(`route.${String(route.name)}`) }}</li>
            </ol>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
