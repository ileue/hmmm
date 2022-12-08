import { messages } from "./messages";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-headlessui",
  ],
  i18n: {
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        iso: "en-US",
      },
      {
        code: "pl",
        iso: "pl-PL",
      },
    ],
    baseUrl: "http://localhost:5173",
    defaultLocale: "en",
    vueI18n: {
      legacy: false,
      locale: "en",
      messages,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "_hmmm_i18n",
      redirectOn: "all",
    },
  },
  typescript: {
    strict: true,
  },
  tailwindcss: {
    config: {
      content: [
        "./pages/**/*.vue",
        "./layouts/**/*.vue",
        "./components/**/*.vue",
      ],
      future: {
        hoverOnlyWhenSupported: true,
      },
    },
  },
});
