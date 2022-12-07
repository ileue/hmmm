<script setup lang="ts">
const localePath = useLocalePath();

defineProps<{
  to: string;
  activeClass?: string;
}>();
</script>
<template>
  <NuxtLink
    active-class=" "
    :exact-active-class="activeClass"
    :to="localePath(to)"
  >
    <slot />
  </NuxtLink>
</template>
