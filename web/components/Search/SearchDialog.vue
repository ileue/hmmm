<script setup lang="ts">
const searchDialog = useSearchDialog();
</script>

<template>
  <HeadlessDialog :open="searchDialog" @close="searchDialog = false">
    <DialogBackdrop>
      <HeadlessDialogPanel
        class="w-full h-full max-w-lg bg-white dark:bg-neutral-900 rounded shadow"
      >
        <HeadlessDialogTitle />
      </HeadlessDialogPanel>
    </DialogBackdrop>
  </HeadlessDialog>
</template>
