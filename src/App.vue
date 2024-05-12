<template>
  <RouterView />
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useUserstore } from './core/stores/user';

const { isUserExist } = useUserstore()

onMounted(()=>{
  isUserExist()
})
</script>