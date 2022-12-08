<script setup lang="ts">
defineProps<{
  error?: string;
  type?: string;
  id: string;
  label: {
    visible: boolean;
    text: string;
  };
  placeholder?: string;
  rows?: number;
  modelValue?: string;
}>();

const emit = defineEmits(["update:modelValue", "blur"]);
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col items-start">
      <label :for="id" class="mb-0.5 select-none text-xs">
        {{ label.text }}
      </label>
      <textarea
        :id="id"
        :type="type ?? 'text'"
        :aria-invalid="!!error"
        :aria-errormessage="error ? `${id}Error` : undefined"
        :placeholder="$t('post.form.placeholder')"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        @blur="emit('blur')"
        :value="modelValue"
        class="ring-2 px-2 py-1 rounded focus:ring-sky-500 focus:outline-none resize-none w-full overflow-hidden bg-white dark:bg-neutral-900 placeholder:text-neutral-500"
        :class="
          error ? 'ring-red-500' : 'ring-neutral-300 dark:ring-neutral-700'
        "
        :rows="rows ?? 5"
        spellcheck="false"
      />
    </div>
    <div v-if="error" :id="`${id}Error`" class="mt-1 text-sm text-red-500">
      {{ error }}
    </div>
  </div>
</template>
