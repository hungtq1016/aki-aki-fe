import type { TEntity } from "@/core/models/type"

export type TBranch = TEntity & {
    address1: string,
    address2?: string,
    phone1: string,
    phone2?: string,
    addressEmbed: string
}