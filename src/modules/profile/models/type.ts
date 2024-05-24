import type { TEntity, TRequest } from '@/core/models/type'
import type { TInvoiceDetailResponse } from '@/modules/admin-invoice/models/type'
import type { TUser, TUserResponse } from '@/modules/admin-user/models/type'

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

export type TPrescriptionDetail = TEntity & {
  prescriptionId: string
  medicineId: string
  quantity: number
  usage: string
}

export type TPrescriptionDetailRequest = TRequest & {
  prescriptionId: string
  medicineId: string
  medicine?: TMedicine
  quantity: number
  usage: string
}

export type TPrescriptionRequest = TRequest & {
  doctorId: string
  patientId: string
}

export type TPrescription = TEntity & {
  doctorId: string
  patientId: string
}

export type TPrescriptionResponse = TEntity & {
  prescriptionId: string
  medicineId: string
  medicine?: TMedicine
  quantity: number
  usage: string
  userId: string
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
export type TRecordResponse = TEntity & {
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
  patientId: string;
  patient: TUserResponse;
  doctorId: string;
  doctor: TUserResponse;
  invoices: TInvoiceResponse[];
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


export type TInvoice = TEntity & {
  total: number;
  tax: number;
  patientId: string;
  nurseId: string;
  healthRecordId: string;
}

export type TInvoiceRequest = TRequest & {
  total: number;
  tax: number;
  patientId: string;
  nurseId: string;
  healthRecordId: string;
}

export type TInvoiceResponse = TEntity & {
  total: number;
  tax: number;
  patientId: string;
  patient:TUser
  nurse:TUser
  nurseId: string;
  healthRecordId: string;
  invoiceDetails: TInvoiceDetailResponse[];
}


export type DateMonth = {
  month: number,
  year: number
}