import { reactive, ref, watch } from "vue";

import { init_pagination, paginationOptions } from '../data/medicine';

import { get } from '@/core/services/helpers/request.helper';

import type { TPagination, TPaginationResponse } from '@/core/models/type';
import type { TMedicine } from "../../models/type";
import { EnableEnum } from "@/core/models/enum";

export const items = ref<TMedicine[]>([
    {
        "name": "Paracetamol",
        "slug": "paracetamol",
        "brand": "CÔNG TY CỔ PHẦN DƯỢC - VẬT TƯ Y TẾ THANH HÓA - THEPHACO",
        "desc": "Paracetamol, còn được gọi là acetaminophen, là một loại thuốc có tác dụng hạ sốt và giảm đau, tuy nhiên không như aspirin, thuốc không hoặc ít có tác dụng chống viêm. Bằng chứng về khả năng hạ sốt trên đối tượng là trẻ em của thuốc này vẫn còn yếu, chưa rõ ràng.",
        "id": "599dee55-d93e-428b-716c-08dc6f4462dd",
        "enable": EnableEnum.ALL,
        "createdAt": "2024-05-08T09:51:09.42",
        "updatedAt": "2024-05-08T09:51:09.42"
    }
]);
export const pagination = ref<TPagination>({ ...init_pagination });
export const fetch = async () => {
    
    const response = await get<TPaginationResponse<TMedicine>>("/api/medicines/page", paginationOptions.value);
    items.value = response?.data.data || [];
    pagination.value = response?.data || { ...init_pagination };

};

watch(paginationOptions, async () => {
    await fetch();
}, { deep: true });