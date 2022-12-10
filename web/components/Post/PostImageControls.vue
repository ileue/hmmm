<script setup lang="ts">
defineProps<{
  showLeft: boolean;
  showRight: boolean;
}>();
const emit = defineEmits(["clickLeft", "clickRight"]);
</script>

<template>
  <div
    class="absolute inset-0 flex p-1 items-center justify-between z-[2]"
    :aria-label="$t('post.image.controls')"
  >
    <div>
      <button
        v-if="showLeft"
        class="p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-full bg-neutral-700/30 text-white"
        :aria-label="$t('slider.prev')"
        @click="emit('clickLeft')"
      >
        <IconMiniArrowLeft @click="emit('clickLeft')" />
      </button>
    </div>
    <div>
      <button
        v-if="showRight"
        class="p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-full bg-neutral-700/30 text-white"
        :aria-label="$t('slider.next')"
        @click="emit('clickRight')"
      >
        <IconMiniArrowRight @click="emit('clickRight')" />
      </button>
    </div>
  </div>
</template>
