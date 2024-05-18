<template>
    <div>
        <form @submit.prevent="fetch">
            <div class="flex gap-y-2 gap-x-4 py-2">
            <input type="number" v-model="state.heartBeat"
            class="border rounded" :placeholder="$t('form.place_holder.heart_beat')"/>
            <input type="number" v-model="state.bloodPressure"
            class="border rounded" :placeholder="$t('form.place_holder.blood_pressure')"/>
            <input type="date" v-model="state.startFrom"
            class="border rounded"/>
            <input type="date" v-model="state.endFrom"
            class="border rounded"/>
            <button type="submit" class="flex items-center justify-center p-2 rounded bg-cerulean-600">
                <FunnelIcon class="w-5 h-5 text-cerulean-50"/>
            </button>
        </div>
        </form>
        <TableClientView v-bind:="{ headers, items, pagination, paginationOptions, fetch }" route="profile/health-record" key="health-record" />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import TableClientView from '@/modules/admin/views/TableClientView.vue'

import { paginationOptions, headers } from '../services/data/record'
import { pagination, items, fetch, userId, state } from '../services/logictics/record'
import { useUserStore } from '@/core/stores/user';
import { FunnelIcon } from '@heroicons/vue/24/outline';

const { user } = useUserStore()

onMounted(async () => {
    userId.value = user.id
    await fetch()
})
</script>
