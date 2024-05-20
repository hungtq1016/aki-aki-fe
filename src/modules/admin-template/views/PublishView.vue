<template>
  <FormGroup :has-error="[!pass]">
    <template #heading>
      {{ $t('form.content') }}
    </template>
    <template #content>
      <div class="flex items-center justify-between">
        <div>
         
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
import FormGroup from '../components/Form.group.vue'

defineProps<{
  pass: boolean
}>()
</script>
