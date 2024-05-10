<template>
  <FormGroup :has-error="hasError">
    <template #heading>
      {{ $t('form.content') }}
    </template>
    <template #content>
      <div class="flex items-center justify-between">
        <div>
          <Switch
            v-model="model.enable"
            :class="model.enable ? 'bg-green-200' : 'bg-red-200'"
            class="h-9.5 w-18.5 relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            <span class="sr-only">Enble</span>
            <span
              aria-hidden="true"
              :class="model.enable ? 'translate-x-9' : 'translate-x-0'"
              class="h-8.5 w-8.5 pointer-events-none inline-flex transform items-center justify-center rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
            >
              <EyeIcon v-if="model.enable" class="h-4 w-4 text-green-600" />
              <EyeSlashIcon v-else class="h-4 w-4 text-red-600" />
            </span>
          </Switch>
        </div>
        <div>
          <button
            :disabled="!enable"
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
import { ref, watch, type ModelRef, type Ref } from 'vue'
import FormGroup from '../components/Form.group.vue'

const model: ModelRef<any> = defineModel({ required: true })

const props = defineProps<{
  pass: boolean
}>()

const enable: Ref<boolean> = ref(props.pass)

watch(
  () => props.pass,
  (newValue) => {
    enable.value = newValue
    hasError.value = [!newValue]
  }
)
const hasError: Ref<boolean[]> = ref([])
</script>
