/*
 * True dynamic imports don't seem possible from the CF pages context, so we must keep a reference to the languages being imported
 */
const languagesServer: { [key: string]: () => any } = {
  tm: () => import('../public/locales/tm.json'),
  en: () => import('../public/locales/en.json'),
  ru: () => import('../public/locales/ru.json'),
};

export function findLanguageJSON(language: string, namespace: string) {
  const lngNs = `${language}-${namespace}`;

  const importFn =
    lngNs in languagesServer
      ? languagesServer[lngNs]
      : languagesServer[language];

  if (importFn) {
    return importFn();
  }

  return Promise.reject();
}
