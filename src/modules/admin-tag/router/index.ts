import type { RouteRecordRaw } from "vue-router";

const adminTagRoute: RouteRecordRaw = {
    path: 'tags',
    children: [
        {
            path: '',
            name: 'admin_tags',
            component: () => import('@/modules/admin-tag/views/TagView.vue'),
            meta: {
                title: 'route.admin_tags'
            }
        },
        {
            path: 'add',
            name: 'admin_tags_add',
            component: () => import('@/modules/admin-tag/views/TagAddView.vue'),
            meta: {
                title: 'route.admin_tags_add'
            }
        },
        {
            path: ':id',
            name: 'admin_tags_edit',
            component: () => import('@/modules/admin-tag/views/TagAddView.vue'),
            meta: {
                title: 'route.admin_tags_edit'
            }
        }
    ]
}


export { adminTagRoute }