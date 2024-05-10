import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { i18n } from '../services/base/translation'
import { get } from '../services/helpers/request.helper'

export const useLanguageStore = defineStore('language', () => {
  const language = ref('en-US')

  const setLanguage = () => {}

  const setLangNew = async (locale: string) => {
    try {
      const res = await get<any>('/api/locales/language/' + language.value)
      i18n.global.setLocaleMessage(locale, res?.data)
    } catch (e) {
      console.log(e)
    }
  }

  return { language, setLangNew }
})
