<script setup lang="ts">
defineProps<{
  id: string;
  error: boolean;
  is: "input" | "textarea";
  modelValue?: string;
}>();

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <component
    :is="is"
    :id="id"
    :aria-invalid="!!error"
    :aria-errormessage="error ? `${id}Error` : undefined"
    @input="
      emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    :value="modelValue"
    class="ring-2 px-2 py-1 rounded focus:ring-sky-500 focus:outline-none resize-none w-full overflow-hidden bg-white dark:bg-neutral-900 placeholder:text-neutral-500"
    :class="error ? 'ring-red-500' : 'ring-neutral-300 dark:ring-neutral-700'"
    spellcheck="false"
  />
</template>
