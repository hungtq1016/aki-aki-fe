import type { TEntity } from "@/core/models/type"

export type TBranch = TEntity & {
    name: string,
    type: string,
    address: string,
    phone: string,
}