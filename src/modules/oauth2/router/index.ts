import type { RouteRecordRaw } from 'vue-router'

const oauth2Route: RouteRecordRaw = {
  path: '/oauth2',
  component: () => import('@/core/components/layouts/Oauth2Layout.vue'),
  children: [
    {
      path: '',
      name: 'login',
      component: () => import('@/modules/oauth2/views/MainView.vue'),
      meta: {
        title: 'route.login'
      }
    },
    {
      path: 'register',
      name: 'register',
      component: () => import('@/modules/oauth2/views/RegisterView.vue'),
      meta: {
        title: 'route.register'
      }
    },
    {
      path: 'otp',
      name: 'otp',
      component: () => import('@/modules/oauth2/views/OTPView.vue'),
      meta: {
        title: 'route.otp'
      }
    },
    {
      path: 'login-by-email',
      name: 'login_by_email',
      component: () => import('@/modules/oauth2/views/LoginByEmailView.vue'),
      meta: {
        title: 'route.login_by_email'
      }
    },
    {
      path: 'send-email',
      name: 'send_email',
      component: () => import('@/modules/oauth2/views/EmailView.vue'),
      meta: {
        title: 'route.send_email'
      }
    },
    {
      path: 'reset-password',
      name: 'reset_password',
      component: () => import('@/modules/oauth2/views/ResetPasswordView.vue'),
      meta: {
        title: 'route.reset_password'
      }
    }
  ]
}

export default oauth2Route
