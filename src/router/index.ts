import { createRouter, createWebHistory } from 'vue-router'
import { adminRoute } from '@/modules/admin/router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/core/views/MainView.vue'),
      children: [
        ...adminRoute,
        {
          path: '',
          component: () => import('@/core/components/layouts/DefaultLayout.vue'),
          children: [
            {
              path: '',
            name: 'home',
            component: () => import('@/core/views/HomeView.vue'),
            },
            {
              path: '/about',
              component: () => import('@/core/views/AboutView.vue'),
              children: [
                {
                  path: '',
                  name: 'about',
                  component: () => import('@/modules/about/views/MainView.vue'),
                },
                {
                  path: 'customer',
                  name: 'customer',
                  component: () => import('@/modules/about/views/CustomerView.vue'),
                },
                {
                  path: 'introduction',
                  name: 'introduction',
                  component: () => import('@/modules/about/views/IntroductionView.vue'),
                },
                {
                  path: 'equipment',
                  name: 'equipment',
                  component: () => import('@/modules/about/views/EquipmentView.vue'),
                },
                {
                  path: 'team',
                  name: 'team',
                  component: () => import('@/modules/about/views/TeamView.vue'),
                },
              ]
            },
            {
              path: '/service',
              name: 'service',
              component: () => import('@/core/views/ServiceView.vue')
            },
            {
              path: '/specialist',
              redirect: { path: '/specialist/khoa-noi' }
            },
            {
              path: '/specialist/:slug',
              name: 'specialist',
              component: () => import('@/core/views/SpecialistView.vue')
            },
            {
              path: '/other',
              redirect: { path: '/specialist/khoa-noi' }
            },
            {
              path: '/other/:slug',
              name: 'other',
              component: () => import('@/core/views/SpecialistView.vue')
            },
            {
              path: '/contact',
              name: 'contact',
              component: () => import('@/core/views/ContactView.vue')
            },
            {
              path: '/blogs',
              component: () => import('@/core/views/BlogView.vue'),
              children: [
                {
                  path: '',
                  name: 'blogs',
                  component: () => import('@/modules/blog/views/HomeView.vue'),
                },
                {
                  path: 'search',
                  name: 'search',
                  component: () => import('@/modules/blog/views/SearchView.vue'),
                },
                {
                  path: 'detail/:slug',
                  name: 'blogs-detail',
                  component: () => import('@/modules/blog/views/DetailView.vue'),
                },
                {
                  path: ':slug',
                  name: 'blogs-content',
                  component: () => import('@/modules/blog/views/ContentView.vue'),
                }
              ]
            }
          ]
        },

      ]
    },

  ],
  scrollBehavior() {
    return { top: 0, behavior: "smooth" }
  },
})

export default router
