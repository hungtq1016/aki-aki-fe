<template>
    <div>
        <div class="py-2">
            
        </div>
        <TableClientView v-bind:="{ headers, items, pagination, paginationOptions, fetch }" route="profile/health-record" key="health-record" />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import TableClientView from '@/modules/admin/views/TableClientView.vue'

import { paginationOptions, headers } from '../services/data/record'
import { pagination, items, fetch, userId } from '../services/logictics/record'
import { useUserstore } from '@/core/stores/user';

const { user } = useUserstore()

onMounted(async () => {
    userId.value = user.id
    await fetch()
})
</script>

<style scoped></style>