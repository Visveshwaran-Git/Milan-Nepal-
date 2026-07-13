import 'server-only';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  fi: () => import('@/dictionaries/fi.json').then((module) => module.default),
  sv: () => import('@/dictionaries/sv.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'fi' | 'sv') => {
  // Return english dictionary if locale is not supported
  if (!dictionaries[locale]) return dictionaries['en']();
  return dictionaries[locale]();
};
