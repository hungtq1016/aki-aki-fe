import type { TEntity } from "@/core/models/type"

export type TBlog = TEntity & {
    title: string,
    type: string,
    slug: string,
    desc: string,
    content: string,
    imageUrl: string,
}

export type TCategory = TEntity & {
    name: string,
    slug: string,
}

export type TTag = TEntity & {
    name: string,
    type: string,
}