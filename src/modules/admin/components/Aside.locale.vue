<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div
        class="group relative flex justify-center items-center gap-2.5 rounded-md px-4 font-medium text-regent-gray-600  duration-300 ease-in-out ">
        <img :src="getLocaleImage($i18n.locale)" class="h-6 shadow-sm" aria-hidden="true" />
        <select v-model="$i18n.locale" @change="changeLocale($i18n.locale)" class="bg-transparent dark:bg-oxford-blue-900">
            <option v-for="locale in $i18n.availableLocales" :value="locale" :key="locale">
                <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
                    {{ getLocaleName(locale) }}
                </transition>
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { getLocaleName, getLocaleImage } from '@/core/services/utils/util.locale';
import { changeLocale } from '@/core/services/base/translation';

</script>