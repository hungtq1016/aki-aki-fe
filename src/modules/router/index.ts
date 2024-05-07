import type { RouteRecordRaw } from "vue-router";

const clientRoute: RouteRecordRaw =
{
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
        },
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
      redirect: { path: 'specialist/khoa-noi' }
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
      path: 'other',
      redirect: { path: 'specialist/khoa-noi' }
    },
    {
      path: 'other/:slug',
      name: 'other',
      component: () => import('@/core/views/SpecialistView.vue'),
      meta: {
        title: 'route.other'
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
    }
  ]
}


export default clientRoute