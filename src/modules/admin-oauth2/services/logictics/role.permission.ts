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
    // Fetch current assignments from the server
    const currentAssignments: TAssignment[] = [];
    constPermission.value.forEach(permission => {
        permission.assignments.forEach(assignment => {
            if (assignment.roleId === roleId) {
                currentAssignments.push(assignment);
            }
        });
    });

    const newAssignments: TAssignmentRequest[] = [];
    const toDelete: TAssignment[] = [];

    // Determine assignments to delete
    currentAssignments.forEach(currentAssignment => {
        const found = checkedPermission.value.some(checked => checked.id === currentAssignment.permissionId);
        if (!found) {
            toDelete.push(currentAssignment);
        }
    });

    // Determine assignments to add
    checkedPermission.value.forEach(checked => {
        const found = currentAssignments.some(current => current.permissionId === checked.id);
        if (!found) {
            newAssignments.push({
                id: v4(),
                roleId: roleId,
                permissionId: checked.id,
                status: StatusEnum.Active
            });
        }
    });

    // Perform delete and add operations
    if (toDelete.length > 0) {
        await del<TAssignmentRequest, TAssignment>('/api/assignments', toDelete);
    }

    const response = newAssignments.map(async element => {

        await post<TAssignmentRequest, TAssignment>('/api/assignments', element);
    })

    Promise.all(response).finally(() => {
        successNotification("Thành công!")
        disabled.value = false
    })
};