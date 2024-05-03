import UserOne from '@/assets/images/user/user-01.png'
import UserTwo from '@/assets/images/user/user-02.png'
import UserThree from '@/assets/images/user/user-03.png'
import UserFour from '@/assets/images/user/user-04.png'
import UserFive from '@/assets/images/user/user-05.png'
import { ref } from 'vue'
import type { TChat } from '../../models/type'

const chatData = ref<TChat[]>([
    {
        avatar: UserOne,
        name: 'Devid Heilo',
        text: 'How are you?',
        time: 12,
        textCount: 3,
        color: '#10B981'
    },
    {
        avatar: UserTwo,
        name: 'Henry Fisher',
        text: 'Waiting for you!',
        time: 12,
        textCount: 0,
        color: '#DC3545'
    },
    {
        avatar: UserFour,
        name: 'Jhon Doe',
        text: "What's up?",
        time: 32,
        textCount: 0,
        color: '#10B981'
    },
    {
        avatar: UserFive,
        name: 'Jane Doe',
        text: 'Great',
        time: 32,
        textCount: 2,
        color: '#FFBA00'
    },
    {
        avatar: UserOne,
        name: 'Jhon Doe',
        text: 'How are you?',
        time: 32,
        textCount: 0,
        color: '#10B981'
    },
    {
        avatar: UserThree,
        name: 'Jhon Doe',
        text: 'How are you?',
        time: 32,
        textCount: 3,
        color: '#FFBA00'
    }
])

export {chatData}