import { ref, watch } from "vue";

import { init_pagination, paginationOptions } from './../data/branch';

import { get } from '@/core/services/helpers/request.helper';

import type { TPagination, TPaginationResponse } from '@/core/models/type';
import type { TBranch } from "../../models/type";
import { EnableEnum } from "@/core/models/enum";

export const items = ref<TBranch[]>([
    {
        id: "1",
        name: "mock-data",
        type:"mock-data",
        address: "mock-data",
        phone:"123",
        createdAt: "2022-01-01",
        updatedAt: "2024-01-01",
        enable: EnableEnum.ALL
    }
]);
export const pagination = ref<TPagination>({ ...init_pagination });
export const fetch = async () => {
    
    const response = await get<any, TPaginationResponse<TBranch>>("/api/branches", paginationOptions.value);
    items.value = response?.data.data || [];
    pagination.value = response?.data || { ...init_pagination };

};

watch(paginationOptions, async () => {
    await fetch();
}, { deep: true });