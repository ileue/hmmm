<script setup lang="ts">
const liked = ref(false);
const saved = ref(false);

const i18n = useI18n();

const formatter = computed(() =>
  Intl.NumberFormat(i18n.locale.value, {
    notation: "compact",
  })
);
</script>

<template>
  <article class="bg-white dark:bg-neutral-900 rounded shadow">
    <div class="p-3 flex flex-col gap-3">
      <PostImage />
      <PostBody text="hejka #elo" :primary="false" />
      <div class="flex items-center">
        <div class="flex gap-1">
          <PostSaveButton @click="saved = !saved" :saved="saved" />
          <PostLikeButton @click="liked = !liked" :liked="liked" />
        </div>
        <div
          :aria-label="$t('post.likeCount')"
          class="w-20 flex justify-center"
        >
          <span class="text-sm">{{
            liked ? formatter.format(1000) : formatter.format(999)
          }}</span>
        </div>
      </div>
    </div>
  </article>
</template>
