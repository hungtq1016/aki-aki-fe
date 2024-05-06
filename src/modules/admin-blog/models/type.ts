import type { TEntity } from "@/core/models/type"

export type TBlog = TEntity & {
    name: string,
    type: string,
    slug: string,
    desc: string,
    content: string,
    imageUrl: string,
}