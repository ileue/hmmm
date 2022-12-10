<script setup lang="ts">
defineProps<{
  src: string;
}>();
</script>

<template>
  <div class="absolute inset-0">
    <img
      :src="src"
      :alt="$t('post.imageAlt')"
      class="w-full h-full object-contain object-center rounded"
    />
  </div>
</template>
