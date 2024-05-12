import type { TEntity, TRequest } from '@/core/models/type'

export type TService = TEntity & {
  title: string
  slug: string
  content: string
  imageUrl: string
  groupId: string
  desc:string
  videoEmbed: string
}

export type TServiceRequest = TRequest & {
  title: string
  slug: string
  content: string
  imageUrl: string
  desc:string
  groupId: string
  videoEmbed: string
}

export type TGroupService = TEntity & {
  label: string
}

export type TGroupServiceResponse = TEntity & {
  label: string,
  services: TService[]
}

export type TGroupServiceRequest = TRequest & {
  label: string
}