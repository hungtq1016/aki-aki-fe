<template>
    <div class="flex flex-col gap-10">
        <TableView v-bind:="{ headers, items, pagination, paginationOptions, fetch }" route="blogs" />
    </div>
</template>

<script setup lang="ts">

import { onMounted } from 'vue';
import { fetch } from '../../admin/services/logictics/blog';
import { paginationOptions, headers} from '../../admin/services/data/blog'
import { pagination, items } from '../../admin/services/logictics/blog'
import TableView from '@/modules/admin/views/TableView.vue';

onMounted(async () => {
    await fetch()
})

</script>