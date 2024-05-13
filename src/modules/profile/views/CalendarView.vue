<template>
  <div class="flex h-full flex-col">
    <div class="isolate flex flex-auto overflow-hidden bg-white">
      <div ref="container" class="flex flex-auto flex-col overflow-auto">
        <CalendarTime />
      </div>
      <CalendarMonth />
    </div>
  </div>
</template>

<script setup lang="ts">
import CalendarMonth from '../components/Calendar.month.vue'
import CalendarTime from '../components/Calendar.time.vue'
</script>
