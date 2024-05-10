import type { TEntity, TRequest } from '@/core/models/type'

export type TMedicine = TEntity & {
  title: string
  brand: string
  slug: string
  desc: string
}

export type TMedicineRequest = TRequest & {
  title: string
  brand: string
  slug: string
  desc: string
}

export type TPresciption = {
  id: string
  medicineId: string
  medicine?: TMedicine
  quantity: number
  usage: string
}
