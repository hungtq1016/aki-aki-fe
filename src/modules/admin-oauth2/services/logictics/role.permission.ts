import { ref } from "vue";
import type { TAssignment, TAssignmentRequest, TPermissionResponse } from '../../models/type';
import { del, get, post } from '@/core/services/helpers/request.helper';
import { v4 } from "uuid";
import { StatusEnum } from "@/core/models/enum";
import { successNotification } from "@/core/services/helpers/alert.helper";

export const permissions = ref<TPermissionResponse[]>([]);
export const checkedPermission = ref<TPermissionResponse[]>([]);
export const constPermission = ref<TPermissionResponse[]>([]);
export const disabled = ref(false)
export const search = ref('');

export const fetch = async () => {
    await get<TPermissionResponse[]>('/api/permissions').then((response) => {
        permissions.value = response?.data || [];
    });
}

export const fetchChecked = async (roleId: string) => {
    await get<TPermissionResponse[]>('/api/permissions/ByRoleId/' + roleId).then((response) => {
        checkedPermission.value = response?.data || [];
        constPermission.value = [...checkedPermission.value]
    });
}

export const submit = async (roleId: string) => {
    disabled.value = true
    let assignments: TAssignment[] = [];
   
    // Gather all assignments related to the roleId
    constPermission.value.forEach(permission => {
        const filteredAssignments = permission.assignments.filter(assignment => assignment.roleId === roleId);
        assignments = assignments.concat(filteredAssignments);
    });
   
    // Delete all gathered assignments
    if (assignments.length > 0) {
        await del<TAssignmentRequest, TAssignment>('/api/assignments', assignments);
    }

    // Post the checked assignments
    const response = checkedPermission.value.map(async element => {
        const payload: TAssignmentRequest = {
            id: v4(),
            roleId: roleId,
            permissionId: element.id,
            status: StatusEnum.Active
        };
        await post<TAssignmentRequest, TAssignment>('/api/assignments', payload);
    })

    Promise.all(response).finally(()=>{
        successNotification("Thành công!")
        disabled.value = false
    })
}
