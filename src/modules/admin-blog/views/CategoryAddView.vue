<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <form @submit.prevent="submit">
      <div class="grid grid-cols-1 gap-9 sm:grid-cols-2 h-screen">
        <div class="flex flex-col gap-9">
          <div class="dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border border-gray-200 bg-white shadow">
            <div class="px-6.5 dark:border-zinc-900 border-b border-gray-200 py-4">
              <h3 class="text-black-1000 font-medium dark:text-white">{{ $t('form.heading') }}</h3>
            </div>
            <div class="p-6.5 flex flex-col gap-4">
              <div>
                <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white"> {{ $t('form.title') }} </label>
                <input  
                :class="{ '!border-red-600': errorFields?.title?.length }"
                v-model="state.title" type="text" :placeholder="$t('form.place_holder.title')" class="text-black-1000 dark:border-zinc-900 dark:bg-zinc-950 w-full rounded-lg border-[1.5px] border-gray-200 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:bg-gray-200 dark:text-white" />
              </div>
              <div>
                <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white"> {{ $t('form.slug') }} </label>
                <input v-model="state.slug" type="text" :placeholder="$t('form.place_holder.slug')" disabled="true" class="text-black-1000 dark:border-zinc-900 dark:bg-zinc-950 w-full rounded-lg border-[1.5px] border-gray-200 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:bg-gray-200 dark:text-white dark:disabled:bg-black" />
              </div>
            </div>
          </div>
        </div>
  
        <div class="flex flex-col-reverse gap-9 md:flex-col">
          <div class="dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border border-gray-200 bg-white shadow">
            <div class="border-big-gray-200 px-6.5 dark:border-zinc-900 border-b py-4">
              <h3 class="font-medium text-black dark:text-white">{{ $t('form.publish') }}</h3>
            </div>
            <div class="gap-5.5 p-6.5 flex flex-col">
              <div class="flex items-center justify-between">
                <div>
                  <Switch v-model="state.enable" :class="state.enable ? 'bg-green-200' : 'bg-red-200'" class="h-9.5 w-18.5 relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    <span class="sr-only">Enble</span>
                    <span aria-hidden="true" :class="state.enable ? 'translate-x-9' : 'translate-x-0'" class="h-8.5 w-8.5 pointer-events-none inline-flex transform items-center justify-center rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out">
                      <EyeIcon v-if="state.enable" class="h-4 w-4 text-green-600" />
                      <EyeSlashIcon v-else class="h-4 w-4 text-red-600" />
                    </span>
                  </Switch>
                </div>
                <div> 
                  <button :disabled="!pass"
                  class="bg-cerulean-600 flex justify-center rounded px-6 py-2 font-medium text-gray-100 hover:bg-opacity-90
                  disabled:bg-gray-400 disabled:text-gray-100" type="submit">{{ $t('button.publish') }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
</template>
  

<script setup lang="ts">
import { EyeSlashIcon, EyeIcon } from '@heroicons/vue/24/solid';
import { Switch } from '@headlessui/vue';
import { state, rules, submit } from '../services/logictics/category';
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs';
const { pass, errorFields } = useAsyncValidator(state, rules)

</script>
