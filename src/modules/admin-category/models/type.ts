import type { TEntity } from "@/core/models/type"

export type TCategory = TEntity & {
    name: string,
    slug: string,
}