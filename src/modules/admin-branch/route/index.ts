import type { RouteRecordRaw } from 'vue-router'

const adminBranchRoute: RouteRecordRaw[] = [
  {
    path: 'urls',
    children: [
      {
        path: '',
        name: 'admin_urls',
        component: () => import('@/modules/admin-branch/views/UrlView.vue'),
        meta: {
          title: 'route.urls'
        }
      },
      {
        path: 'add',
        name: 'admin_urls_add',
        component: () => import('@/modules/admin-branch/views/UrlAddView.vue'),
        meta: {
          title: 'route.admin_urls_add'
        }
      },
      {
        path: ':id',
        name: 'admin_urls_edit',
        component: () => import('@/modules/admin-branch/views/UrlEditView.vue'),
        meta: {
          title: 'route.admin_urls_edit'
        }
      }
    ]
  },
  {
    path: 'groupurls',
    children: [
      {
        path: '',
        name: 'admin_groupurls',
        component: () => import('@/modules/admin-branch/views/GroupView.vue'),
        meta: {
          title: 'route.admin_groupurls'
        }
      },
      {
        path: 'add',
        name: 'admin_groupurls_add',
        component: () => import('@/modules/admin-branch/views/GroupAddView.vue'),
        meta: {
          title: 'route.admin_groupurls_add'
        }
      },
      {
        path: ':id',
        name: 'admin_groupurls_edit',
        component: () => import('@/modules/admin-branch/views/GroupEditView.vue'),
        meta: {
          title: 'route.admin_groupurls_edit'
        }
      }
    ]
  },
  {
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
        component: () => import('@/modules/admin-branch/views/BranchEditView.vue'),
        meta: {
          title: 'route.admin_branches_edit'
        }
      },
      
    ]
  },
  {
    path: 'branchtypes',
    children: [
      {
        path: '',
        name: 'admin_branchtypes',
        component: () => import('@/modules/admin-branch/views/TypeView.vue'),
        meta: {
          title: 'route.admin_branchtypes'
        }
      },
      {
        path: 'add',
        name: 'admin_branchtypes_add',
        component: () => import('@/modules/admin-branch/views/TypeAddView.vue'),
        meta: {
          title: 'route.admin_branchtypes_add'
        }
      },
      {
        path: ':id',
        name: 'admin_branchtypes_edit',
        component: () => import('@/modules/admin-branch/views/TypeEditView.vue'),
        meta: {
          title: 'route.admin_branchtypes_edit'
        }
      }
    ]
  }
]

export default adminBranchRoute 