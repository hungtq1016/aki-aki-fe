import type { TEntity, TRequest } from "@/core/models/type"

export type TBlog = TEntity & {
    title: string,
    type: string,
    slug: string,
    desc: string,
    content: string,
    imageUrl: string,
    categoryId: string
}

export type TCategory = TEntity & {
    title: string,
    slug: string,
}

export type TCategoryRequest = TRequest & {
    title: string,
    slug: string,
}


export type TTag = TEntity & {
    title: string,
    slug: string,
}

export type TTagRequest = TRequest & {
    title: string,
    slug: string,
}

export type TBlogRequest = TRequest & {
    title: string,
    slug: string,
    desc: string,
    content: string,
    imageUrl: string,
    categoryId: string
}
