import type { RouteRecordRaw } from "vue-router";

const adminBlogRoute: RouteRecordRaw = {
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
            component: () => import('@/modules/admin-blog/views/BlogAddView.vue'),
            meta: {
                title: 'route.admin_blogs_edit'
            }
        },
        {
            path: 'categories',
            children: [
                {
                    path: '',
                    name: 'admin_blogs_categories',
                    component: () => import('@/modules/admin-blog/views/CategoryView.vue'),
                    meta: {
                        title: 'route.admin_blogs_categories'
                    }
                },
                {
                    path: 'add',
                    name: 'admin_blogs_categories_add',
                    component: () => import('@/modules/admin-blog/views/CategoryAddView.vue'),
                    meta: {
                        title: 'route.admin_blogs_categories_add'
                    }
                },
                {
                    path: ':id',
                    name: 'admin_blogs_categories_edit',
                    component: () => import('@/modules/admin-blog/views/CategoryAddView.vue'),
                    meta: {
                        title: 'route.admin_blogs_categories_edit'
                    }
                }
            ]
        }
    ]
}


export default adminBlogRoute