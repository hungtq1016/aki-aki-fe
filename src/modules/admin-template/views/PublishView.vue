<template>
  <FormGroup :has-error="[!pass]">
    <template #heading>
      {{ $t('form.content') }}
    </template>
    <template #content>
      <div class="flex items-center justify-between">
        <div>
          <Switch
            v-model="model"
            :class="model ? 'bg-green-200' : 'bg-red-200'"
            class="h-9.5 w-18.5 relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            <span class="sr-only">Enble</span>
            <span
              aria-hidden="true"
              :class="model ? 'translate-x-9' : 'translate-x-0'"
              class="h-8.5 w-8.5 pointer-events-none inline-flex transform items-center justify-center rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
            >
              <EyeIcon v-if="model" class="h-4 w-4 text-green-600" />
              <EyeSlashIcon v-else class="h-4 w-4 text-red-600" />
            </span>
          </Switch>
        </div>
        <div>
          <button
            :disabled="!pass"
            class="bg-cerulean-600 text-cerulean-100 flex justify-center rounded px-6 py-2 font-medium hover:bg-opacity-90 dark:bg-cerulean-500 dark:text-cerulean-50 disabled:!bg-cerulean-100 disabled:!text-cerulean-600"
            type="submit"
          >
            {{ $t('button.publish') }}
          </button>
        </div>
      </div>
    </template>
  </FormGroup>
</template>

<script setup lang="ts">
import { Switch } from '@headlessui/vue'
import { EyeSlashIcon, EyeIcon } from '@heroicons/vue/24/solid'
import type { ModelRef } from 'vue'
import FormGroup from '../components/Form.group.vue'

const model: ModelRef<boolean> = defineModel({ required: true })

defineProps<{
  pass: boolean
}>()
</script>
