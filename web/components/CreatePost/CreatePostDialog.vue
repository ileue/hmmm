<script setup lang="ts">
const createPostDialog = useCreatePostDialog();
</script>

<template>
  <HeadlessDialog :open="createPostDialog" @close="createPostDialog = false">
    <DialogBackdrop>
      <HeadlessDialogPanel
        class="w-full h-full max-w-lg bg-white dark:bg-neutral-900 rounded shadow"
      >
        <HeadlessDialogTitle />
      </HeadlessDialogPanel>
    </DialogBackdrop>
  </HeadlessDialog>
</template>
