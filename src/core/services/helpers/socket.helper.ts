import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  error: null,
});

export const socket = io("https://server-bd3t.onrender.com");

socket.on("connect", () => {
  state.connected = true;
  state.error = null;
});

socket.on("disconnect", () => {
  state.connected = false;
});