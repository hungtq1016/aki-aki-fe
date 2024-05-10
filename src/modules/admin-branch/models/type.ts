import type { TEntity, TRequest } from "@/core/models/type"

export type TBranch = TEntity & {
  name: string
  address1: string
  address2?: string
  phone1: string
  phone2?: string
  addressEmbed?: string
  typeId: string
}

export type TBranchRequest = TRequest & {
  name: string
  address1: string
  address2?: string
  phone1: string
  phone2?: string
  addressEmbed?: string
  typeId: string
}

export type TBranchType = TEntity & {
  label: string
}


export type TBranchTypeRequest = TRequest & {
  label: string
}