import type { TEntity, TRequest } from '@/core/models/type'

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
  nurseId: string;
  healthRecordId: string;
}

export type TServicePrice = TEntity & {
  label: string;
  price: number;
}

export type TServicePriceRequest = TRequest & {
  label: string;
  price: number;
}

export type TInvoiceDetailRequest = TRequest & {
  invoiceId : string,
  servicePriceId: string
}

export type TInvoiceDetail = TEntity & {
  invoiceId : string,
  servicePriceId: string
}

export type TInvoiceDetailResponse = TEntity & {
  invoiceId : string,
  servicePriceId: string
  servicePrice: TServicePrice
}