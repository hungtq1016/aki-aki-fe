import type { RouteRecordRaw } from 'vue-router'

const adminFaqRoute: RouteRecordRaw[] = [
  {
    path: 'faqs',
    children: [
      {
        path: '',
        name: 'admin_faqs',
        component: () => import('@/modules/admin-faq/views/FaqView.vue'),
        meta: {
          title: 'route.admin_faqs'
        }
      },
      {
        path: 'add',
        name: 'admin_faqs_add',
        component: () => import('@/modules/admin-faq/views/FaqAddView.vue'),
        meta: {
          title: 'route.admin_faqs_add'
        }
      },
      {
        path: ':id',
        name: 'admin_faqs_edit',
        component: () => import('@/modules/admin-faq/views/FaqEditView.vue'),
        meta: {
          title: 'route.admin_faqs_edit'
        }
      }
    ]
  }

]

export default adminFaqRoute
