<template>
  <div class="relative">
    <div
      class="absolute inset-0 pointer-events-none flex items-center justify-center"
    >
      <LoadingSpinnerPrimary class="w-8 h-8" />
    </div>
    <div class="text-transparent rounded overflow-hidden relative">
      <img
        src="//picsum.photos/1600/400"
        :alt="$t('post.imageAlt')"
        width="1600"
        height="400"
        class="w-full min-h-[14rem] max-h-96 object-cover object-center"
        loading="lazy"
      />
    </div>
  </div>
</template>
