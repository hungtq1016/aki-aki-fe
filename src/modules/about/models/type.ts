import type { BaseTypeIcon } from '@/core/models/type'

export type TAboutThumb = {
  title: string
  slug: string
  desc: string
  icon: BaseTypeIcon
  imageUrl: string
}

export type TQuote = {
  quote: string
  author: string
}

export type TCertificate = {
  number: number
  label: string
}

export type TEquipment = {
  title: string
  desc: string
  imageUrl: string
}
