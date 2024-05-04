import type { RouteRecordRaw } from "vue-router";

const adminRoute: RouteRecordRaw[] = [
    {
        path: 'admin',
        component: () => import('@/core/components/layouts/AdminLayout.vue'),
        children:[
            {
                path: '',
                name:'admin',
                component: () => import('@/modules/admin/views/MainView.vue'),
            },
            {
                path: 'blogs',
                name:'admin-blogs',
                component: () => import('@/modules/admin/views/BlogView.vue'),
            }
        ]
    }
]

export {adminRoute}