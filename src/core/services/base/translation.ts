import { createI18n } from 'vue-i18n';
import { ref } from 'vue';
import enUS from '../common/locales/en-US.json';
import viVN from '../common/locales/vi-VN.json';
import { changeCookie, getCookie, isCookieExist, setCookie } from '../helpers/cookie.helper';

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
    fallbackLocale: 'en-US', // Chỉ định ngôn ngữ mặc định
    globalInjection: true,
    messages: {
        'en-US': enUS,
        'vi-VN': viVN,
    }
});

export const changeLocale = (value: any, options?: any) => {
    changeCookie('locale', value, options);
};
