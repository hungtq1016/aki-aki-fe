import Cookies from 'js-cookie'

export const setCookie = (key: string, value: any, options?: any) => {
  Cookies.set(key, value, options)
}

export const getCookie = (key: string) => {
  return Cookies.get(key)
}

export const removeCookie = (key: string) => {
  Cookies.remove(key)
}

export const getAllCookies = () => {
  return Cookies.get()
}

export const clearAllCookies = () => {
  const cookies = getAllCookies()
  for (const key in cookies) {
    removeCookie(key)
  }
}

export const isCookieExist = (key: string) => {
  return getCookie(key) !== undefined
}

export const changeCookie = (key: string, value: any, options?: any) => {
  if (isCookieExist(key)) {
    removeCookie(key)
  }
  setCookie(key, value, options)
}