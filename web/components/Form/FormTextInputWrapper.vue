<script setup lang="ts">
defineProps<{
  error?: string;
  inputId: string;
  label: {
    visible: boolean;
    text: string;
  };
}>();
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col items-start">
      <label
        :for="inputId"
        class="mb-0.5 select-none text-xs"
        :class="!label.visible && 'sr-only'"
      >
        {{ label.text }}
      </label>
      <div>
        <slot />
      </div>
    </div>
    <div v-if="error" :id="`${inputId}Error`" class="mt-1 text-sm text-red-500">
      {{ error }}
    </div>
  </div>
</template>
