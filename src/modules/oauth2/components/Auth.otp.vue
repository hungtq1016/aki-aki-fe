<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex items-center justify-between gap-3 pb-10">
        <input type="tel" pattern="\d*"  maxlength="1" v-model="state.n1" @keypress="isNumber($event)"
            :class="{'border-red-600':errorFields?.n1?.length}"
            class="w-14 h-14 text-center text-2xl font-extrabold text-cerulean-900 bg-cerulean-100 border border-transparent hover:border-cerulean-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-cerulean-600 focus:ring-2 focus:ring-cerulean-300"
           >
           <input type="tel" pattern="\d*"  maxlength="1" v-model="state.n2" @keypress="isNumber($event)"
            :class="{'border-red-600':errorFields?.n2?.length}"
            class="w-14 h-14 text-center text-2xl font-extrabold text-cerulean-900 bg-cerulean-100 border border-transparent hover:border-cerulean-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-cerulean-600 focus:ring-2 focus:ring-cerulean-300"
           >
           <input type="tel" pattern="\d*"  maxlength="1" v-model="state.n3" @keypress="isNumber($event)"
            :class="{'border-red-600':errorFields?.n3?.length}"
            class="w-14 h-14 text-center text-2xl font-extrabold text-cerulean-900 bg-cerulean-100 border border-transparent hover:border-cerulean-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-cerulean-600 focus:ring-2 focus:ring-cerulean-300"
           >
           <input type="tel" pattern="\d*"  maxlength="1" v-model="state.n4" @keypress="isNumber($event)"
            :class="{'border-red-600':errorFields?.n4?.length}"
            class="w-14 h-14 text-center text-2xl font-extrabold text-cerulean-900 bg-cerulean-100 border border-transparent hover:border-cerulean-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-cerulean-600 focus:ring-2 focus:ring-cerulean-300"
           >
           <input type="tel" pattern="\d*"  maxlength="1" v-model="state.n5" @keypress="isNumber($event)"
            :class="{'border-red-600':errorFields?.n5?.length}"
            class="w-14 h-14 text-center text-2xl font-extrabold text-cerulean-900 bg-cerulean-100 border border-transparent hover:border-cerulean-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-cerulean-600 focus:ring-2 focus:ring-cerulean-300"
           >
           <input type="tel" pattern="\d*"  maxlength="1" v-model="state.n6" @keypress="isNumber($event)"
            :class="{'border-red-600':errorFields?.n6?.length}"
            class="w-14 h-14 text-center text-2xl font-extrabold text-cerulean-900 bg-cerulean-100 border border-transparent hover:border-cerulean-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-cerulean-600 focus:ring-2 focus:ring-cerulean-300"
           >
    </div>
</template>

<script setup lang="ts">

import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs';
import { rules, state } from '../services/logictics/otp'

const { errorFields } = useAsyncValidator(state, rules)

function isNumber(evt: KeyboardEvent): void {
    evt = evt || window.event as KeyboardEvent;
    const charCode = evt.which || evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
    }
}
</script>
