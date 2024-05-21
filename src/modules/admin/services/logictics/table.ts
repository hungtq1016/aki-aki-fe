import type { TPagination, TPaginationRequest } from "@/core/models/type";
import type { ModelRef } from "vue";

export const paginationResponse : ModelRef<TPagination> = defineModel({required:true})
export const paginationRequest : ModelRef<TPaginationRequest> = defineModel({required:true})
