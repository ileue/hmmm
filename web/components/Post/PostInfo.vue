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
    <div class="flex gap-2 flex-wrap">
      <PostLink :to="`/profile/${handle}`" :text="`@${handle}`" />
      <span>&bull;</span>
      <NuxtLink to="/" active-class=" " exact-active-class=" ">
        {{ formatter.format(timestamp.getTime()) }}
      </NuxtLink>
    </div>
  </div>
</template>
