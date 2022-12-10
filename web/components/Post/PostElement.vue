<script setup lang="ts">
defineProps<{
  id: string;
  saved: boolean;
  liked: boolean;
  primary: boolean;
  images: string[];
}>();

const emit = defineEmits(["save", "like"]);
</script>

<template>
  <article class="bg-white dark:bg-neutral-900 rounded shadow">
    <div class="p-3 flex flex-col gap-3 break-words">
      <div class="flex flex-col gap-2">
        <div class="flex gap-3 items-center">
          <PostProfilePicture />
          <PostInfo
            name="Marian Kowalski"
            handle="yyyy"
            :timestamp="new Date()"
          />
        </div>
        <div>
          <PostImageWrapper v-if="images.length === 1">
            <PostImage :src="images[0]" />
          </PostImageWrapper>
          <PostImageSlider v-else-if="images.length > 1" :images="images" />
        </div>
        <PostBody
          text="hejka #elo% https://google.com wjiejwoiqjeiwjoi jeiwqjoiejwqoijeoi wjqi #elo"
          :primary="primary"
        />
      </div>
      <div class="flex flex-wrap gap-2">
        <PostSaveButton @click="emit('save')" :saved="saved" />
        <PostLikeButton
          @click="emit('like')"
          :liked="liked"
          :like-count="liked ? 1000 : 999"
        />
        <PostReplyButton v-if="primary" :reply-count="999" />
        <PostRepliesLink v-else :reply-count="999" :to="`/post/${id}`" />
      </div>
    </div>
  </article>
</template>
