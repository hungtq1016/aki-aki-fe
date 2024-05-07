import type { TEntity } from "@/core/models/type"

export type TService = TEntity & {
    title: string,
    slug: string,
    content: string,
    imageurl: string,
    type: string,
}