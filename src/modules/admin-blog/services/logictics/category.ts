import { reactive, ref, watch } from "vue";

import { init_pagination, paginationOptions } from './../data/category';

import { get, post } from '@/core/services/helpers/request.helper';

import type { TPagination, TPaginationResponse } from '@/core/models/type';
import type { TCategory, TCategoryRequest } from "../../models/type";
import { EnableEnum } from "@/core/models/enum";
import { v4 } from "uuid";
import type { Rules } from "async-validator";
import { slugify } from "@/core/services/utils/util.string";
import { successNotification } from "@/core/services/helpers/alert.helper";
import { resetObject } from "@/core/services/utils/util.object";

export const items = ref<TCategory[]>([
    {
        id: "1",
        title: "mock-data",
        slug:"mock-data",
        createdAt: "2022-01-01",
        updatedAt: "2024-01-01",
        enable: Boolean(EnableEnum.ALL)
    }
]);
export const pagination = ref<TPagination>(init_pagination);
export const fetch = async () => {
    
    const response = await get<TPaginationResponse<TCategory>>("/api/categories/page", paginationOptions.value);
    items.value = response?.data.data || [];
    pagination.value = response?.data || init_pagination;

};

export const init_state: TCategoryRequest = {
    id: v4(),
    title: "",
    slug: "",
    enable: Boolean(EnableEnum.ALL)
}

export const state = reactive<TCategoryRequest>({...init_state})

watch(state, (newValue) => {
    state.slug = slugify(newValue.title)
}, { deep: true })


export const rules: Rules = {
    title : {
        type:'string',
        min: 5,
        max: 255,
        required: true
    }
}

export const submit = async () => {
    const data = await post<TCategoryRequest,TCategory>("/api/categories",state)
    if (data?.data) {
        resetObject(state, init_state)
        successNotification(data.message)
    }
}

watch(paginationOptions, async () => {
    await fetch();
}, { deep: true });