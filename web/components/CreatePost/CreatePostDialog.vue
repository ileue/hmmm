<script setup lang="ts">
const createPostDialog = useCreatePostDialog();

const { t } = useI18n();

type InputRefProps = {
  string: string;
  validate: () => void;
  error?: string;
};

const textarea = ref<InputRefProps>({
  string: "",
  validate() {
    if (this.string.trim().length < 1) {
      this.error = t("form.error.empty");
      return;
    }

    if (this.string.length > 255) {
      this.error = t("form.error.maxChars", { limit: 255 });
      return;
    }

    this.error = undefined;
    return;
  },
});
</script>

<template>
  <HeadlessTransitionRoot appear :show="createPostDialog" as="template">
    <HeadlessDialog @close="createPostDialog = false">
      <HeadlessTransitionChild
        as="template"
        enter="transition-opacity"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogBackdrop>
          <HeadlessDialogPanel
            class="w-full h-full max-w-lg bg-white dark:bg-neutral-900 rounded shadow overflow-y-auto px-3 py-2 flex flex-col gap-2"
          >
            <div class="flex items-center justify-between gap-4">
              <HeadlessDialogTitle class="truncate font-medium">
                {{ $t("post.create") }}
              </HeadlessDialogTitle>
              <div><DialogCloseButton @click="createPostDialog = false" /></div>
            </div>
            <form>
              <div class="flex flex-col gap-2">
                <FormTextArea
                  id="postBody"
                  v-model="textarea.string"
                  @blur="textarea.validate()"
                  :label="{
                    text: `${$t('post.form.body')} ${textarea.string.length}`,
                    visible: true,
                  }"
                  :error="textarea.error"
                />
              </div>
            </form>
          </HeadlessDialogPanel>
        </DialogBackdrop>
      </HeadlessTransitionChild>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
