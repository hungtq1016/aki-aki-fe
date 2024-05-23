<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex items-center justify-center">
    <button
      type="button"
      @click="openModal"
      class="rounded-md bg-cerulean-600 p-4 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
    >
      <PlusIcon class="w-5 h-5"/>
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                <input 
                  id="search"
                  v-model="search"
                  type="text"
                  :placeholder="$t('form.place_holder.search')"
                  class="dark:!border-zinc-950 dark:!bg-zinc-900 dark:text-gray-50 text-gray-900 w-full rounded-lg border border-gray-100 !bg-gray-100 bg-transparent px-5 py-3 font-normal outline-none transition disabled:cursor-default disabled:!bg-gray-200 disabled:!border-gray-400 disabled:!text-gray-600 dark:disabled:!bg-stone-950 dark:disabled:!text-gray-50"
                />
              </DialogTitle>
              <div class="mt-2">
                <div v-if="isLoading" class="flex justify-center items-center h-80">
                  <ArrowPathIcon class="w-5 h-5 text-cerulean-600 animate-spin"/>
                </div>
                <FormCheckbox v-else
                :list="users" v-model="selectedUsers">
                  {{ $t('form.service_price') }}
                </FormCheckbox>
              </div>

              <div class="mt-4 flex items-center justify-end gap-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-transparent px-4 py-2 text-sm font-medium 
                  text-cerulean-900 border-cerulean-900 hover:bg-cerulean-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cerulean-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  {{ $t('button.close')}}
                </button>
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-cerulean-100 px-4 py-2 text-sm font-medium text-cerulean-900 hover:bg-cerulean-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cerulean-500 focus-visible:ring-offset-2"
                  @click="handleSubmit"
                >
                  {{$t('button.submit')}}
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';
import { PlusIcon } from '@heroicons/vue/20/solid';
import FormCheckbox from '@/modules/admin-template/components/Form.checkbox.vue';
import type { TUserResponse } from '../models/type';
import { get } from '@/core/services/helpers/request.helper';
import { paginationOptions } from '../services/data/role';
import type { TPaginationResponse } from '@/core/models/type';
import { useDebounceFn } from '@vueuse/core';
import { ArrowPathIcon } from '@heroicons/vue/24/solid';

const props = defineProps<{
  fetchedData: TUserResponse[],
}>();

const isOpen = ref(false);
const search = ref('');
const isLoading = ref(false)
const users = ref<TUserResponse[]>([]);
const selectedUsers = ref<TUserResponse[]>([]);
  
const emit = defineEmits(['onSubmit'])

const fetch = async () => {
  isLoading.value = true
  const options = { ...paginationOptions.value, search: search.value };
  await get<TPaginationResponse<TUserResponse>>('/api/users/page', options).then(response => {
    if (response?.data) {
      users.value = response.data.data.filter(fetchUser => !props.fetchedData.some(user => user.id === fetchUser.id));
    }
  }).finally(()=>isLoading.value = false);
};

const debouncedFetch = useDebounceFn(async () => {
  await fetch();
}, 600, { maxWait: 5000 });

function closeModal() {
  isOpen.value = false;
}

function openModal() {
  isOpen.value = true;
}

onMounted(async () => {
  await fetch();
});

const handleSubmit = () => {
  emit('onSubmit',selectedUsers.value)
  isOpen.value = false
}

watch(() => search.value, () => {
  debouncedFetch();
});

</script>
