<script setup lang="ts">
const i18n = useI18n();

const formatter = computed(
  () =>
    new Intl.DateTimeFormat(i18n.locale.value, {
      dateStyle: "medium",
    })
);

defineProps<{
  name: string;
  handle: string;
  timestamp: Date;
}>();
</script>

<template>
  <div :aria-label="$t('post.profileInfo')" class="text-sm">
    <div>{{ name }}</div>
    <div class="flex flex-wrap gap-1">
      <PostLink :to="`/profile/${handle}`" :text="`@${handle}`" />
      <span> &bull; </span>
      <span>
        {{ formatter.format(timestamp.getTime()) }}
      </span>
    </div>
  </div>
</template>
