import type { RouteRecordRaw } from "vue-router";

const adminCategoryRoute: RouteRecordRaw = {
    path: 'category',
    children: [
        {
            path: '',
            name: 'categories',
            component: () => import('@/modules/admin-category/views/CategoryView.vue'),
            meta: {
                title: 'route.categories'
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


export { adminCategoryRoute }