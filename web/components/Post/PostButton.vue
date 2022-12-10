<script setup lang="ts">
const i18n = useI18n();

const formatter = computed(() =>
  Intl.NumberFormat(i18n.locale.value, {
    notation: "compact",
  })
);

defineProps<{
  as?: "button" | "link";
  to?: string;
  tooltip: string;
  number?: number;
  numberLabel?: string;
}>();
</script>

<template>
  <button
    v-if="as !== 'link'"
    class="p-2.5 flex items-center justify-center focus-visible:outline-none relative focus-visible:shadow-md hover:shadow-md transition rounded-full group select-none basis-1/4 grow"
  >
    <span><slot /></span>
    <span v-if="number" class="px-2 text-sm" :aria-label="numberLabel">
      {{ formatter.format(number) }}
    </span>
    <IconButtonTooltip class="w-min">{{ tooltip }}</IconButtonTooltip>
  </button>
  <NuxtLink
    v-else
    :to="to"
    class="p-2.5 flex items-center justify-center focus-visible:outline-none relative focus-visible:shadow-md hover:shadow-md transition rounded-full group select-none basis-1/4 grow"
  >
    <span><slot /></span>
    <span
      v-if="number"
      class="px-2 text-sm select-none"
      :aria-label="numberLabel"
    >
      {{ formatter.format(number) }}
      <span class="sr-only" aria-hidden="true"> - </span>
    </span>
    <IconButtonTooltip class="w-min">{{ tooltip }}</IconButtonTooltip>
  </NuxtLink>
</template>
