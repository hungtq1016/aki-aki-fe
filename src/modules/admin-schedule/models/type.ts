import type { TEntity, TRequest } from '@/core/models/type'

export type TSchedule = TEntity & {
  userId: string
  startDay: string
  endDay: string
  startTime: string
  endTime: string
}

export type TScheduleResponse = TEntity & {
  userId: string
  startDay: string
  endDay: string
  startTime: string
  endTime: string
}

export type TScheduleRequest = TRequest & {
  userId: string
  startDay: string
  endDay: string
  startTime: string
  endTime: string
}