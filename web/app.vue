<script setup lang="ts">
const i18n = useI18n();

useHead({
  htmlAttrs: {
    lang: i18n.locale,
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
