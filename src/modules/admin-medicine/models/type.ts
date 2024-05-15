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
  userId:string
}

export type TRecord = TRequest & {
  birthDay: string;
  gender: string;
  address: string;
  height: number;
  weight: number;
  bloodPressure: number;
  temperature: number;
  heartBeat: number;
  anamnesis: string;
  diagnosis: string;
  userId: string;
}