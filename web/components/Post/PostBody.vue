<script setup lang="ts">
defineProps<{
  primary: boolean;
  text: string;
}>();
</script>

<template>
  <div :class="primary && 'text-lg'">
    <template v-for="chunk in bodyParser(text)">
      <PostLink v-if="chunk.to" :to="chunk.to" :text="chunk.string" />
      <span v-else>
        {{ chunk.string }}
      </span>
    </template>
  </div>
</template>
