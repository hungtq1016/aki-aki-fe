import type { RouteRecordRaw } from 'vue-router'

const clientRoute: RouteRecordRaw = {
  path: '/',
  component: () => import('@/core/components/layouts/DefaultLayout.vue'),
  children: [
    {
      path: '',
      name: 'home',
      component: () => import('@/core/views/HomeView.vue'),
      meta: {
        title: 'route.home'
      }
    },
    {
      path: 'about',
      component: () => import('@/core/views/AboutView.vue'),
      children: [
        {
          path: '',
          name: 'about',
          component: () => import('@/modules/about/views/MainView.vue'),
          meta: {
            title: 'route.about'
          }
        },
        {
          path: 'customer',
          name: 'customer',
          component: () => import('@/modules/about/views/CustomerView.vue'),
          meta: {
            title: 'route.customer'
          }
        },
        {
          path: 'introduction',
          name: 'introduction',
          component: () => import('@/modules/about/views/IntroductionView.vue'),
          meta: {
            title: 'route.introduction'
          }
        },
        {
          path: 'equipment',
          name: 'equipment',
          component: () => import('@/modules/about/views/EquipmentView.vue'),
          meta: {
            title: 'route.equipment'
          }
        },
        {
          path: 'team',
          name: 'team',
          component: () => import('@/modules/about/views/TeamView.vue'),
          meta: {
            title: 'route.team'
          }
        }
      ]
    },
    {
      path: 'service',
      name: 'service',
      component: () => import('@/core/views/ServiceView.vue'),
      meta: {
        title: 'route.service'
      }
    },
    {
      path: 'specialist',
      component: () => import('@/modules/service/views/ServiceView.vue'),
    },
    {
      path: 'specialist/:slug',
      name: 'specialist',
      component: () => import('@/core/views/SpecialistView.vue'),
      meta: {
        title: 'route.specialist'
      }
    },
    {
      path: 'others',
      component: () => import('@/modules/service/views/ServiceView.vue'),
    },
    {
      path: 'others/:slug',
      name: 'others',
      component: () => import('@/core/views/SpecialistView.vue'),
      meta: {
        title: 'route.others'
      }
    },
    {
      path: 'contact',
      name: 'contact',
      component: () => import('@/core/views/ContactView.vue'),
      meta: {
        title: 'route.contact'
      }
    },
    {
      path: 'profile',
      component: () => import('@/core/views/ProfileView.vue'),
      children: [
        {
          path: '',
          name: 'profile',
          component: () => import('@/modules/profile/views/CustomProfileView.vue'),
          meta: {
            title: 'route.profile'
          }
        },
        {
          path: 'schedule',
          name: 'schedule',
          component: () => import('@/modules/profile/views/CalendarView.vue'),
          meta: {
            title: 'route.schedule'
          }
        },
        {
          path: 'health-record',
          children:[
            {
              path: '',
              name: 'health_record',
              component: () => import('@/modules/profile/views/HealthRecordView.vue'),
              meta: {
                title: 'route.health_record'
              }
            },
            {
              path: ':id',
              name: 'health_record_detail',
              component: () => import('@/modules/profile/views/HealthRecordDetailView.vue'),
              meta: {
                title: 'route.health_record_detail'
              }
            }
          ]
        },
        {
          path: 'invoice',
          children:[
            {
              path: '',
              name: 'invoice',
              component: () => import('@/modules/profile/views/InvoiceView.vue'),
              meta: {
                title: 'route.invoice'
              }
            },
            {
              path: ':id',
              name: 'invoice_detail',
              component: () => import('@/modules/profile/views/InvoiceDetailView.vue'),
              meta: {
                title: 'route.invoice_detail'
              }
            }
          ]
        },
        {
          path: 'treatment',
          children:[
            {
              path: '',
              name: 'treatment',
              component: () => import('@/modules/profile/views/TreatmentView.vue'),
              meta: {
                title: 'route.treatment'
              }
            },
            {
              path: ':id',
              name: 'treatment_detail',
              component: () => import('@/modules/profile/views/TreatmentDetailView.vue'),
              meta: {
                title: 'route.treatment_detail'
              }
            }
          ]
        }
      ]
    },
    {
      path: 'blogs',
      component: () => import('@/core/views/BlogView.vue'),
      children: [
        {
          path: '',
          name: 'blogs',
          component: () => import('@/modules/blog/views/HomeView.vue'),
          meta: {
            title: 'route.blogs'
          }
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('@/modules/blog/views/SearchView.vue'),
          meta: {
            title: 'route.search'
          }
        },
        {
          path: 'detail/:slug',
          name: 'blogs_detail',
          component: () => import('@/modules/blog/views/DetailView.vue'),
          meta: {
            title: 'route.blogs_detail'
          }
        },
        {
          path: ':slug',
          name: 'blogs_content',
          component: () => import('@/modules/blog/views/ContentView.vue'),
          meta: {
            title: 'route.blogs_content'
          }
        }
      ]
    },
    {
      path: '/helloworld',
      name: 'helloworld',
      component: () => import('@/core/views/HelloworldView.vue'),
      meta: {
        title: 'helloworld'
      }
    },
  ]
}

export default clientRoute
