import type { RouteRecordRaw } from 'vue-router'

const adminOauth2Route: RouteRecordRaw[] = [
  {
    path: 'roles',
    children: [
      {
        path: '',
        name: 'admin_roles',
        component: () => import('@/modules/admin-oauth2/views/RoleView.vue'),
        meta: {
          title: 'route.admin_roles'
        }
      },
      {
        path: 'add',
        name: 'admin_roles_add',
        component: () => import('@/modules/admin-oauth2/views/RoleAddView.vue'),
        meta: {
          title: 'route.admin_roles_add'
        }
      },
      {
        path: ':id',
        name: 'admin_roles_edit',
        component: () => import('@/modules/admin-oauth2/views/RoleEditView.vue'),
        meta: {
          title: 'route.admin_roles_edit'
        }
      }
    ]
  },
  {
    path: 'permissions',
    children: [
      {
        path: '',
        name: 'admin_permissions',
        component: () => import('@/modules/admin-oauth2/views/PermissionView.vue'),
        meta: {
          title: 'route.admin_permissions'
        }
      },
      {
        path: 'add',
        name: 'admin_permissions_add',
        component: () => import('@/modules/admin-oauth2/views/PermissionAddView.vue'),
        meta: {
          title: 'route.admin_permissions_add'
        }
      },
      {
        path: ':id',
        name: 'admin_permissions_edit',
        component: () => import('@/modules/admin-oauth2/views/PermissionEditView.vue'),
        meta: {
          title: 'route.admin_permissions_edit'
        }
      }
    ]
  },
  {
    path: 'assignments',
    children: [
      {
        path: '',
        name: 'admin_assignments',
        component: () => import('@/modules/admin-oauth2/views/AssignmentView.vue'),
        meta: {
          title: 'route.admin_assignments'
        }
      },
      {
        path: 'add',
        name: 'admin_assignments_add',
        component: () => import('@/modules/admin-oauth2/views/AssignmentAddView.vue'),
        meta: {
          title: 'route.admin_assignments_add'
        }
      },
      {
        path: ':id',
        redirect:{name:'admin_assignments'}
      }
    ]
  }
]

export default adminOauth2Route
