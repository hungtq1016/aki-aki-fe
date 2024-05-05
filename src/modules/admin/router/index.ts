import type { RouteRecordRaw } from "vue-router";
import {adminBlogRoute} from '@/modules/admin-blog/router'
import {adminMedicineRoute} from '@/modules/admin-medicine/router'
const adminRoute: RouteRecordRaw[] = [
    {
        path: 'admin',
        component: () => import('@/core/components/layouts/AdminLayout.vue'),
        children:[
            {
                path: '',
                name:'admin',
                component: () => import('@/modules/admin/views/MainView.vue'),
                meta: {
                    title: 'route.admin'
                }
            },
            {
                path: 'message',
                name:'message',
                component: () => import('@/modules/admin-message/views/MessageView.vue'),
                meta: {
                    title: 'route.admin'
                }
            },
            {...adminBlogRoute},
            {...adminMedicineRoute},
        
        ]
    }
]

export {adminRoute}