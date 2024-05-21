import { get } from "@/core/services/helpers/request.helper"
import { ref } from "vue"

// export const users = ref<string[]>([])

export const fetchUsers = async () => {
    // await get<string[]>('/api/websocket/users').then(response =>{
    //     if (response?.data) {
    //         users.value = response.data
    //     }
    // })
}
export const users = ref<string[]>([]);

// const username = ref<string>('');
// const message = ref<string>('');
// const connected = ref<boolean>(false);
// const messages = ref<string[]>([]);

// const connect = () => {
//     useSocket.connect(username.value);
//     useSocket.onMessage('message', handleMessage);
//     connected.value = true;
// };

// const sendMessage = () => {
//     useSocket.sendMessage(message.value);
//     message.value = '';
// };

// const getUsers = () => {
//     useSocket.getUsers();
// };

// const handleMessage = (data: string) => {
//     if (data.startsWith('Connected Users:')) {
//         users.value = data.replace('Connected Users: ', '').split(', ');
//     } else {
//         messages.value.push(data);
//     }
// }