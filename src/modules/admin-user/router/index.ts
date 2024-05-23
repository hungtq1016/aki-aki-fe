import hasAdminPermission from '@/core/services/middlewares/hasAdminPermission'
import type { RouteRecordRaw } from 'vue-router'

const adminUserRoute: RouteRecordRaw[] = [
  {
    path: 'users',
    children: [
      {
        path: '',
        name: 'admin_users',
        redirect: { path: '/admin/users/customer' }
      },
      {
        path: 'all',
        name: 'admin_users_all',
        beforeEnter:hasAdminPermission,
        component: () => import('@/modules/admin-user/views/UserView.vue'),
        meta: {
          title: 'route.admin_users_all'
        }
      },
      {
        path: 'customer',
        name: 'admin_users_customer',
        component: () => import('@/modules/admin-user/views/CustomerView.vue'),
        meta: {
          title: 'route.admin_users_customer'
        }
      },
      {
        path: 'doctor',
        name: 'admin_users_doctor',
        component: () => import('@/modules/admin-user/views/DoctorView.vue'),
        meta: {
          title: 'route.admin_users_doctor'
        }
      },
      {
        path: 'add',
        name: 'admin_users_add',
        component: () => import('@/modules/admin-user/views/UserAddView.vue'),
        meta: {
          title: 'route.admin_users_add'
        }
      },
      {
        path: ':id',
        name: 'admin_users_edit',
        component: () => import('@/modules/admin-user/views/UserEditView.vue'),
        meta: {
          title: 'route.admin_users_edit'
        }
      }
    ]
  }
]

export default adminUserRoute
