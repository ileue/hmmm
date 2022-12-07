<script setup lang="ts">
defineProps<{
  liked: boolean;
}>();
</script>

<template>
  <IconButton :tooltip="liked ? $t('post.removeLike') : $t('post.like')">
    <IconSolidHeart v-if="liked" class="text-pink-500" />
    <IconOutlinedHeart v-else />
  </IconButton>
</template>
