import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: []
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = import.meta.env.VITE_PRODUCTION === "production" ? undefined : "ws://hungtq1016-001-site1.btempurl.com/api/socket/ws";

export const socket = io("ws://hungtq1016-001-site1.btempurl.com/api/socket/ws");

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});
