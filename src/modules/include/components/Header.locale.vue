<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <li class="text-white">
        <div class="flex gap-x-1 items-center p-2 border border-cerulean-600 rounded-md text-cerulean-600">
            <img :src="getLocaleImage($i18n.locale)" class="h-5 shadow-sm" aria-hidden="true" />
            <select v-model="$i18n.locale" @change="changeLocale($i18n.locale)"
                class="bg-transparent dark:bg-oxford-blue-900 focus:ring-0 focus:outline-none">
                <option v-for="locale in $i18n.availableLocales" :value="locale" :key="locale" class="text-black-1000">
                    <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                        leave-to-class="opacity-0">
                        {{ getLocaleName(locale) }}
                    </transition>
                </option>
            </select>
        </div>

    </li>

</template>

<script setup lang="ts">
import { getLocaleName, getLocaleImage } from '@/core/services/utils/util.locale'
import { changeLocale } from '@/core/services/base/translation'
</script>

<style scoped></style>