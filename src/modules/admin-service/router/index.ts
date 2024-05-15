import type { RouteRecordRaw } from 'vue-router'

const adminServiceRoute: RouteRecordRaw[] = [
  {
    path: 'services',
    children: [
      {
        path: '',
        name: 'admin_services',
        component: () => import('@/modules/admin-service/views/ServiceView.vue'),
        meta: {
          title: 'route.admin_services'
        }
      },
      {
        path: 'add',
        name: 'admin_serveices_add',
        component: () => import('@/modules/admin-service/views/ServiceAddView.vue'),
        meta: {
          title: 'route.admin_services_add'
        }
      },
      {
        path: ':id',
        name: 'admin_services_edit',
        component: () => import('@/modules/admin-service/views/ServiceEditView.vue'),
        meta: {
          title: 'route.admin_services_edit'
        }
      }
    ]
  },
  {
    path: 'groupservices',
    children: [
      {
        path: '',
        name: 'admin_groupservices',
        component: () => import('@/modules/admin-service/views/GroupView.vue'),
        meta: {
          title: 'route.admin_groupservices'
        }
      },
      {
        path: 'add',
        name: 'admin_groupservices_add',
        component: () => import('@/modules/admin-service/views/GroupAddView.vue'),
        meta: {
          title: 'route.admin_groupservices_add'
        }
      },
      {
        path: ':id',
        name: 'admin_groupservices_edit',
        component: () => import('@/modules/admin-service/views/GroupEditView.vue'),
        meta: {
          title: 'route.admin_groupservices_edit'
        }
      }
    ]
  }
]

export default adminServiceRoute
