<script setup lang="ts">
defineProps<{
  tooltip: string;
  noWrap?: boolean;
}>();
</script>

<template>
  <button
    class="p-2.5 group relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 bg-neutral-200 dark:bg-neutral-800 rounded-full"
    :class="noWrap && 'whitespace-nowrap'"
  >
    <span>
      <slot />
    </span>
    <IconButtonTooltip>
      {{ tooltip }}
    </IconButtonTooltip>
  </button>
</template>
