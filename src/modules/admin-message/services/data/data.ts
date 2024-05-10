import { ref } from 'vue'
import type { TMessage, TUser } from '../../models/type'

const userMessage = ref<TUser[]>([
  {
    fullName: 'Henry Dholi',
    message: 'Ok, Thanks for your reply.',
    imageUrl: '/user/user-01.png'
  },
  {
    fullName: 'Mariya Desoja',
    message: 'I like your confidence 💪',
    imageUrl: '/user/user-02.png'
  },
  {
    fullName: 'Robert Jhon',
    message: 'Can you share your offer? ',
    imageUrl: '/user/user-03.png'
  },
  {
    fullName: 'Cody Fisher ',
    message: "I'm waiting for you response! ",
    imageUrl: '/user/user-04.png'
  },
  {
    fullName: 'Jenny Wilson        ',
    message: 'I want to make an appointment tomorrow from 2:00 to 5:00pm? ',
    imageUrl: '/user/user-05.png'
  },
  {
    fullName: 'Henry Tran',
    message: 'Call me later',
    imageUrl: '/user/user-06.png'
  }
])

const messages = ref<TMessage[]>([
  {
    author: 'Henry Dholi',
    content: 'Ok, Thanks for your reply.',
    createdAt: '6/9/2022 9:57:20 AM',
    updatedAt: '6/9/2022 9:57:20 AM'
  },
  {
    author: 'Henry Dholi',
    content: 'I like your confidence 💪',
    createdAt: '6/9/2022 9:57:20 AM',
    updatedAt: '6/9/2022 9:57:20 AM'
  },
  {
    author: 'Henry Dholi',
    content: 'Can you share your offer? ',
    createdAt: '6/9/2022 9:57:20 AM',
    updatedAt: '6/9/2022 9:57:20 AM'
  },
  {
    author: 'Andri Thomas',
    content: "I'm waiting for you response! ",
    createdAt: '6/9/2022 9:57:20 AM',
    updatedAt: '6/9/2022 9:57:20 AM'
  },
  {
    author: 'Henry Dholi',
    content: 'I want to make an appointment tomorrow from 2:00 to 5:00pm? ',
    createdAt: '6/9/2022 9:57:20 AM',
    updatedAt: '6/9/2022 9:57:20 AM'
  },

  {
    author: 'Andri Thomas',
    content: 'Call me later',
    createdAt: '6/9/2022 9:57:20 AM',
    updatedAt: '6/9/2022 9:57:20 AM'
  }
])

export { userMessage, messages }
