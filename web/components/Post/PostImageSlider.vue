<script setup lang="ts">
const currentImage = ref(0);
const left = ref(false);

const props = defineProps<{
  images: string[];
}>();

const swipeLeft = () => {
  if (currentImage.value > 0) {
    currentImage.value--;
    left.value = true;
  }
};

const swipeRight = () => {
  if (currentImage.value < props.images.length - 1) {
    currentImage.value++;
    left.value = false;
  }
};
</script>

<template>
  <PostImageWrapper>
    <PostImageControls
      :show-left="currentImage > 0"
      :show-right="currentImage < images.length - 1"
      @click-left="swipeLeft()"
      @click-right="swipeRight()"
    />
    <template v-for="(image, index) in images">
      <Transition
        :enter-from-class="left ? '-translate-x-full' : 'translate-x-full'"
        enter-active-class="transition-transform duration-300"
        :leave-to-class="left ? 'translate-x-full' : '-translate-x-full'"
        leave-active-class="transition-transform duration-300"
      >
        <PostImage :src="image" v-if="index === currentImage" />
      </Transition>
    </template>
  </PostImageWrapper>
</template>
