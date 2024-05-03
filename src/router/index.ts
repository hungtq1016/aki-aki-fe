import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/core/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/core/views/AboutView.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('@/core/views/ServiceView.vue')
    },
    {
      path: '/specialist',
      redirect: {path:'/specialist/khoa-noi'}
    },
    {
      path: '/specialist/:slug',
      name: 'specialist',
      component: () => import('@/core/views/SpecialistView.vue')
    },
    {
      path: '/other',
      redirect: {path:'/specialist/khoa-noi'}
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
      children:[
        {
          path: '',
          name: 'blogs',
          component: () => import('@/modules/blog/views/HomeView.vue'),
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
})

export default router
