import type { TEntity, TRequest } from '@/core/models/type'

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