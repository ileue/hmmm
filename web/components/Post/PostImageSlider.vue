<template>
  <div class="relative">
    <div
      class="text-transparent rounded overflow-hidden relative bg-neutral-200/50 dark:bg-neutral-800/50 aspect-video"
    >
      <Transition
        enter-from-class="translate-x-full"
        enter-active-class="transition-transform"
        leave-to-class="-translate-x-full"
      ></Transition>
    </div>
  </div>
</template>
