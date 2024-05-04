<template>
    <div class="flex flex-col gap-10">
        <TableView v-bind:="{ headers, items, pagination, paginationOptions, fetch }" route="collection" />
    </div>
</template>

<script setup lang="ts">

import { onMounted } from 'vue';
import TableView from './TableView.vue';
import { fetch } from '../services/logictics/blog';
import { paginationOptions, headers} from '../services/data/blog'
import { pagination, items } from '../services/logictics/blog'
onMounted(async () => {
    await fetch()
})

</script>