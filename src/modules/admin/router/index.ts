import adminBlogRoute from '@/modules/admin-blog/router'
import adminMedicineRoute from '@/modules/admin-medicine/router'
import adminOauth2Route from '@/modules/admin-oauth2/router'
import adminServiceRoute from '@/modules/admin-service/router'
import adminScheduleRoute from '@/modules/admin-schedule/router'
import adminUserRoute from '@/modules/admin-user/router'
import { adminUrlRoute, adminBranchRoute } from '@/modules/admin-branch/route'

import type { RouteRecordRaw } from 'vue-router'
import hasAdminPermission from '@/core/services/middlewares/hasAdminPermission'

const adminRoute: RouteRecordRaw = {
  path: 'admin',
  component: () => import('@/core/components/layouts/AdminLayout.vue'),
  // beforeEnter:hasAdminPermission,
  children: [
    {
      path: '',
      name: 'admin',
      component: () => import('@/modules/admin/views/MainView.vue'),
      meta: {
        title: 'route.admin'
      }
    },
    {
      path: 'message',
      name: 'admin_message',
      component: () => import('@/modules/admin-message/views/MessageView.vue'),
      meta: {
        title: 'route.admin_message'
      }
    },
    adminBlogRoute,
    adminMedicineRoute,
    adminServiceRoute,
    adminUrlRoute,
    adminBranchRoute,
    adminOauth2Route,
    adminScheduleRoute,
    adminUserRoute
  ]
}

export default adminRoute
