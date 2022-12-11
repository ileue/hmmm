// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-headlessui",
  ],
  css: ["@/assets/styles.css"],
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
            replyCount: "Reply count",
            save: "Save",
            removeSave: "Save (undo)",
            imageAlt: "Post image",
            imageControls: "Image slider controls",
            reply: "Reply",
            replies: "Replies",
            create: "Create a new post.",
          },
          slider: {
            prev: "Previous image",
            next: "Next image",
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
            replyCount: "Liczba odpowiedzi",
            save: "Zapisz",
            removeSave: "Zapisz (confij)",
            imageAlt: "Zdjęcie wpisu",
            imageControls: "Przyciski przewijaka zdjęć",
            reply: "Odpowiedz",
            replies: "Odpowiedzi",
            create: "Utwórz nowy wpis.",
          },
          slider: {
            prev: "Poprzednie zdjęcie",
            next: "Następne zdjęcie",
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
