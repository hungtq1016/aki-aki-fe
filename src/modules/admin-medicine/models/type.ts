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

export type TPresciptionDetailRequest = TRequest & {
  prescriptionId: string
  medicineId: string
  medicine?: TMedicine
  quantity: number
  usage: string
}

export type TPresciptionRequest = TRequest & {
  doctorId: string
  patientId: string
}

export type TPresciption = TEntity & {
  doctorId: string
  patientId: string
}

export type TPresciptionResponse = TEntity & {
  prescriptionId: string
  medicineId: string
  medicine?: TMedicine
  quantity: number
  usage: string
  userId:string
}

export type TRecord = TEntity & {
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

export type TRecordRequest = TRequest & {
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