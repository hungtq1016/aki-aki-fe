import type { RouteRecordRaw } from 'vue-router'

const adminServiceRoute: RouteRecordRaw = {
  path: 'services',
  children: [
    {
      path: '',
      name: 'admin_services',
      component: () => import('@/modules/admin-service/views/ServiceView.vue'),
      meta: {
        title: 'route.admin_blogs'
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
      component: () => import('@/modules/admin-service/views/ServiceAddView.vue'),
      meta: {
        title: 'route.admin_services_edit'
      }
    }
  ]
}

export { adminServiceRoute }
