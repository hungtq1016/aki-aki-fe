import type { TEntity, TRequest } from '@/core/models/type'
import type { TBranch } from '@/modules/admin-branch/models/type';
import type { TService } from '@/modules/admin-service/models/type';

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
  branch: TBranch;
  serviceId: string;
  service: TService
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
