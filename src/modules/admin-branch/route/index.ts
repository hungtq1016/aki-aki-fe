import type { RouteRecordRaw } from "vue-router";

const adminBranchRoute: RouteRecordRaw = {
    path: 'branches',
    children: [
        {
            path: '',
            name: 'branches',
            component: () => import('@/modules/admin-branch/views/BranchView.vue'),
            meta: {
                title: 'route.branches'
            }
        },
        {
            path: 'add',
            name: 'admin_branchies_add',
            component: () => import('@/modules/admin-branch/views/BranchAddView.vue'),
            meta: {
                title: 'route.admin_branches_add'
            }
        },
        {
            path: ':id',
            name: 'admin_branches_edit',
            component: () => import('@/modules/admin-branch/views/BranchAddView.vue'),
            meta: {
                title: 'route.admin_branches_edit'
            }
        }
    ]
}


export { adminBranchRoute }