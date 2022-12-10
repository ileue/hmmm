<template>
  <HeadlessMenu class="h-full flex items-center" as="div">
    <HeadlessMenuButton
      class="w-11 h-11 justify-center items-center flex focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:outline-none group relative"
    >
      <span class="relative w-11 h-11 text-xs">
        <img
          src="//picsum.photos/44/44"
          :alt="$t('profilePicture')"
          width="44"
          height="44"
          class="absolute inset-0 object-cover rounded-full"
        />
      </span>
      <IconButtonTooltip>{{ $t("profile") }}</IconButtonTooltip>
    </HeadlessMenuButton>
    <HeadlessMenuItems as="div"> </HeadlessMenuItems>
  </HeadlessMenu>
</template>
