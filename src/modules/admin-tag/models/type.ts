import type { TEntity } from "@/core/models/type"

export type TTag = TEntity & {
    name: string,
    type: string,
}