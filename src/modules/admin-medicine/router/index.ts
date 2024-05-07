import type { RouteRecordRaw } from "vue-router";

const adminMedicineRoute: RouteRecordRaw = {
    path: 'medicine',
    children: [
        {
            path: '',
            name: 'admin_medicine',
            component: () => import('@/modules/admin-medicine/views/MedicineView.vue'),
            meta: {
                title: 'route.admin_medicine'
            }
        },
        {
            path: 'prescription',
            name: 'admin_medicine_prescription',
            component: () => import('@/modules/admin-medicine/views/PrescriptionView.vue'),
            meta: {
                title: 'route.admin_medicine_prescription'
            }
        },
        {
            path: ':id',
            name: 'admin_blogs_edit',
            component: () => import('@/modules/admin-blog/views/BlogAddView.vue'),
            meta: {
                title: 'route.admin_blogs_edit'
            }
        }
    ]
}


export default adminMedicineRoute;