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

export type TResetPasswordRequest = {
  id: string
  email: string
  password: string
}

export type TOTPRequest = {
  n1: string
  n2: string
  n3: string
  n4: string
  n5: string
  n6: string
}