import { createRouter, createWebHistory } from 'vue-router'
import { adminRoute } from '@/modules/admin/router'
import { clientRoute } from '@/modules/router'
import { oauth2Route } from '@/modules/oauth2/router'
import { i18n, loadLanguageAsync } from '@/core/services/base/translation'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: { path: `/${i18n.global.locale.value}` }
    },
    {
      path: '/:lang',
      component: () => import('@/core/views/MainView.vue'),
      children: [
        ...adminRoute,
        ...clientRoute,
        ...oauth2Route
      ]
    },

  ],
  scrollBehavior() {
    return { top: 0, behavior: "smooth" }
  },
})

router.beforeEach((to, from, next) => {
  const { title, description } = to.meta;
  const defaultTitle = 'AkiAki';
  const defaultDescription = 'AkiAki Hospital';

  document.title = `${i18n.global.t(String(title)) || defaultTitle} | AkiAki`

  const descriptionElement = document.querySelector('head meta[name="description"]')

  descriptionElement?.setAttribute('content', String(description || defaultDescription))
  
  const lang = to.params.lang
  console.log(to.params.lang)
  loadLanguageAsync(lang).then(() => next())
})

export default router
