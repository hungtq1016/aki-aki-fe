export type TRrequency = {
  value: string
  title: string
  suffix: string
}

export type TMoney = {
  monthly: string
  annually: string
}

export type TTier = {
  name: string
  id: string
  slug: string
  price: TMoney | any
  desc: string
  features: string[]
  mostPopular: boolean
}
