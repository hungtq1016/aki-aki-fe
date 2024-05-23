import type { TEntity, TRequest } from '@/core/models/type'

export type TPermission = TEntity & {
  type: string
  value: string
  label: string
}

export type TPermissionResponse = TEntity & {
  assignments: TAssignment[]
  type: string
  value: string
  label: string
}

export type TPermissionRequest = TRequest & {
  type: string
  value: string
  label: string
}

export type TRole = TEntity & {
  name: string
  note: string
}

export type TRoleResponse = TEntity & {
  groups: TGroup[]
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
  password: string
  phoneNumber: string
  address: string
  imageUrl: string
}

export type TUserRequest = TRequest & {
  fullName: string
  email: string
  password: string
  phoneNumber: string
  address: string
  imageUrl: string
}

export type TUserResponse = TEntity & {
  fullName: string
  email: string
  password: string
  phoneNumber: string
  address: string
  imageUrl: string
}

export type TAssignment = TEntity & {
  roleId: string
  permissionId: string
}

export type TAssignmentRequest = TRequest & {
  roleId: string
  permissionId: string
}

export type TGroup = TEntity & {
  roleId: string
  userId: string
}

export type TGroupRequest = TRequest & {
  roleId: string
  userId: string
}
