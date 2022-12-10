<script setup lang="ts"></script>

<template>
  <PostImageWrapper>
    <Transition
      enter-from-class="translate-x-full"
      enter-active-class="transition-transform"
      leave-to-class="-translate-x-full"
      leave-active-class="transition-transform"
    >
    </Transition>
  </PostImageWrapper>
</template>
