import { createI18n } from 'vue-i18n';
import { ref } from 'vue';
import enUS from '../common/locales/en-US.json';
import viVN from '../common/locales/vi-VN.json';
import { changeCookie, getCookie, isCookieExist, setCookie } from '../helpers/cookie.helper';
import axios from 'axios'

export const locale = ref<string>('en-US');

if (!isCookieExist('locale')) {
    setCookie('locale', 'en-US');
    locale.value = 'en-US';
} else {
    locale.value = getCookie('locale') as string;
}

export const i18n = createI18n({
    legacy: false,
    locale: locale.value,
    fallbackLocale: 'en-US', // Chỉ định ngôn ngữ mặc định
    globalInjection: true,
});

const loadedLanguages:any[] = [] // our default language that is preloaded

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
