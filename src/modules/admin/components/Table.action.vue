<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex gap-x-1 divide-x-2">
        <button type="button" @click="remove" class="!text-red-600">
            <TrashIcon class="h-5 w-5 !text-red-600" />
        </button>
        <button class="pl-1" @click="copyClipboard">
            <DocumentDuplicateIcon class="h-5 w-5" />
        </button>
        <button type="button" @click="view" class="pl-1">
            <EyeIcon class="h-5 w-5" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { DocumentDuplicateIcon, TrashIcon, EyeIcon } from '@heroicons/vue/24/outline';
import { useRouter, useRoute } from 'vue-router'
import { confirmNotification, errorNotification, infoNotification, successNotification } from '@/core/services/helpers/alert.helper';
import { del } from '@/core/services/helpers/request.helper';

import { i18n } from '@/core/services/base/translation';

import { capitalize } from '@/core/services/utils/util.string';
import { getPath } from '@/core/services/utils/util.url';

import type { Response } from '@/core/models/type';

const router = useRouter()
const routes = useRoute()

const props = defineProps<{
    id: string,
    fetch: () => Promise<void>,
    route: string
}>()

const remove = async () => {
    const removeAsync = async () => {
        const response = await del<any, Response<boolean>>(`/${getPath(props.route)}/${props.id}`);

        if (response?.isError) {
            errorNotification(i18n.global.t('error.server_error.message', { name: capitalize(props.route) }) as string);
        } else {
            await props.fetch();
        }
    }
    confirmNotification(i18n.global.t('message.delete_success', { name: capitalize(props.route) }), removeAsync);

}

const copyClipboard = () => {
    navigator.clipboard.writeText(props.id);
    successNotification(i18n.global.t('message.copy_success', { name: "Id" }) as string);
}

const view = () => {
    router.push(`${routes.fullPath}/${props.id}`)  
}

</script>