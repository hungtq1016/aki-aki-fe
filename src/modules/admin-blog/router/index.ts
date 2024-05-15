import type { RouteRecordRaw } from 'vue-router'

const adminBlogRoute: RouteRecordRaw[] = [
  {
    path: 'blogs',
    children: [
      {
        path: '',
        name: 'admin_blogs',
        component: () => import('@/modules/admin-blog/views/BlogView.vue'),
        meta: {
          title: 'route.admin_blogs'
        }
      },
      {
        path: 'add',
        name: 'admin_blogs_add',
        component: () => import('@/modules/admin-blog/views/BlogAddView.vue'),
        meta: {
          title: 'route.admin_blogs_add'
        }
      },
      {
        path: ':id',
        name: 'admin_blogs_edit',
        component: () => import('@/modules/admin-blog/views/BlogEditView.vue'),
        meta: {
          title: 'route.admin_blogs_edit'
        }
      }
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: '',
        name: 'admin_categories',
        component: () => import('@/modules/admin-blog/views/CategoryView.vue'),
        meta: {
          title: 'route.admin_categories'
        }
      },
      {
        path: 'add',
        name: 'admin_categories_add',
        component: () => import('@/modules/admin-blog/views/CategoryAddView.vue'),
        meta: {
          title: 'route.admin_categories_add'
        }
      },
      {
        path: ':id',
        name: 'admin_categories_edit',
        component: () => import('@/modules/admin-blog/views/CategoryEditView.vue'),
        meta: {
          title: 'route.admin_categories_edit'
        }
      }
    ]
  },
  {
    path: 'tags',
    children: [
      {
        path: '',
        name: 'admin_tags',
        component: () => import('@/modules/admin-blog/views/TagView.vue'),
        meta: {
          title: 'route.admin_tags'
        }
      },
      {
        path: 'add',
        name: 'admin_tags_add',
        component: () => import('@/modules/admin-blog/views/TagAddView.vue'),
        meta: {
          title: 'route.admin_tags_add'
        }
      },
      {
        path: ':id',
        name: 'admin_tags_edit',
        component: () => import('@/modules/admin-blog/views/TagEditView.vue'),
        meta: {
          title: 'route.admin_tags_edit'
        }
      }
    ]
  },
  {
    path: 'comments',
    children: [
      {
        path: '',
        name: 'admin_comments',
        component: () => import('@/modules/admin-blog/views/CommentView.vue'),
        meta: {
          title: 'route.admin_comments'
        }
      },
      {
        path: ':id',
        redirect: { name: 'admin_comments'}
      }
    ]
  }
]

export default adminBlogRoute
