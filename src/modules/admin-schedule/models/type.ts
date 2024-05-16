import type { TEntity, TRequest } from '@/core/models/type'

export type TSchedule = TEntity & {
  date: Date;
  fullName: string;
  phoneNumber: string;
  time: string;
  email: string;
  desc: string;
  branchId: string;
  serviceId: string;
}

export type TScheduleResponse = TEntity & {
  date: Date;
  fullName: string;
  phoneNumber: string;
  time: string;
  email: string;
  desc: string;
  branchId: string;
  serviceId: string;
}

export type TScheduleRequest = TRequest & {
  date: Date;
  fullName: string;
  phoneNumber: string;
  time: string;
  email: string;
  desc: string;
  branchId: string;
  serviceId: string;
}