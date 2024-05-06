export default {
  supportedLngs: ['tm', 'en', 'ru'],
  fallbackLng: 'tm',
  // lng: 'tm',
  // Disabling suspense is recommended
  react: { useSuspense: false },
  backend: {
    loadPath: '../public/locales/{{lng}}/{{ns}}.json',
  },
};
