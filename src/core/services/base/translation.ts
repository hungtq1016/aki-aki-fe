import { createI18n } from 'vue-i18n';
import { ref } from 'vue';
import { changeCookie, getCookie, isCookieExist, setCookie } from '../helpers/cookie.helper';
import en from '@/core/services/common/locales/en-US.json';
import vi from '@/core/services/common/locales/vi-VN.json';

export const locale = ref<string>(getCookie('locale') as string|'vi-VN');

    if (!isCookieExist('locale')) {
        setCookie('locale', 'vi-VN');
        locale.value = 'vi-VN';
    } else {
        locale.value = getCookie('locale') as string;
    }

export const i18n = createI18n({
    legacy: false,
    locale: locale.value,
    fallbackLocale: getCookie('locale') as string | 'vi-VN', // Chỉ định ngôn ngữ mặc định
    globalInjection: true,
    messages :{
      'vi-VN':vi,
      'en-US':en
    }
});

export const changeLocale = (value: any, options?: any) => {
    changeCookie('locale', value, options);
};
