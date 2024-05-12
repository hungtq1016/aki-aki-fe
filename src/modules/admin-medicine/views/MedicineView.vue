<template>
  <div class="flex flex-col gap-10">
    <TableView v-bind:="{ headers, items, pagination, paginationOptions, fetch }"
      :items="items"
     route="medicines" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { paginationOptions, headers } from '../services/data/medicine'
import { pagination, items, fetch } from '../services/logictics/medicine'
import TableView from '@/modules/admin/views/TableView.vue'

onMounted(async () => {
  await fetch()
})
</script>
