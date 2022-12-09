<script setup lang="ts">
const liked = ref(false);
const saved = ref(false);
</script>

<template>
  <article class="bg-white dark:bg-neutral-900 rounded shadow">
    <div class="p-3 flex flex-col gap-3 break-words">
      <div class="flex gap-3 items-center">
        <PostProfilePicture />
        <PostProfileInfo name="Marian Kowalski" handle="yyyy" />
      </div>
      <PostImageWrapper>
        <PostImage />
      </PostImageWrapper>
      <PostBody text="hejka #elo% https://google.com" :primary="false" />
      <div class="flex flex-wrap gap-2 justify-between">
        <div class="flex gap-1">
          <PostSaveButton @click="saved = !saved" :saved="saved" />
          <PostLikeButton
            @click="liked = !liked"
            :liked="liked"
            :like-count="liked ? 1000 : 999"
          />
        </div>
        <div>
          <PostReplyButton />
        </div>
      </div>
    </div>
  </article>
</template>
