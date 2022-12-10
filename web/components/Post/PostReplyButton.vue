<script setup lang="ts">
defineProps<{
  replyCount: number;
}>();
</script>

<template>
  <PostButton
    class="text-sky-700 dark:text-sky-500 bg-sky-600/10 hover:bg-sky-600/20"
    :tooltip="$t('post.reply')"
    :number="replyCount"
  >
    <IconOutlinedComment />
  </PostButton>
</template>
