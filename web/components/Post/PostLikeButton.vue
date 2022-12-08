<script setup lang="ts">
const i18n = useI18n();

const formatter = computed(() =>
  Intl.NumberFormat(i18n.locale.value, {
    notation: "compact",
  })
);

defineProps<{
  liked: boolean;
  likeCount: number;
}>();
</script>

<template>
  <button
    class="relative p-2.5 flex bg-neutral-200 dark:bg-neutral-800 items-center rounded-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
  >
    <span>
      <IconSolidHeart v-if="liked" class="text-pink-500" />
      <IconOutlinedHeart v-else />
    </span>
    <span :aria-label="$t('post.likeCount')" class="text-sm px-2">
      {{ formatter.format(likeCount) }}
    </span>
    <IconButtonTooltip>
      {{ liked ? $t("post.removeLike") : $t("post.like") }}
    </IconButtonTooltip>
  </button>
</template>
