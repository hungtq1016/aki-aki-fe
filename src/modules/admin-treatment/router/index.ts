import type { RouteRecordRaw } from 'vue-router'

const adminTreatmentRoute: RouteRecordRaw[] = [
  {
    path: 'treatmentplants',
    children: [
      {
        path: '',
        name: 'admin_treatmentplants',
        component: () => import('@/modules/admin-treatment/views/TreatmentView.vue'),
        meta: {
          title: 'route.admin_treatmentplants'
        }
      },
      {
        path: 'add',
        name: 'admin_treatmentplants_add',
        component: () => import('@/modules/admin-treatment/views/TreatmentAddView.vue'),
        meta: {
          title: 'route.admin_treatmentplants_add'
        }
      },
      {
        path: ':id',
        name: 'admin_treatmentplants_edit',
        component: () => import('@/modules/admin-treatment/views/TreatmentEditView.vue'),
        meta: {
          title: 'route.admin_treatmentplants_edit'
        }
      }
    ]
  },
  {
    path: 'activities',
    children: [
      {
        path: '',
        name: 'admin_activities',
        component: () => import('@/modules/admin-treatment/views/ActivityView.vue'),
        meta: {
          title: 'route.admin_activities'
        }
      },
      {
        path: 'add',
        name: 'admin_activities_add',
        component: () => import('@/modules/admin-treatment/views/ActivityAddView.vue'),
        meta: {
          title: 'route.admin_activities_add'
        }
      },
      {
        path: ':id',
        name: 'admin_activities_edit',
        component: () => import('@/modules/admin-treatment/views/ActivityEditView.vue'),
        meta: {
          title: 'route.admin_activities_edit'
        }
      }
    ]
  }
]

export default adminTreatmentRoute
