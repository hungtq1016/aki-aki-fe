import type { RouteRecordRaw } from 'vue-router'

const adminInvoiceRoute: RouteRecordRaw[] = [
  {
    path: 'invoices',
    children: [
      {
        path: '',
        name: 'admin_invoices',
        component: () => import('@/modules/admin-invoice/views/InvoiceView.vue'),
        meta: {
          title: 'route.admin_invoices'
        }
      },
      {
        path: 'add',
        name: 'admin_invoices_add',
        component: () => import('@/modules/admin-invoice/views/InvoiceAddView.vue'),
        meta: {
          title: 'route.admin_invoices_add'
        }
      },
      {
        path: ':id',
        name: 'admin_invoices_edit',
        component: () => import('@/modules/admin-invoice/views/InvoiceEditView.vue'),
        meta: {
          title: 'route.admin_invoices_edit'
        }
      }
    ]
  },
  {
    path: 'serviceprices',
    children: [
      {
        path: '',
        name: 'admin_serviceprices',
        component: () => import('@/modules/admin-invoice/views/ServicePriceView.vue'),
        meta: {
          title: 'route.admin_serviceprices'
        }
      },
      {
        path: 'add',
        name: 'admin_serviceprices_add',
        component: () => import('@/modules/admin-invoice/views/ServicePriceAddView.vue'),
        meta: {
          title: 'route.admin_serviceprices_add'
        }
      },
      {
        path: ':id',
        name: 'admin_serviceprices_edit',
        component: () => import('@/modules/admin-invoice/views/ServicePriceEditView.vue'),
        meta: {
          title: 'route.admin_serviceprices_edit'
        }
      }
    ]
  }
]

export default adminInvoiceRoute
