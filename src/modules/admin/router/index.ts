import adminBlogRoute from '@/modules/admin-blog/router'
import adminMedicineRoute from '@/modules/admin-medicine/router'
import adminCategoryRoute from "@/modules/admin-category/router";
import { adminTagRoute } from "@/modules/admin-tag/router";
import { adminServiceRoute } from "@/modules/admin-service/router";
import { adminBranchRoute } from "@/modules/admin-branch/route";

import hasAdminPermission from "@/core/services/middlewares/hasAdminPermission";

import type { RouteRecordRaw } from "vue-router";

const adminRoute: RouteRecordRaw[] = [
    {
        path: 'admin',
        component: () => import('@/core/components/layouts/AdminLayout.vue'),
        beforeEnter: hasAdminPermission,
        children:[
            {
                path: '',
                name:'admin',
                component: () => import('@/modules/admin/views/MainView.vue'),
                beforeEnter: hasAdminPermission,
                meta: {
                    title: 'route.admin'
                }
            },
            {
                path: 'message',
                name:'admin_message',
                beforeEnter: hasAdminPermission,
                component: () => import('@/modules/admin-message/views/MessageView.vue'),
                meta: {
                    title: 'route.admin_message'
                }
            },
            adminBlogRoute,
            adminMedicineRoute,
            adminCategoryRoute,
            adminTagRoute,
            adminServiceRoute,
            adminBranchRoute,
        ]
    }
]

export {adminRoute}