import type { RouteRecordRaw } from "vue-router";

const adminCategoryRoute: RouteRecordRaw = {
    path: 'categories',
    children: [
        {
            path: '',
            name: 'admin_categories',
            component: () => import('@/modules/admin-category/views/CategoryView.vue'),
            meta: {
                title: 'route.admin_categories'
            }
        },
        {
            path: 'add',
            name: 'admin_categories_add',
            component: () => import('@/modules/admin-category/views/CategoryAddView.vue'),
            meta: {
                title: 'route.admin_categories_add'
            }
        },
        {
            path: ':id',
            name: 'admin_categories_edit',
            component: () => import('@/modules/admin-category/views/CategoryAddView.vue'),
            meta: {
                title: 'route.admin_categories_edit'
            }
        }
    ]
}


export default adminCategoryRoute;