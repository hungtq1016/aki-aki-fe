<template>
  <div class="flex flex-col gap-10">
    <TableView
      v-bind:="{ headers, items, pagination, paginationOptions, fetch }"
      route="invoices"
      key="invoices"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import TableView from '@/modules/admin/views/TableView.vue'

import { paginationOptions, headers } from '../services/data/invoice'
import { pagination, items, fetch } from '../services/logictics/invoice'

onMounted(async () => {
  await fetch()
})

</script>
