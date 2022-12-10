<script setup lang="ts">
const i18n = useI18n();

const formatter = computed(() =>
  Intl.NumberFormat(i18n.locale.value, {
    notation: "compact",
  })
);

defineProps<{
  number?: number;
  tooltip: string;
}>();
</script>

<template>
  <button
    class="p-2.5 flex items-center justify-center focus-visible:outline-none relative focus-visible:shadow-md hover:shadow-md transition rounded-2xl group grow"
  >
    <span><slot /></span>
    <span v-if="number" class="px-2">{{ formatter.format(number) }}</span>
    <IconButtonTooltip class="w-min">{{ tooltip }}</IconButtonTooltip>
  </button>
</template>
