import i18n from 'i18next';
// import XHR from 'i18next-xhr-backend';
import Cache from 'i18next-localstorage-cache';
import LanguageDetector from 'i18next-browser-languagedetector';

import EN from './locales/en/common';
import zhTW from './locales/zh-TW/common';

i18n
  // .use(XHR)
  .use(Cache)
  .use(LanguageDetector)
  .init({
    whitelist: ['en', 'zh', 'zh-TW'],
    fallbackLng: 'en',  // 未偵測到時的後備語系
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react!!
    },
    /**
     *  for load language package from client side
     */

    resources: {
      en: EN,
      'zh-TW': zhTW,
    },

    /**
     *  for load language package from server side
     */

    // ns: ['common'], // 語系的 loading namespace 如語系檔案名稱 common.js
    // defaultNS: 'common', // 預設的 namespace name
    // backend: {
    // // 設定語系檔案的 server 路徑, 會以GET的方式跟 server 要檔案
    // // lng = 語系代碼 ns = namespace
    //   loadPath: './locales/{{lng}}/{{ns}}.json',
    // }
  });

export default i18n;
