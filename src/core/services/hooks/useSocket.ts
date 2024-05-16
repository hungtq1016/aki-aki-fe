import { io } from "socket.io-client";

const URL = "http://hungtq1016-001-site1.btempurl.com/api/websocket/ws";
const socket = io(URL, { autoConnect: false });
socket.onAny((event, ...args) => {
    console.log(event, args);
});
export default socket;