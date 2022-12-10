<script setup lang="ts">
defineProps<{
  liked: boolean;
  likeCount: number;
}>();
</script>

<template>
  <PostButton
    :tooltip="liked ? $t('post.removeLike') : $t('post.like')"
    :number="likeCount"
    :number-label="$t('post.likeCount')"
    class="text-pink-600 bg-pink-600/10 hover:bg-pink-600/20 focus-visible:bg-pink-600/20"
  >
    <IconSolidHeart v-if="liked" />
    <IconOutlinedHeart v-else />
  </PostButton>
</template>
