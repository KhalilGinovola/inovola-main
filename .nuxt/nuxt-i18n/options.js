

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"code":"en","iso":"en-US","file":"en.json","dir":"ltr"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_and_default",
  lazy: true,
  langDir: "D:\\workspace\\NUXT\\inov\\inovola\\locales",
  rootRedirect: null,
  detectBrowserLanguage: false,
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  fallbackLocale: "en",
  normalizedLocales: [{"code":"en","iso":"en-US","file":"en.json","dir":"ltr"}],
  localeCodes: ["en"],
  additionalMessages: [],
}

export const localeMessages = {
  'en.json': () => import('../..\\locales\\en.json' /* webpackChunkName: "lang-en.json" */),
}
