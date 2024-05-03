import type { RouteRecordRaw } from "vue-router";

const adminRoute: RouteRecordRaw[] = [
    {
        path: 'admin',
        component: () => import('@/core/components/layouts/AdminLayout.vue'),
        children:[
            {
                path: '',
                name:'admin',
                component: () => import('@/core/views/AboutView.vue'),
            }
        ]
    }
]

export {adminRoute}