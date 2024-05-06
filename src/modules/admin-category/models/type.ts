import type { TEntity } from "@/core/models/type"

export type TCategory = TEntity & {
    name: string,
    desc: string,
}