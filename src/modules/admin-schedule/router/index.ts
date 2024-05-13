import type { RouteRecordRaw } from 'vue-router'

const adminScheduleRoute: RouteRecordRaw = {
  path: 'schedules',
  children: [
    {
      path: '',
      name: 'admin_schedules',
      component: () => import('@/modules/admin-schedule/views/ScheduleView.vue'),
      meta: {
        title: 'route.admin_schedules'
      }
    },
    {
      path: 'add',
      name: 'admin_schedules_add',
      component: () => import('@/modules/admin-schedule/views/ScheduleAddView.vue'),
      meta: {
        title: 'route.admin_schedules_add'
      }
    },
    {
      path: ':id',
      name: 'admin_schedules_edit',
      component: () => import('@/modules/admin-schedule/views/ScheduleAddView.vue'),
      meta: {
        title: 'route.admin_schedules_edit'
      }
    },
  ]
}

export default adminScheduleRoute
