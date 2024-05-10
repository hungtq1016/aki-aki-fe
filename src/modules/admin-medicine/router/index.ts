import type { RouteRecordRaw } from 'vue-router'

const adminMedicineRoute: RouteRecordRaw = {
  path: 'medicines',
  children: [
    {
      path: '',
      name: 'admin_medicines',
      component: () => import('@/modules/admin-medicine/views/MedicineView.vue'),
      meta: {
        title: 'route.admin_medicines'
      }
    },
    {
      path: 'add',
      name: 'admin_medicines_add',
      component: () => import('@/modules/admin-medicine/views/MedicineAddView.vue'),
      meta: {
        title: 'route.admin_medicines'
      }
    },
    {
      path: 'prescription',
      name: 'admin_medicines_prescription',
      component: () => import('@/modules/admin-medicine/views/PrescriptionView.vue'),
      meta: {
        title: 'route.admin_medicines_prescription'
      }
    },
    {
      path: ':id',
      name: 'admin_medicines_edit',
      component: () => import('@/modules/admin-medicine/views/MedicineAddView.vue'),
      meta: {
        title: 'route.admin_medicines_edit'
      }
    }
  ]
}

export default adminMedicineRoute
