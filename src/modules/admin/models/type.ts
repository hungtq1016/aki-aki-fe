import type { BaseTypeIcon } from "@/core/models/type"

export type TMenu = {
    name: string,
    menuItems: TMenuItem[]
}

export type TMenuItem = {
    icon?: string | BaseTypeIcon,
    label: string,
    route: string,
    children?: TMenuItem[]
}

export type TOption = {
    name: string,
    value: string
}

export type TAsideItem = {
    label: string
}
