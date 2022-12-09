<script setup lang="ts">
defineProps<{
  to: string;
  text: string;
}>();
</script>

<template>
  <NuxtLink
    class="text-sky-700 dark:text-sky-500 bg-sky-600/10 hover:underline px-1 rounded focus-visible:outline-none focus-visible:underline transition-colors"
    :to="to"
    :target="text.startsWith('#') || text.startsWith('@') ? '_self' : '_blank'"
    active-class=" "
    exact-active-class=" "
  >
    {{ text }}
  </NuxtLink>
</template>
