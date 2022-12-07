<template>
  <Transition
    enter-from-class="opacity-0"
    enter-active-class="transition-opacity"
    leave-to-class="opacity-0"
    leave-active-class="transition-opacity"
  >
    <slot />
  </Transition>
</template>
