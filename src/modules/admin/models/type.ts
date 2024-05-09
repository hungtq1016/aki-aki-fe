import type { BaseTypeIcon } from "@/core/models/type"

export type TMenu = {
    name: string,
    menuItems: TMenuItem[]
}

export type TMenuItem = {
    icon?: string | BaseTypeIcon,
    label: string,
    slug: string,
    children?: TMenuItem[]
}

export type TOption = {
    name: string,
    value: string
}

export type TAsideItem = {
    label: string
}

export type TChat = {
    avatar: string;
    name: string;
    text: string;
    time: number;
    textCount: number;
    color: string;
}

export type TStat = {
    icon: string;
    title: string;
    total: string;
    growthRate: number;
}