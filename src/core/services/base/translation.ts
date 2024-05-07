import { createI18n } from 'vue-i18n';
import { ref } from 'vue';
import { changeCookie, getCookie, isCookieExist, setCookie } from '../helpers/cookie.helper';
import axios from 'axios'
import en from '@/core/services/common/locales/en-US.json';
import vi from '@/core/services/common/locales/vi-VN.json';
export const locale = ref<string>('vi-VN');

if (!isCookieExist('locale')) {
  setCookie('locale', 'vi-VN');
  locale.value = 'vi-VN';
} else {
  locale.value = getCookie('locale') as string;
}

export const i18n = createI18n({
    legacy: false,
    locale: locale.value,
    fallbackLocale: 'vi-VN', // Chỉ định ngôn ngữ mặc định
    globalInjection: true,
    messages :{
      'vi-VN':vi,
      'en-US':en,
    }
});

const loadedLanguages:string[] = [] 

function setI18nLanguage (lang:any) {
  i18n.global.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html')?.setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync(lang:any) {
  // If the same language
  if (i18n.global.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // If the language hasn't been loaded yet
  return axios.get("https://localhost:7000/api/locales/language/"+lang).then(
    messages => {
      i18n.global.setLocaleMessage(lang, messages)
      loadedLanguages.push(lang)
      return setI18nLanguage(lang)
    }
  )
}

export const changeLocale = (value: any, options?: any) => {
    changeCookie('locale', value, options);
};
