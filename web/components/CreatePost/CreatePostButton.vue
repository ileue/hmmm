<script setup lang="ts">
const createPostDialog = useCreatePostDialog();
</script>

<template>
  <div class="h-full flex items-center">
    <IconButton :tooltip="$t('create')" @click="createPostDialog = true">
      <IconOutlinedPencilSquare />
    </IconButton>
  </div>
</template>
