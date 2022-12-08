<script setup lang="ts">
defineProps<{
  to: string;
  text: string;
}>();
</script>

<template>
  <NuxtLink
    class="text-sky-600 bg-sky-600/10 hover:underline px-1 rounded focus-visible:outline-none focus-visible:underline transition-colors"
    :to="to"
    :target="text.startsWith('#') ? '_self' : '_blank'"
    active-class=" "
    exact-active-class=" "
  >
    {{ text }}
  </NuxtLink>
</template>
