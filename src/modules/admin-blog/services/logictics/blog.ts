import { reactive, ref, watch, type Ref } from "vue";
import { v4 } from 'uuid';

import { init_pagination, paginationOptions } from './../data/blog';

import { get, post, upload } from '@/core/services/helpers/request.helper';

import type { TPagination, TPaginationResponse } from '@/core/models/type';
import type { TBlog, TBlogRequest, TCategory, TFileResponse, TTag } from "../../models/type";
import { EnableEnum } from "@/core/models/enum";
import type { Rules } from "async-validator";
import { successNotification, warningNotification } from "@/core/services/helpers/alert.helper";
import { slugify } from "@/core/services/utils/util.string";
import { resetObject } from "@/core/services/utils/util.object";

export const items = ref<TBlog[]>([
    {
        id: v4(),
        title: "mock-data",
        content: "mock-data",
        desc: "mock-data",
        slug: "mock-data",
        type: "mock-data",
        imageUrl: "",
        categoryId: "",
        createdAt: "2022-01-01",
        updatedAt: "2024-01-01",
        enable: Boolean(EnableEnum.ALL)
    }
]);


export const init_state: TBlogRequest = {
    id: v4(),
    title: "",
    content: "",
    desc: "",
    slug: "",
    imageUrl: "",
    categoryId: "-1",
    enable: Boolean(EnableEnum.ALL)
}

export const categories: Ref<TCategory[]> = ref([])
export const tags: Ref<TTag[]> = ref([])
export const selectedTags = ref<TTag[]>([])

export const state = reactive<TBlogRequest>(init_state)

export const fileInput = ref<HTMLInputElement | null>(null);
export const selectedFile = ref<File | null>(null);
export const uploadProgress = ref<number>(0);
export const imageUrl: Ref<string> = ref('')

export const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (!target || !target.files?.[0])
        return;
    selectedFile.value = target.files?.[0]; 
    imageUrl.value = URL.createObjectURL(selectedFile.value)
}

export async function uploadFile() {
    if (!selectedFile.value) return;

    const formData = new FormData();
    formData.append('file', selectedFile.value);

    const response = await upload<TFileResponse>('/api/images', formData);

    if (response?.data) {
        state.imageUrl = response.data.data.path
        successNotification("Uploaded")
    }else{
        warningNotification("Cannot upload")
    }
}

export const removeImage = () => {
    fileInput.value = null;
    imageUrl.value = ''
}

export const pagination = ref<TPagination>(init_pagination);

export const fetch = async () => {

    const response = await get<TPaginationResponse<TBlog>>("/api/blogs/page", paginationOptions.value);
    items.value = response?.data.data || [];
    pagination.value = response?.data || init_pagination;

};

watch(state, (newValue) => {
    state.slug = slugify(newValue.title)
}, { deep: true })

export const rules: Rules = {
    title: {
        type: 'string',
        min: 5,
        max: 255,
        required: true
    },
    content: {
        type: 'string',
        min: 5,
        required: true
    },
    desc: {
        type: 'string',
        min: 5,
        required: true
    },
    imageUrl: {
        type: 'string',
        min: 5,
        required: true
    },
    categoryId: {
        type: 'string',
        min: 5,
        required: true
    }
}
export const submit = async () => {
    const data = await post<TBlogRequest, TBlog>("/api/blogs", state)
    if (data?.data) {
        successNotification(data.message),
            resetObject(state, init_state)
    }
}

watch(paginationOptions, async () => {
    await fetch();
}, { deep: true });

