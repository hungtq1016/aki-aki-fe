<template>
  <div class="flex flex-col gap-10">
    <TableView v-bind:="{ headers, items, pagination, paginationOptions, fetch }" route="blogs" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { fetch } from '../services/logictics/medicine'
import { paginationOptions, headers } from '../services/data/medicine'
import { pagination, items } from '../services/logictics/medicine'
import TableView from '@/modules/admin/views/TableView.vue'

onMounted(async () => {
  await fetch()
})
</script>
