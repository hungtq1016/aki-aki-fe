import { ref, watch } from "vue";

import { init_pagination, paginationOptions } from './../data/tag';

import { get } from '@/core/services/helpers/request.helper';

import type { TPagination, TPaginationResponse } from '@/core/models/type';
import type { TTag } from "../../models/type";
import { EnableEnum } from "@/core/models/enum";

export const items = ref<TTag[]>([
    {
        id: "1",
        name: "mock-data",
        type:"mock-data",
        createdAt: "2022-01-01",
        updatedAt: "2024-01-01",
        enable: EnableEnum.ALL
    }
]);
export const pagination = ref<TPagination>(init_pagination);
export const fetch = async () => {
    
    const response = await get<TPaginationResponse<TTag>>("/api/tags/page", paginationOptions.value);
    items.value = response?.data.data || [];
    pagination.value = response?.data || init_pagination;

};

watch(paginationOptions, async () => {
    await fetch();
}, { deep: true });