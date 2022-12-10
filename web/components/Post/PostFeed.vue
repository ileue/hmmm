<script setup lang="ts">
const liked = ref(false);
const saved = ref(false);
</script>

<template>
  <section role="feed" class="flex flex-col gap-2 w-full max-w-lg">
    <PostElement
      id="wjieijw"
      :primary="true"
      :liked="liked"
      :saved="saved"
      :images="[
        'https://via.placeholder.com/1600x900',
        'https://via.placeholder.com/1600x1000',
      ]"
      @like="liked = !liked"
      @save="saved = !saved"
    />
    <PostElement
      id="wjeiwqje"
      :primary="false"
      :liked="liked"
      :saved="saved"
      :images="['https://via.placeholder.com/1600x900']"
      @like="liked = !liked"
      @save="saved = !saved"
    />
  </section>
</template>
