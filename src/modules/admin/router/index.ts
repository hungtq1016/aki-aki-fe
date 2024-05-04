import type { RouteRecordRaw } from "vue-router";

const adminRoute: RouteRecordRaw[] = [
    {
        path: 'admin',
        component: () => import('@/core/components/layouts/AdminLayout.vue'),
        children:[
            {
                path: '',
                name:'dashboard',
                component: () => import('@/modules/admin/views/MainView.vue'),
                meta: {
                    title: 'route.dashboard'
                }
            },
            {
                path: 'blogs',
                name:'admin_blogs',
                component: () => import('@/modules/admin/views/BlogView.vue'),
                meta: {
                    title: 'route.admin_blogs'
                }
            }
        ]
    }
]

export {adminRoute}