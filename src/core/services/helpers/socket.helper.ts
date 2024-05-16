const url = import.meta.env.VITE_SOCKET_URL || ''

export const socket = new WebSocket(url)
