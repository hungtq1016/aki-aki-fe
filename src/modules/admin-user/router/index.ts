import type { RouteRecordRaw } from 'vue-router'

const adminUserRoute: RouteRecordRaw = {
  path: 'users',
  children: [
    {
      path: '',
      name: 'admin_users',
      redirect: { path: '/admin/users/customer' }
    },
    {
      path: 'customer',
      children: [
        {
          path: '',
          name: 'admin_users_customer',
          component: () => import('@/modules/admin-user/views/CustomerView.vue'),
          meta: {
            title: 'route.admin_users_customer'
          }
        }
      ]
    },
    {
      path: 'doctor',
      children: [
        {
          path: '',
          name: 'admin_users_doctor',
          component: () => import('@/modules/admin-user/views/DoctorView.vue'),
          meta: {
            title: 'route.admin_users_doctor'
          }
        }
      ]
    },
    {
      path: 'add',
      children: [
        {
          path: '',
          name: 'admin_users_add',
          component: () => import('@/modules/admin-user/views/UserAddView.vue'),
          meta: {
            title: 'route.admin_users_add'
          }
        }
      ]
    },
    {
      path: 'all',
      children: [
        {
          path: '',
          name: 'admin_users_all',
          component: () => import('@/modules/admin-user/views/UserView.vue'),
          meta: {
            title: 'route.admin_users_all'
          }
        }
      ]
    },
    {
      path: ':id',
      children: [
        {
          path: '',
          name: 'admin_users_edit',
          component: () => import('@/modules/admin-user/views/UserEditView.vue'),
          meta: {
            title: 'route.admin_users_edit'
          }
        }
      ]
    },
    {
      path: 'groups',
      children: [
        {
          path: '',
          name: 'admin_users_groups',
          component: () => import('@/modules/admin-user/views/GroupView.vue'),
          meta: {
            title: 'route.admin_users_groups'
          }
        },
        {
          path: ':id',
          redirect: { path: '/admin/users/customer' }
        },
        {
          path: 'add',
          name: 'admin_users_groups_add',
          component: () => import('@/modules/admin-user/views/GroupAddView.vue'),
          meta: {
            title: 'route.admin_users_groups_add'
          }
        }
      ]
    }
  ]
}

export default adminUserRoute
