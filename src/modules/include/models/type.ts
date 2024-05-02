import type { BaseTypeIcon } from "@/core/models/type"
import { AnchorType } from "./enum"

export type TAddress = {
    name: string,
    address1: string,
    address2?: string ,
    phone1: string,
    phone2?: string
}

export type TContact = {
    name: string,
    icon: BaseTypeIcon,
    type: AnchorType,
    url: string
}

export type TSocial = {
    type: string,
    url: string,
    imageUrl: string
}
