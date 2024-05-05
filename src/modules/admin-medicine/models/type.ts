import type { TEntity } from "@/core/models/type";

export type TMedicine = TEntity & {
    name: string,
    type: string,
    slug: string,
    desc: string,
    content: string,
    imageUrl: string,
}

export type TPresciption = {
    name: string,
    brand: string,
    quantity: number,
    usage: string,
}