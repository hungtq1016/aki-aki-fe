<template>
  <div class="flex flex-col gap-10">
    <TableView
      v-bind:="{ headers, items, pagination, paginationOptions, fetch }"
      route="groupservices"
      key="groupservices"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { paginationOptions, headers } from '../services/data/group'
import { pagination, items, fetch } from '../services/logictics/group'
import TableView from '@/modules/admin/views/TableView.vue'

onMounted(async () => {
  await fetch()
})

</script>
