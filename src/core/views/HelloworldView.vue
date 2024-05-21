<template>
  <div>
    <p>State: {{ usernameAlreadySelected }}</p>
    <button @click="()=>onUsernameSelection('hung')">Click</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import {socket} from '../services/helpers/socket.helper';
// 
const usernameAlreadySelected = ref(false);

// const connected = computed(()=>socket.connected)
function onUsernameSelection(username: string) {
      usernameAlreadySelected.value = true;
      socket.auth = { username };
      socket.connect();
}
</script>

