<script setup lang="ts">
const i18n = useI18n();

const locales = {
  en: "English",
  pl: "Polski",
};
</script>

<template>
  <div>
    <div>
      <button
        v-for="locale in i18n.availableLocales"
        @click="i18n.setLocale(locale)"
      >
        {{ locales[locale] }}
      </button>
    </div>
    <PostFeed />
  </div>
</template>
