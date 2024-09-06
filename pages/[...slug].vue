<template>
  <div class="flex gap-10">
    <ContentNavigation
      v-slot="{ navigation }"
      :query="queryContent($route.params.slug[0])"
    >
      <UVerticalNavigation
        class="sticky top-[105px] h-max"
        :links="
          navigation[0].children.map(link => ({
            label: link.title,
            to: link._path
          }))
        "
      />
    </ContentNavigation>
    <ContentDoc class="dark:invert prose" />
  </div>
</template>

<style>
.prose {
  max-width: max-content;
}

img {
  width: 100%;
  margin: auto;
}

p {
  font-size: 1.25rem;
}
</style>
