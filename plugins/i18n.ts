import { createI18n } from 'vue-i18n';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: useDefaultLocale().value,
    messages: {
      en: {
        logo: 'Vue & Nuxt Mastery Class',
        home: 'Home',
        about: 'About',
        youtube: 'Youtube',
        admin: 'Admin',
        login: 'Login',
        logout: 'Logout',
      },
      ko: {
        logo: '뷰 & 넉스트 완전 강의',
        home: '홈',
        about: '어바웃',
        youtube: '유튜브',
        admin: '관리자',
        login: '로그인',
        logout: '로그아웃',
      },
    },
  });

  vueApp.use(i18n);
});
