import type { TEntity, TRequest } from '@/core/models/type'



export type TFaq = TEntity & {
  question: string
  answer: string
  src: string
}

export type TFaqRequest = TRequest & {
  question: string
  answer: string
  src: string
}

export type TFaqResponse = TEntity & {
  question: string
  answer: string
  src: string
}
