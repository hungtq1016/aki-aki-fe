<template>
  <RouterView />
</template>
<script setup lang="ts">

import { onMounted } from 'vue'
import { useUserStore } from './core/stores/user'

const { isUserExist } = useUserStore()

onMounted(() => {
  isUserExist()
})
</script>
