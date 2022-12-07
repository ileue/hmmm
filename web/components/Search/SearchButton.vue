<script setup lang="ts">
const searchDialog = useSearchDialog();
</script>

<template>
  <div class="h-full flex items-center">
    <IconButton @click="searchDialog = true" :tooltip="$t('search')">
      <IconSolidSearch />
    </IconButton>
  </div>
</template>
