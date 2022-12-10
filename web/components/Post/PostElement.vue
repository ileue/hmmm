<script setup lang="ts">
const liked = ref(false);
const saved = ref(false);
</script>

<template>
  <article class="bg-white dark:bg-neutral-900 rounded shadow">
    <div class="p-3 flex flex-col gap-2 break-words">
      <div class="flex gap-3 items-center">
        <PostProfilePicture />
        <PostInfo
          name="Marian Kowalski"
          handle="yyyy"
          :timestamp="new Date()"
        />
      </div>
      <PostImageWrapper>
        <PostImage />
      </PostImageWrapper>
      <PostBody text="hejka #elo% https://google.com" :primary="false" />
      <div class="flex flex-wrap gap-1">
        <PostSaveButton @click="saved = !saved" :saved="saved" />
        <PostLikeButton
          @click="liked = !liked"
          :liked="liked"
          :like-count="liked ? 1000 : 999"
        />
        <PostReplyButton :reply-count="999" />
      </div>
    </div>
  </article>
</template>
