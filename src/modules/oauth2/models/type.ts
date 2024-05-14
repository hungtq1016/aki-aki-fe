export type TLoginRequest = {
  email: string
  password: string
}

export type TEmailRequest = {
  email: string
}

export type TRegisterRequest = {
  email: string
  password: string
  rePassword: string
  fullName: string
  phoneNumber: string
}
export type TResetPaswordRequest = {
  password: string
  rePassword: string
}