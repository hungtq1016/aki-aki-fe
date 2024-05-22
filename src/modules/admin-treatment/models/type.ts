import { activity } from './../services/logictics/treatment.add';
import type { TEntity, TRequest } from '@/core/models/type'

export type TTreatmentPlant = TEntity & {
  title: string,
  description: string,
  patientId: string,
}

export type TTreatmentPlantResponse = TEntity & {
  title: string,
  description: string,
  patientId: string,
}

export type TTreatmentPlantRequest = TRequest & {
  title: string,
  description: string,
  patientId: string,
}

export type TTreatmentDetail = TEntity & {
  treatmentId: string
  activityId: string
  date: Date
}

export type TTreatmentDetailResponse = TEntity & {
  treatmentId: string
  activityId: string
  activity: TActivity
  date: Date
}

export type TTreatmentDetailRequest = TRequest & {
  treatmentId: string
  activityId: string
  date: Date
}

export type TActivity = TEntity & {
  title: string
  description: string
}

export type TActivityResponse = TEntity & {
  title: string
  description: string
}

export type TActivityRequest = TRequest & {
  title: string
  description: string
}