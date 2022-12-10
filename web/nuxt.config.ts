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
      messages: {
        en: {
          create: "Create",
          search: "Search",
          profile: "Profile",
          profilePicture: "Your profile picture",
          myProfile: "My profile",
          settings: "Settings",
          signOut: "Sign out",
          404: "Page not found.",
          500: "Sorry, something went wrong.",
          goToHome: "Go to a home page",
          close: "Close",
          post: {
            like: "Like",
            profileInfo: "Post author information",
            profilePictureAlt: "Post author profile picture",
            removeLike: "Like (undo)",
            likeCount: "Like count",
            save: "Save",
            removeSave: "Save (undo)",
            imageAlt: "Post image",
            reply: "Reply",
            create: "Create a new post.",
          },
          link: {
            home: "Home",
            saved: "Saved",
          },
          form: {
            error: {
              empty: "This field is empty!",
              maxChars: "This field can't have more than {limit} charaters!",
            },
          },
        },
        pl: {
          create: "Utwórz",
          search: "Szukaj",
          profile: "Profil",
          profilePicture: "Twoje zdjęcie profilowe",
          myProfile: "Mój profil",
          settings: "Ustawienia",
          signOut: "Wyloguj się",
          404: "Nie znaleziono strony.",
          500: "Przepraszamy, coś poszło nie tak.",
          goToHome: "Przejdź do strony głównej",
          close: "Zamknij",
          post: {
            like: "Polub",
            profileInfo: "Informacje o autorze wpisu",
            profilePictureAlt: "Zdjęcie profilowe autora wpisu",
            removeLike: "Polub (cofnij)",
            likeCount: "Liczba polubień",
            save: "Zapisz",
            removeSave: "Zapisz (confij)",
            imageAlt: "Zdjęcie wpisu",
            reply: "Odpowiedz",
            create: "Utwórz nowy wpis.",
          },
          link: {
            home: "Strona główna",
            saved: "Zapisane",
          },
          form: {
            error: {
              empty: "Pole jest puste!",
              maxChars: "To pole nie może mieć więcej niż {limit} znaków.",
            },
          },
        },
      },
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
