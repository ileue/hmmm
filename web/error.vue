<script setup lang="ts">
const error = useError();
</script>

<template>
  <div class="fixed inset-0 flex flex-col">
    <main class="m-auto">
      <h1 class="text-xl font-medium">{{ $t(error?.statusCode) }}</h1>
    </main>
  </div>
</template>
