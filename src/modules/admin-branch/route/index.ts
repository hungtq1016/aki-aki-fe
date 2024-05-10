import type { RouteRecordRaw } from 'vue-router'

const adminBranchRoute: RouteRecordRaw = {
  path: 'branches',
  children: [
    {
      path: '',
      name: 'admin_branches',
      component: () => import('@/modules/admin-branch/views/BranchView.vue'),
      meta: {
        title: 'route.branches'
      }
    },
    {
      path: 'add',
      name: 'admin_branches_add',
      component: () => import('@/modules/admin-branch/views/BranchAddView.vue'),
      meta: {
        title: 'route.admin_branches_add'
      }
    },
    {
      path: ':id',
      name: 'admin_branches_edit',
      component: () => import('@/modules/admin-branch/views/BranchAddView.vue'),
      meta: {
        title: 'route.admin_branches_edit'
      }
    },
    {
      path: 'types',
      children: [
        {
          path: '',
          name: 'admin_branches_types',
          component: () => import('@/modules/admin-branch/views/TypeView.vue'),
          meta: {
            title: 'route.admin_branches_types'
          }
        },
        {
          path: 'add',
          name: 'admin_branches_types_add',
          component: () => import('@/modules/admin-branch/views/TypeAddView.vue'),
          meta: {
            title: 'route.admin_branches_types_add'
          }
        },
        {
          path: ':id',
          name: 'admin_branches_types_edit',
          component: () => import('@/modules/admin-branch/views/TypeAddView.vue'),
          meta: {
            title: 'route.admin_branches_types_edit'
          }
        }
      ]
    }
  ]
}

export { adminBranchRoute }
