import type { FunctionalComponent, HTMLAttributes, VNodeProps } from "vue"
import type { EnableEnum } from "./enum";

export type BaseTypeIcon = FunctionalComponent<HTMLAttributes & VNodeProps, {}, any, {}>

export type Response<T> = {
    data: T,
    message: string,
    statusCode: number,
    isError: boolean
};

export type TTokenResponse = {
    accessToken: string,
    refreshToken: string,
    tokenType: string,
    expiredAt: string
}

export type TPagination = {
    pageNumber: number
    pageSize: number
    firstPage: number
    lastPage: number
    totalPages: number
    totalRecords: number
    nextPage: number
    previousPage: number
}

export type TPaginationResponse<T> = TPagination & {
    data: T[],
}

export type TSidebarItem = {
    label: string
}

export type TPaginationRequest = {
    pageNumber: number
    pageSize: number
    enable: EnableEnum
}

export type TOption = {
    name: string,
    value: string
}

export type TEntity = {
    id: string,
    createdAt: string,
    updatedAt: string,
    enable: EnableEnum
}