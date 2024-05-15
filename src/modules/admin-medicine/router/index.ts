import type { RouteRecordRaw } from 'vue-router'

const adminMedicineRoute: RouteRecordRaw[] = [
  {
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
          title: 'route.admin_medicines_add'
        }
      },
      {
        path: ':id',
        name: 'admin_medicines_edit',
        component: () => import('@/modules/admin-medicine/views/MedicineEditView.vue'),
        meta: {
          title: 'route.admin_medicines_edit'
        }
      }
    ]
  },
  {
    path: 'records',
    children: [
      {
        path: '',
        name: 'admin_records',
        component: () => import('@/modules/admin-medicine/views/HealthRecordView.vue'),
        meta: {
          title: 'route.admin_records'
        }
      },
      {
        path: 'add',
        name: 'admin_records_add',
        component: () => import('@/modules/admin-medicine/views/HealthRecordAddView.vue'),
        meta: {
          title: 'route.admin_records_add'
        }
      },
      {
        path: ':id',
        name: 'admin_records_edit',
        component: () => import('@/modules/admin-medicine/views/HealthRecordEditView.vue'),
        meta: {
          title: 'route.admin_records_edit'
        }
      }
    ]
  },
  {
    path: 'prescriptions',
    children: [
      {
        path: '',
        name: 'admin_prescriptions',
        component: () => import('@/modules/admin-medicine/views/PrescriptionView.vue'),
        meta: {
          title: 'route.admin_prescriptions'
        }
      },
      {
        path: 'add',
        name: 'admin_prescriptions_add',
        component: () => import('@/modules/admin-medicine/views/PrescriptionAddView.vue'),
        meta: {
          title: 'route.admin_prescriptions'
        }
      },
      {
        path: ':id',
        name: 'admin_prescriptions_edit',
        component: () => import('@/modules/admin-medicine/views/PrescriptionEditView.vue'),
        meta: {
          title: 'route.admin_prescriptions_edit'
        }
      }
    ]
  }
]
export default adminMedicineRoute
