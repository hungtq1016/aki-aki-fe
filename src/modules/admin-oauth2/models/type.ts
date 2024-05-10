import type { TEntity, TRequest } from '@/core/models/type'

export type TPermission = TEntity & {
  type: string
  value: string
}

export type TPermissionRequest = TRequest & {
  type: string
  value: string
}


export type TRole = TEntity & {
  name: string
  note: string
}

export type TRoleRequest = TRequest & {
  name: string
  note: string
}

export type TUser = TEntity & {
  fullName: string
  email: string
  password : string
  phoneNumber : string
  address : string
  imageUrl : string
}

export type TUserRequest = TRequest & {
  fullName: string
  email: string
  password : string
  phoneNumber : string
  address : string
  imageUrl : string
}