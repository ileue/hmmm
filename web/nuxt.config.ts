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
    locales: ["en", "pl"],
    defaultLocale: "pl",
    vueI18n: {
      legacy: false,
      locale: "pl",
      messages,
    },
  },
  typescript: {
    strict: true,
  },
});
