import type { BaseTypeIcon, TEntity } from "@/core/models/type"

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

export type TBlog = TEntity & {
    name: string,
    type: string,
    slug: string,
    desc: string,
    content: string,
    imageUrl: string,
}