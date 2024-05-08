import type { TEntity } from "@/core/models/type";

export type TMedicine = TEntity & {
    name: string,
    brand: string,
    slug: string,
    desc: string,
}

export type TPresciption = {
    id: string,
    medicineId: string,
    medicine?:TMedicine
    quantity: number,
    usage: string,
}