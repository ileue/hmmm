<script setup lang="ts">
defineProps<{
  saved: boolean;
}>();
</script>

<template>
  <IconButton :tooltip="saved ? $t('post.removeSave') : $t('post.save')">
    <IconSolidBookmark v-if="saved" class="text-sky-500" />
    <IconOutlinedBookmark v-else />
  </IconButton>
</template>
