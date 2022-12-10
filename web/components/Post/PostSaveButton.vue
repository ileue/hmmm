<script setup lang="ts">
defineProps<{
  saved: boolean;
}>();
</script>

<template>
  <PostButton
    :tooltip="saved ? $t('post.removeSave') : $t('post.save')"
    class="text-green-700 dark:text-green-500 bg-green-600/10 hover:bg-green-600/20 focus-visible:bg-green-600/20"
  >
    <IconSolidBookmark v-if="saved" />
    <IconOutlinedBookmark v-else />
  </PostButton>
</template>
