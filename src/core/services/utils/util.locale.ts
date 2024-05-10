import names from '@/core/services/common/locales/localeNames.json'
import images from '@/core/services/common/locales/localeImage.json'

interface LocaleNames {
  [locale: string]: string
}

export const getLocaleName = (locale: string, localeNames: LocaleNames = names): string => {
  return localeNames[locale] || 'en'
}

export const getLocaleImage = (locale: string, localeImages: LocaleNames = images): string => {
  return localeImages[locale] || '#'
}
