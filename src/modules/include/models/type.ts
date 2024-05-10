import type { BaseTypeIcon, TEntity } from '@/core/models/type'
import { AnchorType } from './enum'

export type TBranch = TEntity & {
  name: string
  address1: string
  address2?: string
  phone1: string
  phone2?: string
  addressEmbed?: string
}

export type TContact = {
  tag: string
  label: string
  icon: BaseTypeIcon
  type: AnchorType
  url: string
}

export type TSocial = {
  type: string
  url: string
  imageUrl: string
}
