import type { RouteRecordRaw } from 'vue-router'

const adminOauth2Route: RouteRecordRaw = {
  path: 'oauth2',
  children: [
    {
      path: '',
      name: 'admin_oauth2',
      redirect: { path: '/admin/oauth2/roles' }
    },
    {
      path: 'roles',
      children: [
        {
          path: '',
          name: 'admin_oauth2_roles',
          component: () => import('@/modules/admin-oauth2/views/RoleView.vue'),
          meta: {
            title: 'route.admin_oauth2_roles'
          }
        },
        {
          path: 'add',
          name: 'admin_oauth2_roles_add',
          component: () => import('@/modules/admin-oauth2/views/RoleAddView.vue'),
          meta: {
            title: 'route.admin_oauth2_roles_add'
          }
        },
        {
          path: ':id',
          name: 'admin_oauth2_roles_edit',
          component: () => import('@/modules/admin-oauth2/views/RoleAddView.vue'),
          meta: {
            title: 'route.admin_oauth2_roles_edit'
          }
        }
      ]
    },
    {
      path: 'permissions',
      children: [
        {
          path: '',
          name: 'admin_oauth2_permissions',
          component: () => import('@/modules/admin-oauth2/views/PermissionView.vue'),
          meta: {
            title: 'route.admin_oauth2_permissions'
          }
        },
        {
          path: 'add',
          name: 'admin_oauth2_permissions_add',
          component: () => import('@/modules/admin-oauth2/views/PermissionAddView.vue'),
          meta: {
            title: 'route.admin_oauth2_permissions_add'
          }
        },
        {
          path: ':id',
          name: 'admin_oauth2_permissions_edit',
          component: () => import('@/modules/admin-oauth2/views/PermissionAddView.vue'),
          meta: {
            title: 'route.admin_oauth2_permissions_edit'
          }
        }
      ]
    },
    {
      path: 'assignments',
      children: [
        {
          path: '',
          name: 'admin_oauth2_assignments',
          component: () => import('@/modules/admin-oauth2/views/AssignmentView.vue'),
          meta: {
            title: 'route.admin_oauth2_assignments'
          }
        },
        {
          path: 'add',
          name: 'admin_oauth2_assignments_add',
          component: () => import('@/modules/admin-oauth2/views/AssignmentAddView.vue'),
          meta: {
            title: 'route.admin_oauth2_assignments_add'
          }
        },
        {
          path: ':id',
          name: 'admin_oauth2_assignments_edit',
          component: () => import('@/modules/admin-oauth2/views/AssignmentAddView.vue'),
          meta: {
            title: 'route.admin_oauth2_assignments_edit'
          }
        }
      ]
    },
    {
      path: 'groups',
      children: [
        {
          path: '',
          name: 'admin_oauth2_groups',
          component: () => import('@/modules/admin-oauth2/views/GroupView.vue'),
          meta: {
            title: 'route.admin_oauth2_groups'
          }
        },
        {
          path: 'add',
          name: 'admin_oauth2_groups_add',
          component: () => import('@/modules/admin-oauth2/views/GroupAddView.vue'),
          meta: {
            title: 'route.admin_oauth2_groups_add'
          }
        },
        {
          path: ':id',
          name: 'admin_oauth2_groups_edit',
          component: () => import('@/modules/admin-oauth2/views/GroupAddView.vue'),
          meta: {
            title: 'route.admin_oauth2_groups_edit'
          }
        }
      ]
    },
    {
      path: 'users',
      children: [
        {
          path: '',
          name: 'admin_oauth2_users',
          component: () => import('@/modules/admin-oauth2/views/UserView.vue'),
          meta: {
            title: 'route.admin_oauth2_users'
          }
        },
        {
          path: 'add',
          name: 'admin_oauth2_users_add',
          component: () => import('@/modules/admin-oauth2/views/UserAddView.vue'),
          meta: {
            title: 'route.admin_oauth2_users_add'
          }
        },
        {
          path: ':id',
          name: 'admin_oauth2_users_edit',
          component: () => import('@/modules/admin-oauth2/views/UserAddView.vue'),
          meta: {
            title: 'route.admin_oauth2_users_edit'
          }
        }
      ]
    }
  ]
}

export default adminOauth2Route
