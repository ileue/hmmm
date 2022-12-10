<script setup lang="ts">
defineProps<{
  replyCount: number;
  to: string;
}>();
</script>

<template>
  <PostButton
    as="link"
    :to="to"
    class="text-sky-700 dark:text-sky-500 bg-sky-600/10 hover:bg-sky-600/20 focus-visible:bg-sky-600/20"
    :tooltip="$t('post.replies')"
    :number="replyCount"
    :number-label="$t('post.replyCount')"
  >
    <IconOutlinedComment />
  </PostButton>
</template>
