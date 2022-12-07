<script setup lang="ts">
defineProps<{
  primary: boolean;
  text: string;
}>();
</script>

<template>
  <div :class="primary ? 'text-lg' : 'text-sm'">
    <template v-for="chunk in bodyParser(text)">
      <LocaleLink v-if="chunk.to?.startsWith('#')" :to="chunk.to">
        {{ chunk.string }}
      </LocaleLink>
      <NuxtLink v-else-if="chunk.to" :to="chunk.to">
        {{ chunk.string }}
      </NuxtLink>
      <span v-else>
        {{ chunk.string }}
      </span>
    </template>
  </div>
</template>
