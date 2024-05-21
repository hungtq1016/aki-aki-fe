import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue'
import type { StatusEnum } from './enum'

export type BaseTypeIcon = FunctionalComponent<HTMLAttributes & VNodeProps, {}, any, {}>
export type BaseInputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
export type Response<T> = {
  data: T
  message: string
  statusCode: number
  isError: boolean
}

export type TTokenResponse = {
  accessToken: string
  refreshToken: string
  tokenType: string
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
  data: T[]
}

export type TSidebarItem = {
  label: string
}

export type TPaginationRequest = {
  pageNumber: number
  pageSize: number
  status?: StatusEnum
  search?: string
}

export type TOption = {
  name: string
  value: string
}

export type TEntity = {
  id: string
  createdAt: string
  updatedAt: string
  status: StatusEnum
}

export type TRequest = {
  id?: string
  status?: StatusEnum
}
