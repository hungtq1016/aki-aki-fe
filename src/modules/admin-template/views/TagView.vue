<template>
    <div class="dark:border-zinc-900 dark:bg-zinc-950 rounded-sm border border-gray-200 bg-white shadow">
        <div class="border-big-gray-200 px-6.5 dark:border-zinc-900 border-b py-4">
            <h3 class="text-black-1000 font-medium dark:text-white">{{ $t('form.tag') }}</h3>
        </div>
        <div class="gap-5.5 p-6.5 flex flex-col">
            <div>
                <label class="text-black-1000 mb-3 block text-sm font-medium dark:text-white">
                    {{ $t('form.select_tag') }}
                </label>
                <Multiselect
                    class="!text-black-1000 dark:border-zinc-900 w-full border-gray-200 bg-transparent font-normal outline-none transition disabled:cursor-default disabled:bg-gray-200 dark:text-white"
                    v-model="model" deselect-label="Can't remove this value" track-by="title" label="title"
                    :placeholder="$t('form.place_holder.select_tag')" :options="tags" :searchable="false"
                    :allow-empty="false">
                    <template v-slot:singleLabel="{ option }">
                        <span>{{ option.title }}</span>
                    </template>
                </Multiselect>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { get } from '@/core/services/helpers/request.helper';
import type { TTag } from '@/modules/admin-blog/models/type';
import { onMounted, ref, type Ref } from 'vue';
import type { ModelRef } from 'vue';
import Multiselect from 'vue-multiselect'

const model: ModelRef<any> = defineModel({ required: true })
const tags: Ref<TTag[]> = ref([])
defineProps<{
    isError: Boolean
}>()
onMounted(() => {

    get<TTag[]>("/api/tags").then(response => {
        tags.value = response?.data || []
    })
})

</script>

<style scoped></style>