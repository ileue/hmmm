<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "bg-neutral-100 dark:bg-black text-black dark:text-white",
  },
});

const createPostDialog = useCreatePostDialog();
const searchDialog = useSearchDialog();
</script>

<template>
  <div>
    <ClientOnly>
      <LazyCreatePostDialog />
      <LazySearchDialog />
    </ClientOnly>
    <HeaderElement />
    <div class="flex justify-center p-4 gap-4">
      <slot />
    </div>
  </div>
</template>
