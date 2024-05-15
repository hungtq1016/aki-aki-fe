<template>
  <RouterView />
  <button @click="submit">click</button>

</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserstore } from './core/stores/user'
import { useRoute } from 'vue-router'
const { isUserExist } = useUserstore()
const route = useRoute()
onMounted(() => {
  isUserExist()
})

const ws: WebSocket = new WebSocket("ws://localhost:8080")
const submit = () => {
  ws.send(route.path)
}
ws.onmessage = (event:MessageEvent<any>) => {
  console.log("WebSocket message received:", event.data);
}
</script>
