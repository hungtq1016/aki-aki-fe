import type { BaseTypeIcon } from '@/core/models/type'

export type TMenu = {
  name: string
  menuItems: TMenuItem[]
}

export type TMenuItem = {
  icon?: string | BaseTypeIcon
  label: string
  slug: string
  show: boolean
  children?: TMenuItem[]
}

export type TChat = {
  avatar: string
  name: string
  text: string
  time: number
  textCount: number
  color: string
}

export type TStat = {
  icon: string
  title: string
  total: string
  growthRate: number
}
