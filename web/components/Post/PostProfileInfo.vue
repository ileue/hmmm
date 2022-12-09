<script setup lang="ts">
defineProps<{
  name: string;
  handle: string;
}>();
</script>

<template>
  <div :aria-label="$t('post.profileInfo')" class="text-sm">
    <div>{{ name }}</div>
    <div>
      <PostLink :to="`/profile/${handle}`" :text="`@${handle}`"></PostLink>
    </div>
  </div>
</template>
